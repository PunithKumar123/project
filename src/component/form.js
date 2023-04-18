import React, { useState } from 'react';
import { baseUrl, registrationEnt } from '../Api';
import Entreprenur from "../component/personalinfo"
import Register from '../Registration/Register';
import AddRemoveInputField from './AddRemoveInputField';
import "/home/nineleaps/project/project/src/css/personalinfo.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Form() {
    const navigate=useNavigate();
const [page,setPage]=useState(0);
const [formData,setFormData]=useState({
    profileImage: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    startUpName: "",
    linkedin: "",
    Websiteurl: "",
    startupSummary: "",
    bio: "",
    pitchDeck: "",
    seriesOfFunding: "",
    currentValuation: "",
    domain: "",
    street: "",
    city: "",
    state: "",
    country: "",
    buildingNo: "",
    pin: "",
    
    
});
const FormTitles=["personal Info",'StartUp Details',"Cofounders Details"]
const PageDisplay=()=>{
    if(page===0){
        return <Entreprenur formData={formData} setFormData={setFormData}/>;
    }
    else{
        return <Register formData={formData} setFormData={setFormData}/>;
    }
    // else{
    //     return <AddRemoveInputField formData={formData} setFormData={setFormData}/>;
    // }
}
  return (
    <div className='form'>
       <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div> 
        </div> 
        <div className='form-container'>
        <div className='header'>
        <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
    <div className='footer'>
<button className="next"

onClick={()=>{
    const token=localStorage.getItem("token");
    if (page===FormTitles.length-1){
        alert("form Submitted");
        console.log(formData)
        
         const registrationKeyEntrepreneur=localStorage.getItem("registrationKey")
        axios.post(baseUrl.baseUrl+registrationEnt.registrationEnt,{
            registrationKeyEntrepreneur,
            // profileImage:formData.profileImage,
            name:formData.name,
            startUpName: formData.startUpName,
            
            })
        .then((response)=>{
       console.log(response);
       navigate("/HomePage",{state:{token}});
        });
    }else{
    setPage((currPage)=>currPage+1);
    }
}}>{page === FormTitles.length-1 ? "submit" :"Next"}</button>
<br></br><button className="next"
disabled={page==0}
onClick={()=>{setPage((currPage)=>currPage-1);
}}

>Prev</button>

    </div>
    </div>
    </div>
  )
}

export default Form