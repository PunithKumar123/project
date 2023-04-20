import React, { useState } from 'react'
import "../css/StartupCard.css"
import axios from 'axios';
const StartupCard = () => {
  const [data, setData] = useState({});
  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
        // console.log(data)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className='main-container'>
      {data.products && data.products.map((item) => (
        <div className='card-container' key={item.id}>
          <div className='card-photo'>
            <img src="https://scontent.fblr2-2.fna.fbcdn.net/v/t39.30808-6/326718397_524698639759373_9212873424182205737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxCWiAvE9-AAX8licR5&_nc_ht=scontent.fblr2-2.fna&oh=00_AfACoTSJjXtFede1XzthKz196OGNt37NRWz6IJ6qnNNzsg&oe=644518DC" alt='user' />
          </div>
          <div className='cunt'>
            <div className='card-name'>
              <h7><b>{item.title}</b></h7>
            </div>
            <div className='card-location'>
              <h9>{item.brand}</h9>
            </div>
          </div>
          <div className='card-bio'>{item.description}</div>
          <div className='card-btn-cont'>
            <button className='card-button'><b>Know More</b></button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default StartupCard