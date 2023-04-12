import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';



// const google = window.google;

function Sso(){


//     // console.log(google.accounts)
//     console.log('google:', google);
// console.log('google.accounts:', google.accounts);
// console.log('google.accounts.id:', google.accounts.id);

//     // const[user,setUser]=useState();
//     useEffect(()=>{ 
      
            
//         // global google
//         google.accounts.id.initialize({
//             client_id:"114622682127-rfdcda1lrpqhh5so5dc9bg4j4e1q7vgl.apps.googleusercontent.com",
//             callback:handleCallbackResponse
//         });

//         google.accounts.id.renderButton(
//             document.getElementById("signInDiv"),
//             {theme:"outline",size:"large"}
//         );
//     },[]);


//     function handleCallbackResponse(response){
//         console.log("JWT ID Token: " + response.credential);
//         var userObject=jwtDecode(response.credential);
//         console.log(userObject);
//         // setUser(userObject);
//     }

  
//     return(
        
//     <div id="signInDiv"></div>
        
//     );


return(
<div>
    <LoginSocialGoogle
    client_id={
        "114622682127-rfdcda1lrpqhh5so5dc9bg4j4e1q7vgl.apps.googleusercontent.com"
    }
    scope="openid profile email"
    discoveryDocs="claims_supported"
    access_type="offline"

    onResolve={({provider,data})=>{
        console.log(provider,data);
    }}
    onReject={(err)=>{
        console.log(err);
    }}
    >
        <GoogleLoginButton/>
    </LoginSocialGoogle>
</div>

)

}

export default Sso;
