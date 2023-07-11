import React from "react";
import artistone from "./images/artistnum1.jpg";
import artisttwo from "./images/artistnum2.jpg";

export default function Search() {
    return (
        <div className="container">
        <div className="description">
          <h2>Search for your favorite artist</h2>
          <p>If you already have an artist in mind, search for them here using first or last name.</p>
        </div>
        <div className="search-container">
          <div className="search-bar">
            <input type="text" placeholder="Search for an artist" />
            <button type="button">Search</button>
          </div>
        </div>
        <div className ="art-photos">
            <div className = "artphoto">
                <img src = {artistone} alt = "artist1"  style={{ width: "300px", height: "auto" }}>
                </img>
                <p>Many clients love to work with artist because he has a very timeless style and uses a lot of colors. He also does commissions for portraits and landscapes in the abstract art field</p>
            </div>
            <div className = "artphoto">
                <img src = {artisttwo} alt = "artist2" style={{ width: "300px", height: "auto" }}>
                </img>
                <p>Many clients love this artist because she has a very unique texture style and paints with a certain color palette in all her finished pieces. She does amazing commissions for gifts and think pieces</p>
            </div>

        </div>
      </div>
    );
  }