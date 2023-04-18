import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
// import StartupCard from "./StartupCard";
import "../css/Home.css";
import FeedsPage from "./FeedsPage";
import FeedsDisplay from "./FeedsDisplay";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="Main-Cont">
        <div className="Side-Cont">
          <SideNav />
        </div>
        <div className="Home-Container"><FeedsPage/></div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
