import React from 'react';
import customHomeIcon from './pages/images/logoicon.jpg';

function NavTabs({ currentPage, handlePage}) {
    return (
        <ul className= "nav nav-tabs">
            <li className = "nav-items">
                <a 
                href="#home"
                onClick = {() => handlePageChange ('Home')}

                className = {currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

                >
                        <img src={customHomeIcon} alt="Home Icon"/>

                </a>
            </li>
            <li className="nav-item">
                <a
                href="#about"
                onClick={() => handlePageChange('About')}

                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a 
                href="#contact"
                onClick={() => handlePageChange('Contact')}

                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a 
                href="#signin"
                onClick={() => handlePageChange('Sign In')}

                className={currentPage === 'Sign In' ? 'nav-link active' : 'nav-link'}
                >
                    Sign In
                </a>
            </li>
            <li className="nav-item">
                <a 
                href="#artists"
                onClick={() => handlePageChange('Artists')}

                className={currentPage === 'Artists' ? 'nav-link active' : 'nav-link'}
                >
                    Artists
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#search"
                onClick={() => handlePageChange('Search')}

                className={currentPage === 'Search' ? 'nav-link active' : 'nav-link'}
                >
                    Search
                </a>
            </li>

        </ul>
    );
}

export default NavTabs;