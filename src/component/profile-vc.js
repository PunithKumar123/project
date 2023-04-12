import React, { useState, useEffect } from 'react';

function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
     
      <img src={user.photo} alt={user.name} />
      <h1>{user.name}</h1>

     
      <p>{user.bio}</p>
      <p>{user.expertise}</p>
    </div>
  );
}

export default ProfilePage;
