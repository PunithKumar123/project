import React, { useState } from 'react';
import axios from 'axios';
import "/home/nineleaps/project/project/src/css/investmentwindow.css"

const InvestmentForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSectorChange = (event) => {
    setSector(event.target.value);
  };

  const handleCreateInvestmentWindow = () => {
    const investmentWindow = {
      startDate,
      endDate,
      startTime,
      endTime,
      description,
      sector
    };

    axios.post('http://api-url.com/investment-window', investmentWindow)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='main-window'>
        {/* <img src='https://cdn.dribbble.com/users/2978235/screenshots/18246286/media/775e25386c6965f8306fa8edf6102764.jpg?compress=1&resize=400x300'/> */}
    <div className='investment-form'>
        <div className='date'>
            <div className='startdate'>
      <label htmlFor="start-date">Start Date:</label>
      <input type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div className='enddate'>
      <label htmlFor="enddate">End Date:</label>
      <input type="date" id="end-date" value={endDate} onChange={handleEndDateChange} />
      </div>
      </div>
      <div className='time'>
        <div className='starttime'>
      <label htmlFor="start-time">Start Time:</label>
      <input type="time" id="start-time" value={startTime} onChange={handleStartTimeChange} />
      </div>
      <div className='endtime'>
      <label htmlFor="end-time">End Time:</label>
      <input type="time" id="end-time" value={endTime} onChange={handleEndTimeChange} />
      </div>
      </div>
      
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={handleDescriptionChange} />

      <label htmlFor="sector">Sector:</label>
      <input type="text" id="sector" value={sector} onChange={handleSectorChange} />

      <button onClick={handleCreateInvestmentWindow}>Create Investment Window</button>
    </div>
   
    </div>
    
  );
};

export default InvestmentForm;
