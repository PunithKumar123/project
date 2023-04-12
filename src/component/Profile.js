import React from 'react'
import Navbar from '/home/nineleaps/project/src/component/Navbar.js'
import Footer from '/home/nineleaps/project/src/component/Footer.js'
import '/home/nineleaps/project/src/css/Profile.css'


const Profile = () => {
    return (
        <>
            <Navbar />
            <div className='Profile-banner'>
                <div className='container-top'></div>
                
                <div className='profile-photo'>
                    <img className='photo' src="https://ain-resources.s3.eu-west-2.amazonaws.com/assets/users/306105/profile_image_1679571404.png"></img>
                </div>

                <div className='profile-name'>Name</div>
                <div className='Location'>Location</div>

                </div>
            <div className='Nav-profile'>
            <div className='nav-list'>
            <li>OverView</li>
            <li>Pitch Details</li>
            <li>Team</li>
            <li>More Info</li>
            
             <button className='Nudge-btn'>Nudge</button>
                </div>
                </div>
            
            <div className='body-profile'>
                
                    <div className='body-left'>Left
                    1
                    
                    2
                    <br/>
                    3
                    4
                    <br/>
                    5
                    <br/>
                    6
                    <br/>
                    7
                    <br/>
                    8
                    <br/>
                    9
                    <br/>
                    0
                    <br/>
                    
                    3
                    <br/>
                    423
                    <br/>
                    432
                    <br/>
                    
                    234
                    <br/>
                    24
                    <br/>
                    23
                    <br/>
                    4
                    <br/>
                    234
                    23
                    4
                    2</div>
                    <div className='body-right'>right</div>
               
            </div>
            <Footer className='footer' />
            
        </>

    )
}

export default Profile