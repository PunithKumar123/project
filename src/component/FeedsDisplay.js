
import React, { useState } from 'react'
import '../css/FeedsDisplay.css'
import axios from 'axios';
const FeedsDisplay = () => {
  const[data,setData]=useState([]);
  React.useEffect(() => {
    axios.get('http://192.168.1.128:8080/api.venturecapitalist.com/getFeed')
      .then(response => response.data)
      .then(data=>setData(data));

        
      
  }, []);
  return (
    <div className='Feeds-Main'>
      {data.map(item=>(
        <div key={item.feedId}>
        {/* <div className='Feeds-Photo'><img src={data.photo} alt='user'></img></div> */}
        <div className='Feeds-Name'>{item.title}</div>
        <div className='Feeds-Time'>{data.date}</div>
        <div className='Feeds-Cont'>{item.content}</div>
        </div>
      ))}
    </div>
  );
}
export default FeedsDisplay;









