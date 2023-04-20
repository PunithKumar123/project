import React, { useState } from "react";
import "/home/nineleaps/project/project/src/css/StartupCard.css";
import "../css/SearchButton.css";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // http://192.168.1.128:8080/api/v1/search/startups?=
  const handleSearch = () => {
    fetch(`http://192.168.1.128:8080/api/v1/search/startups?=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => {
          const itemStartUpName = item.startUpName.toLowerCase();
          const itemSummary = item.summary.toLowerCase();
          const searchQueryLower = searchQuery.toLowerCase();
          return (
            itemStartUpName.includes(searchQueryLower) ||
            itemSummary.includes(searchQueryLower)
          );
        });
        setSearchResults(filteredData);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="Searchbutton-1">
        <input
          className="Searchbutton"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Type to Search..."
        />
        <button className="Searchh" onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <div>{error}</div>}
      <div className="main-container">
        {searchResults.map((item) => (
          <div className="card-container" key={item.startUpId}>
            <div className="card-photo">
              <img
                src="https://scontent.fblr2-2.fna.fbcdn.net/v/t39.30808-6/326718397_524698639759373_9212873424182205737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxCWiAvE9-AAX8licR5&_nc_ht=scontent.fblr2-2.fna&oh=00_AfACoTSJjXtFede1XzthKz196OGNt37NRWz6IJ6qnNNzsg&oe=644518DC"
                alt="user"
              />
            </div>
            <div className="cunt">
              <div className="card-name">
                <h6>
                  <b>{item.startUpName}</b>
                </h6>
              </div>
              <div className="card-location">
                {/* <h6>{item.price}</h6> */}
              </div>
            </div>
            <div className="card-bio">{item.summary}</div>
            <div className="card-btn-cont">
              <button className="card-button">
                <b>Know More</b>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
