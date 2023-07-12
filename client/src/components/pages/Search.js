import React from "react";
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <>
      <div className="animation-container bg-primary position-absolute w-100">
        <Lottie animationData={animationData} loop autoplay
        />
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
    </>
  );
}