import React, { useState } from "react";
import axios from "axios";
import "../css/otp.css";
import id from "./BsignIn";
import { useNavigate } from "react-router-dom";
import { baseUrl, validate } from "../Api";
import Signup from "./BsignIn";
import { useLocation } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpVerified, setOTPVerified] = useState(false);
  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };
  const handleVerifyOTP = () => {
    const registerKey = localStorage.getItem("registrationKey");
    axios
      .post(baseUrl.baseUrl + validate.validate, {
        registerKey,
        otpType: "registration_otp",
        otp,
      })
      .then((response) => {
        setOTPVerified(true);
        const data = location.state;
        console.log(response.data);
        if (data.role == "1") {
          navigate("/registrationvc");
        } else if (data.role == "2") {
          navigate("/registrationEnt");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="otpv" style={{ width: "100%" }}>
      <div className="Otp">
        <h4>Enter OTP:</h4>
        <input
          className="Input"
          type="text"
          value={otp}
          onChange={handleOTPChange}
        />
        <button className="submit" onClick={handleVerifyOTP}>
          Verify OTP
        </button>
        <br />
        {otpVerified && <h6>OTP Verified Successfully!</h6>}
        <br />
      </div>
    </div>
  );
}
export default Otp;
