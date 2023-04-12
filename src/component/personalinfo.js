import React, { useState } from "react";
import "../css/personalinfo.css";
import Register from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Entreprenur = () => {
  const [person, setPerson] = useState({
    profileImage: "",
    fname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };
  const dispatch = useDispatch(Register);
  const [profileImage, setProfileImage] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      Register({
        profileImage,
        fname,
        email,
        phone,
        city,
        state,
        country,
      })
    );
    navigate("/registrationent", { state: { person } });
  };

  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Register yourself</h1>
          <br />
          <div>
            <label htmlFor="profileImage">Photo</label>
            <br></br>
            <input
              type="file"
              autoComplete="off"
              value={person.profileImage}
              onChange={handleInput}
              name="profileImage"
              id="profileImage"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="fname">Name</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={person.fname}
              onChange={handleInput}
              name="fname"
              id="fname"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={person.email}
              onChange={handleInput}
              name="email"
              id="email"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <br></br>
            <input
              type="tel"
              autoComplete="off"
              value={person.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={person.city}
              onChange={handleInput}
              name="city"
              id="city"
              placeholder="city"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={person.state}
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
              value={person.country}
              onChange={handleInput}
              name="country"
              id="country"
              placeholder="country"
              className="txtForm"
            />
            <button className="next" type="submit" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Entreprenur;
