import React, { useState } from "react";
import AddRemoveInputField from "../component/AddRemoveInputField.js";

import "/home/nineleaps/project/project/src/css/rst.css";
// import "/home/nineleaps/project/project/src/css/registerextra.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, registrationent } from "../Api.js";


function Register ({formData,setFormData}){
  
  return (
    <>
      <div className="startup">
        <form action="">
         <div className="startup-row1">
          <div id="startupName-st">
            <label htmlFor="startUpName">Startup Name</label>
           
            <input
              type="text"
              autoComplete="off"
              value={formData.startUpName}
              onChange={
                (event)=>setFormData({...formData, startUpName:event.target.value})
              }
              name="startUpName"
              
              className="txtForm"
            />
          </div>
          <div id="linkedin-st">
            <label htmlFor="linkedin">Linkedin</label>
            
            <input
              type="url"
              autoComplete="off"
              value={FormData.linkedin}
              onChange={
                (event)=>setFormData({...formData, linkedin:event.target.value})
              }
              name="linkedin"
             
              className="txtForm"
            />
          </div>
          </div>
          <div id="Websiteurl">
            <label htmlFor="Websiteurl">Website url</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={FormData.Websiteurl}
              onChange={
                (event)=>setFormData({...formData, Websiteurl:event.target.value})
              }
              name="Websiteurl"
              
              className="txtForm"
            />
          </div>
          <div id="startupSummary-st-s">
            <label htmlFor="startupSummary">Summary</label>
            <br></br>
            <input
              type="textArea"
              autoComplete="off"
              value={FormData.startupSummary}
              onChange={
                (event)=>setFormData({...formData, startupSummary:event.target.value})
              }
              name="startupSummary"
              id="startupSummary-st"
              className="txtForm"
            />
          </div>
          <div id="bio-st-up">
            <label htmlFor="bio">Bio</label>
            
            <input
              type="textarea"
              autoComplete="off"
              value={FormData.bio}
              onChange={
                (event)=>setFormData({...formData, bio:event.target.value})
              }
              name="bio"
              id="bio-st"
              className="txtForm"
            />
          </div>
          <div className="startup-row5">
          <div id="currentValuation">
            <label htmlFor="currentValuation">Current Valuation</label>
            
            <input
              type="textarea"
              autoComplete="off"
              value={FormData.currentValuation}
              onChange={(event)=>setFormData({...formData, currentValuation:event.target.value})}
              name="currentValuation"
              
              className="txtForm"
            />
          </div>
          <div id="seriesOfFunding">
            <label htmlFor="seriesOfFunding">Series Of Funding</label>
            
            <input
              type="textarea"
              autoComplete="off"
              value={FormData.seriesOfFunding}
              onChange={(event)=>setFormData({...formData, seriesOfFunding:event.target.value})}
              name="seriesOfFunding"
              
              className="txtForm"
            />
          </div>
          </div>
          <div id="pitchDeck">
            <label htmlFor="pitchDeck">Pitch Deck</label>
            
            <input
              type="textarea"
              autoComplete="off"
              value={FormData.pitchDeck}
              onChange={
                (event)=>setFormData({...formData, pitchDeck:event.target.value})
              }
              name="pitchDeck"
              id="pitchDeck-st"
              className="txtForm"
            />
          </div>
          
         
          <div id="domain">
            <label htmlFor="domain">Domain</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={FormData.domain}
              onChange={
                (event)=>setFormData({...formData, domain:event.target.value})
              }
              name="domain"
              
              className="txtForm"
            />
          </div>
          <div>
            
            <label id="buildingNo-st-txt" htmlFor="location">Location</label>
            <div className="startup-row6">
            <div  id="buildingNo-st">
            <input
              type="text"
              autoComplete="off"
              value={FormData.buildingNo}
              onChange={
                (event)=>setFormData({...formData, buildingNo:event.target.value})
              }
              name="buildingNo"
             
              placeholder="BuildingNo"
              className="txtForm"
            />
            </div>
            <div id="street-st">
            <input
              type="text"
              autoComplete="off"
              value={FormData.street}
              onChange={
                (event)=>setFormData({...formData, street:event.target.value})
              }
              name="street"
              
              placeholder="street"
              className="txtForm"
            />
            </div>
            <div id="city-st">
            <input
              type="text"
              autoComplete="off"
              value={FormData.city}
              onChange={
                (event)=>setFormData({...formData, city:event.target.value})
              }
              name="city"
              
              placeholder="city"
              className="txtForm"
            />
            </div>
            </div>
            <div className="startup-row7">
            <div id="state-st">
            <input
              type="text"
              autoComplete="off"
              value={FormData.state}
              onChange={
                (event)=>setFormData({...formData, state:event.target.value})
              }
              name="state"
              
              placeholder="state"
              className="txtForm"
            />
            </div>
            <div id="pin-st">
            <input
              type="text"
              autoComplete="off"
              value={FormData.pin}
              onChange={
                (event)=>setFormData({...formData, pin:event.target.value})
              }
              name="pin"
              
              placeholder="pin"
              className="txtForm"
            />
            </div>
            <div id="country-st">
            <input
              type="text"
              autoComplete="off"
              value={FormData.country}
              onChange={(event)=>setFormData({...formData, country:event.target.value})}
              name="country"
              
              placeholder="country"
              className="txtForm"
            />
            </div>
            </div>
          </div>
          
          
        </form>
      </div>
    </>
  );
};









export default Register;
