import React, { useState } from "react";
import AddRemoveInputField from "../component/AddRemoveInputField.js";
import { useNavigate } from "react-router";
import "/home/nineleaps/project/project/src/css/Startup.css";
// import "/home/nineleaps/project/project/src/css/registerextra.css"
import { useDispatch } from "react-redux";
import axios from "axios";
import { baseUrl, registrationent } from "../Api.js";
import { useLocation } from "react-router";
import Entreprenur from "../component/personalinfo.js";

const Register = () => {
  const [reg, setReg] = useState({
    startupName: "",
    linkedin: "",
    Websiteurl: "",
    startupSummary: "",
    bio: "",
    pitchDeck: "",
    seriesOfFunding: "",
    currentValuation: "",
    domain: "",
    street: "",
    city: "",
    state: "",
    country: "",
    buildingNo: "",
    pin: "",
    email: "",
    name: "",
    role: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setReg({ ...reg, [name]: value });
  };
  const handlePrev = () => {
    navigate("/startup");
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = location.state;
    try {
      axios
        .post(baseUrl.baseUrl + registrationent.registrationent, {
          data,
          startupName: reg.startupName,
          linkedin: reg.linkedin,
          Websiteurl: reg.Websiteurl,
          startupSummary: reg.startupSummary,
          bio: reg.bio,
          pitchDeck: reg.pitchDeck,
          seriesOfFunding: reg.seriesOfFunding,
          currentValuation: reg.currentValuation,
          domain: reg.domain,
          street: reg.street,
          city: reg.city,
          state: reg.state,
          country: reg.country,
          buildingNo: reg.buildingNo,
          pin: reg.pin,
          email: reg.email,
          name: reg.name,
          role: reg.role,
        })
        .then((response) => {
          console.log(response);
          navigate("/Feed");
        });
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="form-container-st">
        <form action="" onSubmit={handleSubmit}>
          <h2>Register as Startup</h2>
          <div>
            <label htmlFor="startupName">Startup Name</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={reg.startupName}
              onChange={handleInput}
              name="startupName"
              id="startupName"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="linkedin">Linkedin</label>
            <br></br>
            <input
              type="url"
              autoComplete="off"
              value={reg.linkedin}
              onChange={handleInput}
              name="linkedin"
              id="linkedin"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="Websiteurl">Website url</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={reg.Websiteurl}
              onChange={handleInput}
              name="Websiteurl"
              id="Websiteurl"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="startupSummary">Summary</label>
            <br></br>
            <input
              type="textArea"
              autoComplete="off"
              value={reg.startupSummary}
              onChange={handleInput}
              name="startupSummary"
              id="startupSummary"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={reg.bio}
              onChange={handleInput}
              name="bio"
              id="bio"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="pitchDeck">pitchDeck</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={reg.pitchDeck}
              onChange={handleInput}
              name="pitchDeck"
              id="pitchDeck"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="seriesOfFunding">seriesOfFunding</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={reg.seriesOfFunding}
              onChange={handleInput}
              name="seriesOfFunding"
              id="seriesOfFunding"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="currentValuation">currentValuation</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={reg.currentValuation}
              onChange={handleInput}
              name="currentValuation"
              id="currentValuation"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="domain">Domain</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={reg.domain}
              onChange={handleInput}
              name="domain"
              id="domain"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={reg.buildingNo}
              onChange={handleInput}
              name="buildingNo"
              id="buildingNo"
              placeholder="BuildingNo"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={reg.street}
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
              value={reg.city}
              onChange={handleInput}
              name="city"
              id="city"
              placeholder="city"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={reg.state}
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
              value={reg.pin}
              onChange={handleInput}
              name="pin"
              id="pin"
              placeholder="pin"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={reg.country}
              onChange={handleInput}
              name="country"
              id="country"
              placeholder="country"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="cofounder" className="cofounder">
              Add Cofounders
            </label>
            <AddRemoveInputField />
          </div>
          <button className="prev" type="prev" onClick={handlePrev}>
            prev
          </button>
          <button className="submit" type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
