import React from "react";
import alfredo from "./images/alfredo-jimenez.jpg";
import LinkedIn from "./images/LinkedIn_Logo.png";
import Github from "./images/github_logo.png";
import david from "./images/david.jpeg";
import Blake from './images/blake-edwards-img.jpg';
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';
import Destiny from './images/portfolio-picture.PNG';

export default function About() {
    return (
        <div className="about-container">
            <div className="artistanimation-container">
                <Lottie animationData={animationData} loop autoplay
                />
            </div>
            <h1 className="about-header">What is ColorCulture?</h1>
            <p className="about-body">Color Culture is a place where artists can buy/sell their art, connect with others by commenting on each other's art, and commission artists to do specific work per request of the user. It's a gallery
                for the everyday artists who is trying to make it big one brush at a time. We also hope ColorCulture can become a place where artists from all over the world can come together and share ideas, techniques, and masterpieces.
                The future social media for the next big artiste. </p>
            <div className="about-cards row row-cols-1 row-cols-md-1 g-0">
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
                    <div className="single-card row g-0">
                        <div className="col-md-4">
                            <img src={Blake} className="card-img img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="about-title">About Blake Edwards</h5>
                                <p className="about-text">Hello! My name is Blake Edwards and I'm new to the web development field. I'm a recent graduate of the UNCC Full-Stack Coding Bootcamp and I'm looking to begin my career as I continue to build my programming language knowledge. In the coding bootcamp, we learned how to use HTML, CSS, JavaScript, APIs, MySQL, Handlebars, Express, NodeJS, ReactJS, and MongoDB. I was born and raised in Charlotte, NC. My hobbies include watching/playing sports, working out, gaming/streaming on Twitch, and going to the beach. Please reach out to me via LinkedIn if you have any questions!</p>
                                <a href="https://www.linkedin.com/in/blake-edwards-ab6b51126/"><img src={LinkedIn} className="linked-in" alt="..."></img></a>
                                <a href="https://github.com/blakeedwards3"><img src={Github} className="github" alt="..."></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="single-card row g-0">
                        <div className="col-md-4">
                            <img src={Destiny} className="d-card-img img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="about-title">About Destiny Dardon</h5>
                                <p className="about-text">Hello! My name is Destiny Dardon. I was born in New Jersey, and I moved to North Carolina fifteen years ago.
                                    I am twenty-two years old, and I have been studying full stack web development for the past six months. Before attending the UNCC Full Stack Web Developer Bootcamp,
                                    I was a student at Appalachian State University, studying Criminal Justice, Psychology, as well as Communications. I have a passion for creating
                                    and I am an artist in my free time, so Color Culture is an application that I have always dreamed of having. I have been traveling internationally ever
                                    since I was fourteen years old, and I intend to travel for the rest of my life, alongside a career in web development. I came into the UNCC bootcamp with
                                    roughly three years of some software and game design experience, from attending a charter highschool my freshman to junior year. This bootcamp has expanded my knowledge
                                    in HTML, CSS, Javascript, React, Server-side APIs, MySQL, Handlebars, Express.js, Node.js, PWA applications, and MongoDB. This course gave
                                    a strong foundation to be a successful Full Stack Web Developer. I am extremely motivated, determined, and I work well under pressure, and this course strengthened
                                    those skills even further. I am excited to start my web development career, and eager to see how far I can push myself.
                                </p>
                                <a href="https://www.linkedin.com/in/destiny-dardon-4b395b238/"><img src={LinkedIn} className="linked-in" alt="..."></img></a>
                                <a href="https://github.com/destinymarie32601"><img src={Github} className="github" alt="..."></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="single-card row g-0">
                        <div className="col-md-4">
                            <img
                                src={david}
                                className="card-img img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="about-title">About David Rodriguez</h5>
                                <p className="about-text">
                                    I'm David Rodriguez, a web developer based in Charlotte, NC. I
                                    love web development because it lets me combine my creativity,
                                    problem-solving skills, and passion for technology to build
                                    unique and exciting applications. When I'm not glued to my
                                    computer, you'll likely find me at the gym or taking my dog
                                    for a walk. Currently learning Full Stack with UNCC bootcamp
                                    and excited to break into tech..
                                </p>
                                <a href="https://www.linkedin.com/in/david-rodriguez-b2538a247">
                                    <img src={LinkedIn} className="linked-in" alt="..."></img>
                                </a>
                                <a href="https://github.com/Daveerr">
                                    <img src={Github} className="github" alt="..."></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
