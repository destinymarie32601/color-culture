import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import customHomeIcon from "./pages/images/logoicon.jpg";

const NavTabs = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <ul className="nav nav-tabs">
      <Link to="/">
        <li className="nav-items">
          <img className="home-icon" src={customHomeIcon} alt="Home Icon" />
        </li>
      </Link>
      <Link to="/about">
        <li className="nav-items">
          About
        </li>
      </Link>
      <Link to="/artists">
        <li className="nav-items">
          Artists
        </li>
      </Link>
      <Link to="/search">
        <li className="nav-items">
          Search
        </li>
      </Link>
      {Auth.loggedIn() ? (
        <>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
          <Link to={"users/userId"}>
            <li className="nav-items">
              Profile
            </li>
          </Link>
        </>
      ) : (
        <Link to="/login">
          <li className="nav-items">
            Login
          </li>
        </Link>
      )}
    </ul>
  );
};





/*function NavTabs({ currentPage, handlePageChange }) {
  return (
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
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange("Login")}
          className={currentPage === "Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#artists"
          onClick={() => handlePageChange("Artists")}
          className={currentPage === "Artists" ? "nav-link active" : "nav-link"}
        >
          Artists
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Profile"
          onClick={() => handlePageChange("Profile")}
          className={currentPage === "Profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#search"
          onClick={() => handlePageChange("Search")}
          className={currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
    </ul>
  );
}*/

export default NavTabs;
