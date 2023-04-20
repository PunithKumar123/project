import React, { useState, useEffect } from "react";
import axios from "axios";
import "/home/nineleaps/project/project/src/css/profilestartup.css";
import Footer from "./Footer";

function ProfilePagevc() {
  
  const [profileData, setProfileData] = useState(true);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showOverviewDetails, setShowOverviewDetails] = useState(true);
  const [roleType, setRoleType] = useState(null);
   
        
        useEffect(() => {
          const signupType = localStorage.getItem("role");
          setRoleType(signupType);
      
          let apiUrl;
          if (roleType === "1") {
            apiUrl = "https://dummyjson.com/investors/50";
          } else if (roleType === "2") {
            apiUrl = "https://dummyjson.com/entrepreneurs/40";
          }
      
          if (apiUrl) {
            axios
              .get(apiUrl)
              .then((response) => {
                setProfileData(response.data);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }, [roleType]);
      


  const handleInterestedClick = () => {};

  
 
  
  const handleMoreDetailsClick = (event) => {
    event.preventDefault();
    setShowMoreDetails(true);
    
    setShowOverviewDetails(false);
  };
  
  const handleOverviewDetailsClick = (event) => {
    event.preventDefault();
    setShowOverviewDetails(true);
    
    setShowMoreDetails(false);
  };
  


  return (
    <div className="profile-container-st">
      <div className="Bg-color">
        <img className="profile-image" src={profileData.image} alt="Profile Image" />
        <h5>{profileData.name}</h5>
      </div>
      <div className="Link-BG">
        <div className="Links">
          <a href="/" onClick={handleOverviewDetailsClick}>Overview</a>
          <a href="/" onClick={handleMoreDetailsClick}>More Info</a>
        </div>
      
      </div>
      
      {showMoreDetails && (
        <div className="more-info-container">
          <div className="location-pf"> 
          <h2>location</h2>
        
        <p className="location">{profileData.location} </p>
        </div>
        <div className="FAQs-pf"> 
        <h2 className="FAQs">FAQs</h2>
        </div>
          
        </div>
      )}
      {showOverviewDetails && (
        <>
        <div className="profilerow1">
          <div className="Summary-st">
            <h2>Summary</h2>
            <p>{profileData.summary}</p>
          </div>
          <div className="domain-container">
            <h2>Expertise</h2>
            <p className="domain">{profileData.expertise}</p>
          </div>
          </div>
          <div className="profilerow2">
          <div className="bio-container-st">
            <h2>Bio</h2>
            <p className="bio">{profileData.bio}</p>
          </div>
          
            <div className="other-container-st">
              <h2>Overview</h2>
              <p className="other">{profileData.overview}</p>
            </div>
            </div>
            
          
        </>
      )}
      

<Footer />
    </div>
  );
}

export default ProfilePagevc;
