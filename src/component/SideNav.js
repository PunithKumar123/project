import React, { useState } from "react";
import "../css/SideNav.css";
import plantIcon from "../Assets/plant.png";
import Profile from "../Assets/Icons/Profile.png";
import Portfolio from "../Assets/Icons/portfolio.png";
import Explore from "../Assets/Icons/Explore.png";
import Bidding from "../Assets/Icons/Bidding.png";
import Logout from "../Assets/Icons/Logout.png";
const SideNav = () => {
    const [isExpended, setExpendState] = useState(false);
    const menuItems = [
        {
            text: "Profile",
            Icons: Profile,
        },
        {
            text: "Portfolio",
            Icons: Portfolio ,
        },
        {
            text: "Explore",
            Icons: Explore ,
        },
        {
            text: "Bid Now",
            Icons:  Bidding ,
        },
        {
            text: "Logout",
            Icons: Logout,
        },
    ];
    return (
        <div
            className={
                isExpended
                    ? "side-nav-container"
                    : "side-nav-container side-nav-container-nx"
            }>
            <div className="nav-upper">
                <div className="nav-heading">
                    <div className="nav-brand">
                        <img src={plantIcon} alt="loding"></img>
                        {isExpended && <h2>Nine Seeders</h2>}
                    </div>
                    <button
                        className={
                            isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
                        }
                        onClick={() => setExpendState(!isExpended)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                {/* <div className="nav-menu">
                    {menuItems.map(({ text, Icons }) => (
                        <a href="#" className="menu-Item">
                            <img src={Icons} alt="" srcSet="" />
                            <p>{text}</p>
                        </a>
                    ))}
                </div> */}
                <div className="nav-menu">
                    {menuItems.map(({ text, Icons }) => (
                        <a className="menu-Item"
                            href="#">
                            <img className="menu-item-icon" src={Icons} alt="" srcset="" />
                            {isExpended && <p>{text}</p>}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default SideNav;