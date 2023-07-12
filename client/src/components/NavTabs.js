import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import customHomeIcon from "./pages/images/logoicon.jpg";
import { Button, Navbar, Modal, ModalTitle } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useState } from "react";


const NavTabs = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
          <Link to={"/me"}>
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
              <Navbar>
        <Navbar.Toggle />
        <NavbarCollapse>
          <Button onClick={handleShow}>Cart</Button>
        </NavbarCollapse>
      </Navbar>
      <Modal show={show} onHide={handleClose} className="backdrop">
        <Modal.Header closeButton>
          <ModalTitle> Shopping Cart</ModalTitle>
          <Modal.Body>
            <h1>Cart items here</h1>
          </Modal.Body>
        </Modal.Header>
      </Modal>
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
