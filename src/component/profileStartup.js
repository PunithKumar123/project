import React, { useState, useEffect } from "react";
import axios from "axios";
import "/home/nineleaps/project/project/src/css/profilestartup.css";
import Footer from "./Footer";

function ProfilePagest() {
  
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
  );
  const [bio, setBio] = useState(
    "A very practical investor, always interested in helping people and startup grow, Provides technical support, Basically a allrounder  "
  );
  const [domain, setDomain] = useState(
    "Marketing, science,Pharma,Manufacturing"
  );
  const [overview, setOverview] = useState(
    "I invest for those who are worthy "
  );
  const [summary, setSummary] = useState(
    "Before you begin, you should decide whether you want to go with a traditional business plan format or a lean startup format. The traditional format is appropriate if you want to have a comprehensive, detail-oriented plan or if you are requesting financing. The lean startup format is best for those who have a relatively simple business and want to start it quickly or as a starting point for those who plan to refine and change the plan Here the company describes how long the company has been in business, citing its roots, the founder, Howard Schultz, and how he was inspired to open the first Starbucks in Seattle after visiting Italy. It briefly mentions the growth of millions of customers and how the company "
  );
  const [location, setLocation] = useState(
    "183/194/1 ,1st cross Sri Rama layout, Devrachikkanhalli,Banglore "
  );
  const [name, setName] = useState("Punith Kumar G P ");
  const [showPitchDetails, setShowPitchDetails] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showOverviewDetails, setShowOverviewDetails] = useState(true);
  const [pitch,setPitch]=useState("pitchdetails")
  useEffect(() => {
    axios
      .get("/api/profile")
      .then((response) => {
        const {
          image,
          bio,
          domain,
          overview,
          summary,
          location,
          name,
          pitch,
        } = response.data;
        setImage(image);
        setBio(bio);
        setDomain(domain);
        setOverview(overview);
        setSummary(summary);
        setLocation(location);
        setName(name);
        setPitch(pitch);
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
        <img className="profile-image" src={image} alt="Profile Image" />
        <h5>{name}</h5>
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
        <p className="location">{location} </p>
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
            <p>{summary}</p>
          </div>
          <div className="domain-container">
            <h2>Domain</h2>
            <p className="domain">{domain}</p>
          </div>
          </div>
          <div className="profilerow2">
          <div className="bio-container-st">
            <h2>Bio</h2>
            <p className="bio">{bio}</p>
          </div>
          
            <div className="other-container-st">
              <h2>Overview</h2>
              <p className="other">{overview}</p>
            </div>
            </div>
            
          
        </>
      )}
      {showPitchDetails && (
       <>
       <div className="Pitchh">
       <div className="pitch-details-container">
         <h2>Pitch Details</h2>
         <p>{pitch}</p>
         </div>
       </div>
      
       </>
      )}

<Footer />
    </div>
  );
}

export default ProfilePagest;
