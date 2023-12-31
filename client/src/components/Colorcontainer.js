import React, { useState } from "react";
import Home from "./pages/Home";
import NavTabs from "./NavTabs";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import About from "./pages/About";
import Footer from "./Footer";
import Search from "./pages/Search";
import Artists from "./pages/Artists";

// TODO : finish imports and container function

export default function ColorContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }

    //if (currentPage === "Profile") {
    // return <Profile />;
    //}

    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Login") {
      return <Login />;
    }

    if (currentPage === "Search") {
      return <Search />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Artists") {
      return <Artists/>;
    }

    // TODO : add more pages as needed
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
