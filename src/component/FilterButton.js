import React, { useState } from 'react';
import axios from 'axios';
  
  const FilterButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});
  
    const handleDropdown = (event) => {
      const { name, value } = event.target;
      setSelectedFilters((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleFilterApply = () => {
      console.log('Selected Filters:', selectedFilters);
      const { currentValuation, fundingType, target, pitchDeck, coFounder } = selectedFilters;
  
      const [minValuation, maxValuation] = currentValuation.split('-');
      axios.get(`/api/currentValuation?min=${minValuation}&max=${maxValuation}`)
        .then((response) => {
          console.log('API response for currentValuation:', response.data);
        })
        .catch((error) => {
          console.log('API error:', error);
        });
  
      axios.get(`/api/fundingType?type=${fundingType}`)
        .then((response) => {
          console.log('API response for fundingType:', response.data);
        })
        .catch((error) => {
          console.log('API error:', error);
        });
  
      
      const [minTarget, maxTarget] = target.split('-');
      axios.get(`/api/target?min=${minTarget}&max=${maxTarget}`)
        .then((response) => {
          console.log('API response for target:', response.data);
        })
        .catch((error) => {
          console.log('API error:', error);
        });
  
   
      axios.get(`/api/pitchDeck?value=${pitchDeck}`)
        .then((response) => {
          console.log('API response for pitchDeck:', response.data);
        })
        .catch((error) => {
          console.log('API error:', error);
        });
  
     
      axios.get(`/api/coFounder?value=${coFounder}`)
        .then((response) => {
          console.log('API response for coFounder:', response.data);
        })
        .catch((error) => {
          console.log('API error:', error);
        });
    };
  
    return (
      <div className="filter-button">
        <button onClick={() => setIsOpen(!isOpen)}>Filter</button>
        {isOpen && (
          <div className="dropdown">
            <div>
              <span>Current valuation: </span>
              <select name="currentValuation" onChange={handleDropdown}>
                <option value="0-1000000">0 - Ten Lakh</option>
                <option value="1000001-50000000">Ten Lakh - Five crore</option>
                <option value="50000001-100000000">Five crore - Ten crore</option>
              </select>
            </div>
            <div >
              <span>Funding Type: </span>
              <select name="fundingType" onChange={handleDropdown} >
                <option value="Type A">Type A</option>
                <option value="Type B">Type B</option>
                <option value="Type C">Type C</option>
                <option value="Type D">Type D</option>
              </select>
            </div>
          <div>
            <span>Target: </span>
            <select name="target" onChange={handleDropdown}>
              <option value="0-100000">0 - 100000</option>
              <option value="100001-500000">100001 - 500000</option>
              <option value="500001-1000000">500001 - 1000000</option>
            </select>
          </div>
          <div>
            <span>Pitch Deck: </span>
            <select name="pitchDeck" onChange={handleDropdown}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <span>Co-founder: </span>
            <select name="coFounder" onChange={handleDropdown}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button onClick={handleFilterApply}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
