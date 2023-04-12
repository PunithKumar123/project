import React, { useRef } from "react";
// import toastr from "reactjs-toastr/lib/react-toast";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/validation";
import Otp from "../component/OtpVerification";
import { useNavigate } from "react-router-dom";
import axios from "./axios";
// import { setKey } from "../redux/actions/auth";
import "../css/Signup.css";
import Sso from "./Sso";
import { signingup, baseUrl } from "../Api.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import photo from "/home/nineleaps/project/project/src/Assets/photo.avif";

const initialValues = {
  role: "",
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function Signup() {
  const navigate = useNavigate();
  const [role, setrole] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const [backendError, setBackendError] = useState("");
  const handleChanged = (e) => {
    const target = e.target;
    if (target.checked) {
      setrole(target.value);
    }
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, dispatch) => {
      console.log({
        role: values.role,
        name: values.name,
        email: values.email,
        password: values.password,
      });

      try {
        axios
          .post(baseUrl.baseUrl + signingup.signup, {
            role: role,
            name: values.name,
            email: values.email,
            password: values.password,
          })

          .then((response) => {
            const { registrationKey } = response.data;
            localStorage.setItem("registrationKey", registrationKey);
            localStorage.getItem("registrationKey");
            // dispatch={setKey}
            console.log(registrationKey);
            console.log("Hello");
            setIsSignupSuccess(true);
            navigate("/Otp", { state: { role: role, registrationKey } });
          });
      } catch (error) {
        console.log(error);
        // if (error.result && error.result.data && error.result.data.message) {
        //   setBackendError(error.result.data.message);
        // } else {
        //   setBackendError("An error occurred while submitting the form.");
        // }
      }
    },
  });

  // const dispatch=useDispatch();
  // const navigate=useNavigate();
  // const navigateToOtp=()=>{
  //   navigate('/Otp');
  // }
  return (
    <>
      <div className="container-signup">
        {/* <h2 className="title-signup">Create Account</h2> */}
        <div className="container-left">
          <img src={photo} alt="Unable to load"></img>
        </div>
        <div className="app-wrapper-signup">
          <h2 className="title-signup">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div onClick={handleChanged}>
              <input
                type="radio"
                className="role"
                id="1"
                value="1"
                checked={role === "1"}
                onChange={handleChanged}
              />
              Investor
              <input
                type="radio"
                className="role"
                id="2"
                value="2"
                checked={role === "2"}
                onChange={handleChanged}
              />
              StartUp
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Name</label>
              <input
                className="txtForm-signup"
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Email</label>
              <input
                className="txtForm-signup"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Password</label>
              <input
                className="txtForm-signup"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Confirm Password</label>
              <input
                className="txtForm-signup"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                autoComplete="off"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <button className="submit" type="submit" onClick={handleSubmit}>
                Signup
              </button>
            </div>
            {backendError && <p className="form-error">{backendError}</p>}
            <p className="Or-sg">Or</p>
            <div className="Sso">
              <Sso />
            </div>
            <div className="Para">
              <p className="anchor-tag">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="side-container">
        <p></p>
      </div>
    </>
  );
}
export default Signup;
