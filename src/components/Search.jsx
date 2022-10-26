import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
       <img src = "/images/chatimg.jpeg" alt = "" />
        <div className="userChatInfo">
          <span>Suraj</span>
        </div> 
      </div>
    </div>
  );
}

export default Search;
