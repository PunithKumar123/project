import React, { useState, useEffect } from "react";
import axios from "axios";
import "/home/nineleaps/project/project/src/css/profilestartup.css";
import Footer from "./Footer";

function ProfilePagest() {
  
  const [profileData, setProfileData] = useState(true);
  
  const [showPitchDetails, setShowPitchDetails] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showOverviewDetails, setShowOverviewDetails] = useState(true);
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`
  };
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/50")
      .then((response) => {
        setProfileData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleInterestedClick = () => {};

  
  const handlePitchDetailsClick = (event) => {
    event.preventDefault();
    setShowPitchDetails(true);
    setShowMoreDetails(false);
    setShowOverviewDetails(false);
  };
  
  const handleMoreDetailsClick = (event) => {
    event.preventDefault();
    setShowMoreDetails(true);
    setShowPitchDetails(false);
    setShowOverviewDetails(false);
  };
  
  const handleOverviewDetailsClick = (event) => {
    event.preventDefault();
    setShowOverviewDetails(true);
    setShowPitchDetails(false);
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
          <a href="/" onClick={handlePitchDetailsClick}>
            Pitch Details
          </a>

          <a href="/" onClick={handleMoreDetailsClick}>More Info</a>
        </div>
        <button className="button-interested" onClick={handleInterestedClick}>
          Interested
        </button>
      </div>
      
      {showMoreDetails && (
        <div className="more-info-container">
          <div className="location-pf"> 
          <h2>location</h2>
        <p className="location">{profileData.bloodGroup} </p>
        {/* <p className="location">{profileData.location} </p> */}
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
            <h2>Domain</h2>
            <p className="domain">{profileData.domain}</p>
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
      {showPitchDetails && (
       <>
       <div className="Pitchh">
       <div className="pitch-details-container">
         <h2>Pitch Details</h2>
         <p>{profileData.pitch}</p>
         </div>
       </div>
      
       </>
      )}

<Footer />
    </div>
  );
}

export default ProfilePagest;
