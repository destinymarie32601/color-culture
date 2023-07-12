import React from "react";
import alfredo from "./images/alfredo-jimenez.jpg";
import LinkedIn from "./images/LinkedIn_Logo.png";
import Github from "./images/github_logo.png";
import david from "./images/david.jpeg";
import Blake from './images/blake-edwards-img.jpg';

export default function About() {
    return (
        <div className="about-container">
                <h1 className="about-header">What is ColorCulture?</h1>
                <p className="about-body">Color Culture is a place where artists can buy/sell their art, connect with others by commenting on each other's art, and commission artists to do specific work per request of the user.</p>
            <div className="about-cards row row-cols-1 row-cols-md-1 g-1">
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
        <div className="card mb-3">
          <div className="row g-0">
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
  );
}
