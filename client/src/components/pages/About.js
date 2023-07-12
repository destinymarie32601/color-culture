import React from "react";
import alfredo from './images/alfredo-jimenez.jpg';
import LinkedIn from './images/LinkedIn_Logo.png';
import Github from './images/github_logo.png';
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';

export default function About() {
    return (
        <div style={{width: '100vw', height:'100vh'}}>
           <div style={{position: 'absolute', top:0, left:0, width: '100%', height:'100%', zIndex:-1}}>
            <Lottie animationData={animationData} 
            loop 
            autoplay
            style={{ width:'100vw',height:'210vh'}}
             />
             </div>
            <div className="about-container">
                <h1 className="about-header">What is ColorCulture?</h1>
                <p className="about-body">Color Culture is a place where artists can buy/sell their art, connect with others by commenting on each other's art, and commission artists to do specific work per request of the user.</p>
                <div className="about-cards row row-cols-1 row-cols-md-2 g-4">
                    <div className="card mb-3">
                        <div className="single-card row g-0">
                            <div className="col-md-4">
                                <img src={alfredo} className="card-img img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="about-title">About Alfredo Jimenez</h5>
                                    <p className="about-text">Hello! My name is Alfredo Jimenez. I was born in Houston,Texas but moved to North Carolina when I was 13 years old.
                                        I would say my hobbies are taking care of my cat, car, trying new food and video games. I enlisted in the US Army Reserves
                                        in 2017 as a 12N(Horizontal Construction Engineer). I spent a year in Africa helping expending and maintaining the base. I
                                        have worked at Sams Xpress Car Wash as a crew member and now as a assistant manager where I am in charge of maintaining the
                                        wash. I took the UNCC Full-Stack Web Developer bootcamp in 2023 were we learned HTML, CSS, JavaScript, APIs, MySQL, Handlebars,
                                        and MERN. MERN is MongoDB, ExpressJS, ReactJS, and NodeJS. I am currently looking to begin my career in the Web Development
                                        Industry where I can learn new and exciting things.</p>
                                    <a href="https://www.linkedin.com/in/alfredo-jimenez-7271a7251/"><img src={LinkedIn} className="linked-in" alt="..."></img></a>
                                    <a href="https://github.com/AlfredoJi"><img src={Github} className="github" alt="..."></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={alfredo} className="card-img img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="about-title">About Alfredo Jimenez</h5>
                                    <p className="about-text">Hello! My name is Alfredo Jimenez. I was born in Houston,Texas but moved to North Carolina when I was 13 years old.
                                        I would say my hobbies are taking care of my cat, cars, trying new food and video games. I enlisted in the US Army Reserves
                                        in 2017 as a 12N(Horizontal Construction Engineer). I spent a year in Africa helping expending and maintaining the base. I
                                        have worked at Sams Xpress Car Wash as a crew member and now as a assistant manager where I am in charge of maintaining the
                                        wash. I took the UNCC Full-Stack Web Developer bootcamp in 2023 were we learned HTML, CSS, JavaScript, APIs, MySQL, Handlebars,
                                        and MERN. MERN is MongoDB, ExpressJS, ReactJS, and NodeJS. I am currently looking to begin my career in the Web Development
                                        Industry where I can learn new and exciting things.</p>
                                    <a href="https://www.linkedin.com/in/alfredo-jimenez-7271a7251/"><img src={LinkedIn} className="linked-in" alt="..."></img></a>
                                    <a href="https://github.com/AlfredoJi"><img src={Github} className="github" alt="..."></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={alfredo} className="card-img img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="about-title">About Alfredo Jimenez</h5>
                                    <p className="about-text">Hello! My name is Alfredo Jimenez. I was born in Houston,Texas but moved to North Carolina when I was 13 years old.
                                        I would say my hobbies are taking care of my cat, cars, trying new food and video games. I enlisted in the US Army Reserves
                                        in 2017 as a 12N(Horizontal Construction Engineer). I spent a year in Africa helping expending and maintaining the base. I
                                        have worked at Sams Xpress Car Wash as a crew member and now as a assistant manager where I am in charge of maintaining the
                                        wash. I took the UNCC Full-Stack Web Developer bootcamp in 2023 were we learned HTML, CSS, JavaScript, APIs, MySQL, Handlebars,
                                        and MERN. MERN is MongoDB, ExpressJS, ReactJS, and NodeJS. I am currently looking to begin my career in the Web Development
                                        Industry where I can learn new and exciting things.</p>
                                    <a href="https://www.linkedin.com/in/alfredo-jimenez-7271a7251/"><img src={LinkedIn} className="linked-in" alt="..."></img></a>
                                    <a href="https://github.com/AlfredoJi"><img src={Github} className="github" alt="..."></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={alfredo} className="card-img img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="about-title">About Alfredo Jimenez</h5>
                                    <p className="about-text">Hello! My name is Alfredo Jimenez. I was born in Houston,Texas but moved to North Carolina when I was 13 years old.
                                        I would say my hobbies are taking care of my cat, cars, trying new food and video games. I enlisted in the US Army Reserves
                                        in 2017 as a 12N(Horizontal Construction Engineer). I spent a year in Africa helping expending and maintaining the base. I
                                        have worked at Sams Xpress Car Wash as a crew member and now as a assistant manager where I am in charge of maintaining the
                                        wash. I took the UNCC Full-Stack Web Developer bootcamp in 2023 were we learned HTML, CSS, JavaScript, APIs, MySQL, Handlebars,
                                        and MERN. MERN is MongoDB, ExpressJS, ReactJS, and NodeJS. I am currently looking to begin my career in the Web Development
                                        Industry where I can learn new and exciting things.</p>
                                    <a href="https://www.linkedin.com/in/alfredo-jimenez-7271a7251/"><img src={LinkedIn} className="linked-in" alt="..."></img></a>
                                    <a href="https://github.com/AlfredoJi"><img src={Github} className="github" alt="..."></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}