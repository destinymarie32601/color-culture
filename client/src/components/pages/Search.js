import React from "react";
import artistone from "./images/artistnum1.jpg";
import artisttwo from "./images/artistnum2.jpg";
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <>
      <div className="animation-container">
        <Lottie animationData={animationData} loop autoplay/>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="description text-center">
            <h2>Search for your favorite artist</h2>
            <p>If you already have an artist in mind, search for them here using first or last name.</p>
          </div>
          <div className="search-container text-center">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search for an artist" />
              <button className="btn btn-primary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="art-photos">
            <div className="artphoto">
              <img src={artistone} alt="artist1" className="img-fluid" />
              <p>Many clients love to work with artist because he has a very timeless style and uses a lot of colors. He also does commissions for portraits and landscapes in the abstract art field</p>
            </div>
            <div className="artphoto">
              <img src={artisttwo} alt="artist2" className="img-fluid" />
              <p>Many clients love this artist because she has a very unique texture style and paints with a certain color palette in all her finished pieces. She does amazing commissions for gifts and think pieces</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}