import React from "react";
//import Profile from './component/Profile';
// import './App.css';
// import Card from './component/cardStartup';
import GuestPage from "./component/GuestPage";
// import AddRemoveInputField from './component/AddRemoveInputField';
// import Footer from './component/Footer';
//  import Login from './component/Login';
//import Navbar from './component/Navbar';
// import Otp from './component/OtpVerification';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import SignupForm from '/home/nineleaps/project/src/component/Signup.js';
//import Sso from './component/Sso';
import Ulogin from "./component/Login";
import Register from "./Registration/Register";
import Registervc from "./Registration/RegisterVC";
import { FormProvider } from "./component/Context/FormContext";
import Form from "./component/form";
//import ButtonPage from './component/SignupOpt';
import Signup from "./component/BsignIn.js";
// import LinkedInSSO from './component/LinkedInSSO';
//import RandomApi from './TestApi';
import Otp from "./component/OtpVerification";
// import LinkedInPage from './component/LinkedinTest';
//import Entreprenur from './component/personalinfo';
// import Otp from "/home/nineleaps/project/src/component/OtpVerification";
import HomePage from "./component/HomePage.js";
import UserProfile from "./component/Userprofile";
import ProfilePage from "./component/profile-vc";
import { posts } from "./component/posts";
import PostForm from "./component/Postform";
import Entreprenur from "./component/personalinfo";

//import Feed from './component/Feeds';

function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <RandomApi/> */}
      {/* <LinkedInPage/> */}
      {/* <Signup /> */}
      {/* <Navbar/> */}

      {/* <Card/> */}
      {/* <Count/> */}
      {/* <Otp/> */}
      {/* <Footer /> */}
      {/* <AddRemoveInputField/> */}
      {/* <Register/> */}
      {/* <Registervc/> */}
      {/* <ButtonPage/> */}
      {/* <Sso/> */}
      {/* <Login/> */}
      {/* <Login/> */}
      {/* <GuestPage/> */}
      {/* <Profile/> */}
      {/* <Entreprenur/> */}
      {/* <LinkedInSSO/> */}
      {/* <UserProfile /> */}
      {/* <UserProfile /> */}
      {/* <ProfilePage /> */}
      {/* <BrowserRouter>
      <Routes>
        <Route exact path="/Homepage" element={<HomePage/>}/>
        <Route exact path="/postform" element={<PostForm/>}/>
        <Route exact path="/posts" element={<posts/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* <FormProvider>
        <Form/>
      </FormProvider> */}

      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<GuestPage />} />
            <Route exact path="/login" element={<Ulogin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/Otp" element={<Otp />} />
            <Route exact path="/HomePage" element={<HomePage />} />

            <Route exact path="/startup" element={<Entreprenur />} />
            <Route exact path="/registrationvc" element={<Registervc />} />
            <Route exact path="/homePage" element={<HomePage />} />
            <Route exact path="/registrationent" element={<Register />} />
            <Route exact path="/posts" element={<posts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
