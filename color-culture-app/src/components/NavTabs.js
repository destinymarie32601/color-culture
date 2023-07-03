import React from "react";
import customHomeIcon from "./pages/images/logoicon.jpg";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav-wrapper">
      <ul className="nav nav-tabs">
        <li className="nav-items">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            <img className="home-icon" src={customHomeIcon} alt="Home Icon" />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#signin"
            onClick={() => handlePageChange("Sign In")}
            className={
              currentPage === "Sign In" ? "nav-link active" : "nav-link"
            }
          >
            Sign In
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#artists"
            onClick={() => handlePageChange("Artists")}
            className={
              currentPage === "Artists" ? "nav-link active" : "nav-link"
            }
          >
            Artists
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Profile"
            onClick={() => handlePageChange("Profile")}
            className={
              currentPage === "Profile" ? "nav-link active" : "nav-link"
            }
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <div className="search-container">
            <input type="text" placeholder="Search for an artist..." />
            <button
              className="search-button"
              onClick={() => handlePageChange("Search")}
            >
              Search
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
