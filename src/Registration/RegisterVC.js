import React, { useState } from "react";
// import "../css/registervc.css";
import "/home/nineleaps/project/project/src/css/rvc.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl, registrationvc } from "../Api";
// import "/home/nineleaps/Downloads/frontend_project-main/src/css/startup.css";
const Registervc = () => {
  const [userregisteration, setuserregisteration] = useState({
    profileImage: "",
    vcname: "",
    vclinkedin: "",
    email: "",
    contact: "",
    expertise: "",
    bio: "",
    city: "",
    buildingNo: "",
    street: "",
    state: "",
    country: "",
    pin: "",
    shortSummary: "",
  });
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuserregisteration({ ...userregisteration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationKeyVc = localStorage.getItem("registrationKey");
    const recordData = { ...userregisteration };
    console.log(records);
    setRecords([...records, recordData]);
    try {
      axios
        .post(baseUrl.baseUrl + registrationvc.registrationvc, {
          registrationKeyVc,
          // Profilepic: userregisteration.profileImage,
          // vcname: userregisteration.vcname,
          // vclinkedin: userregisteration.vclinkedin,
          // email: userregisteration.email,
          // contact: userregisteration.contact,
          expertise: userregisteration.expertise,
          bio: userregisteration.bio,
          // city: userregisteration.city,
          // buildingNo: userregisteration.buildingNo,
          // street: userregisteration.street,
          // state: userregisteration.state,
          // country: userregisteration.country,
          // pin: userregisteration.pin,
        })
        .then((response) => {
          console.log(response);
          navigate("/HomePage");
        });
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="bg">
        <div className="form-container-vc">
          <form className="Form-vc" action="" onSubmit={handleSubmit}>
            <h2>Register as Investor</h2>
            <div>
              <label className="Photo" htmlFor="profileImage">
                Photo
              </label>
              <input
                type="file"
                autoComplete="off"
                value={userregisteration.profileImage}
                onChange={handleInput}
                name="profileImage"
                id="profileImage"
                className="txtForm-1"
              />
            </div>
            <div id="vcname">
              <label id="name-txt" htmlFor="vcname">
                Name
              </label>
              <input
                type="text"
                autoComplete="on"
                value={userregisteration.vcname}
                onChange={handleInput}
                name="vcname"
                className="txtForm "
              />
            </div>
            <div id="email">
              <label id="email-txt" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                autoComplete="off"
                value={userregisteration.email}
                onChange={handleInput}
                name="email"
                // id="email"
                className="txtForm"
              />
            </div>
            <div id="vclinkedin">
              <label id="linkedin-txt" htmlFor="vclinkedin">
                Linkedin
              </label>
              <input
                type="url"
                autoComplete="off"
                value={userregisteration.vclinkedin}
                onChange={handleInput}
                name="vclinkedin"
                className="txtForm"
              />
            </div>
            <div id="contact">
              <label id="phone-txt" htmlFor="contact">
                Phone
              </label>
              <input
                type="tel"
                autoComplete="off"
                value={userregisteration.contact}
                onChange={handleInput}
                name="contact"
                minLength="10"
                maxLength="10"
                className="txtForm"
              />
            </div>
            <div id="expertise">
              <label id="expertise-txt" htmlFor="expertise">
                Expertise
              </label>
              <br></br>
              <input
                type="textArea"
                autoComplete="off"
                value={userregisteration.expertise}
                onChange={handleInput}
                name="expertise"
                className="txtForm"
              />
            </div>
            <div id="bio-div">
              <label id="bio-txt" htmlFor="bio">
                Bio
              </label>
              <br></br>
              <input
                type="textarea"
                autoComplete="off"
                value={userregisteration.bio}
                onChange={handleInput}
                name="bio"
                id="bio"
                className="txtForm"
              />
            </div>
            <div id="Short-summary">
              <label id="" htmlFor="Shortsummary">
                Summary
              </label>
              <br></br>
              <input
                type="textarea"
                autoComplete="off"
                // value={userregisteration.bio}
                onChange={handleInput}
                name="shortSummary"
                id="summary"
                className="txtForm"
              />
            </div>
            <div id="buildingNo">
              <label id="buildingNo-txt" htmlFor="location">
                Location
              </label>
              <br></br>
              <input
                type="text"
                autoComplete="off"
                value={userregisteration.buildingNo}
                onChange={handleInput}
                name="buildingNo"
                placeholder="Building no"
                className="txtForm"
              />
            </div>
            <div id="street">
              <input
                type="text"
                autoComplete="off"
                value={userregisteration.street}
                onChange={handleInput}
                name="street"
                placeholder="street"
                className="txtForm"
              />
            </div>
            <div id="city">
              <input
                type="text"
                autoComplete="off"
                value={userregisteration.city}
                onChange={handleInput}
                name="city"
                placeholder="city"
                className="txtForm"
              />
            </div>
            <div id="state">
              <input
                type="text"
                autoComplete="off"
                value={userregisteration.state}
                onChange={handleInput}
                name="state"
                placeholder="state"
                className="txtForm"
              />
            </div>
            <div id="pin">
              <input
                type="text"
                autoComplete="off"
                value={userregisteration.pin}
                onChange={handleInput}
                name="pin"
                placeholder="pin"
                className="txtForm"
              />
            </div>
            <div id="country">
              <input
                type="text"
                autoComplete="off"
                value={userregisteration.country}
                onChange={handleInput}
                name="country"
                placeholder="country"
                className="txtForm"
              />
            </div>
            <button className="btn-1" onClick={handleSubmit}>
              Register
            </button>
          </form>
        </div>
        {/* <div id="Div-side-left">left</div> */}
      </div>
    </>
  );
};
export default Registervc;