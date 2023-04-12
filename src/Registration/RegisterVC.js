import React, { useState } from "react";
import "../css/registervc.css";
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
          Profilepic: userregisteration.profileImage,
          vcname: userregisteration.vcname,
          vclinkedin: userregisteration.vclinkedin,
          email: userregisteration.email,
          contact: userregisteration.contact,
          expertise: userregisteration.expertise,
          bio: userregisteration.bio,
          city: userregisteration.city,
          buildingNo: userregisteration.buildingNo,
          street: userregisteration.street,
          state: userregisteration.state,
          country: userregisteration.country,
          pin: userregisteration.pin,
        })
        .then((response) => {
          console.log(response);
          navigate("/");
        });
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="form-container-vc">
        <form action="" onSubmit={handleSubmit}>
          <h2>Register as Investor</h2>
          <div>
            <label className="Photo" htmlFor="profileImage">
              Photo
            </label>
            <br></br>
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
          <div>
            <label htmlFor="vcname">Name</label>
            <br></br>
            <input
              type="text"
              autoComplete="on"
              value={userregisteration.vcname}
              onChange={handleInput}
              name="vcname"
              id="vcname"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.email}
              onChange={handleInput}
              name="email"
              id="email"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="vclinkedin">Linkedin</label>
            <br></br>
            <input
              type="url"
              autoComplete="off"
              value={userregisteration.vclinkedin}
              onChange={handleInput}
              name="vclinkedin"
              id="vclinkedin"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="contact">Phone</label>
            <br></br>
            <input
              type="tel"
              autoComplete="off"
              value={userregisteration.contact}
              onChange={handleInput}
              name="contact"
              id="contact"
              minLength="10"
              maxLength="10"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="expertise">Expertise</label>
            <br></br>
            <input
              type="textArea"
              autoComplete="off"
              value={userregisteration.expertise}
              onChange={handleInput}
              name="expertise"
              id="expertise"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="bio">bio</label>
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
          <div>
            <label htmlFor="location">Location</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.buildingNo}
              onChange={handleInput}
              name="buildingNo"
              id="buildingNo"
              placeholder="Building no"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.street}
              onChange={handleInput}
              name="street"
              id="street"
              placeholder="street"
              className="txtForm"
            />
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.city}
              onChange={handleInput}
              name="city"
              id="city"
              placeholder="city"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.state}
              onChange={handleInput}
              name="state"
              id="state"
              placeholder="state"
              className="txtForm"
            />
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.pin}
              onChange={handleInput}
              name="pin"
              id="pin"
              placeholder="pin"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.country}
              onChange={handleInput}
              name="country"
              id="country"
              placeholder="country"
              className="txtForm"
            />
          </div>
          <button className="btn-1" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};
export default Registervc;
