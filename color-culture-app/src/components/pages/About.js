import React from "react";
import alfredo from '../pages/images/alfredo-jimenez.jpg';

export default function About() {
    return (
        <div>
            <h1 className="about-header">What is ColorCulture?</h1>
            <p className="about-body">Color Culture is a place where artists can buy/sell their art, connect with others by commenting on each other's art, and commission artists to do specific work per request of the user.</p>
            <div className="about-cards row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={alfredo} className="card-img img-fluid rounded-start" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">About Alfredo Jimenez</h5>
                            <p className="card-text">Hello! My name is Alfredo Jimenez. I was born in Houston,Texas but moved to North Carolina when I was 13 years old.
                                I would say my hobbies are taking care of my cat, cars, trying new food and video games. I enlisted in the US Army Reserves
                                in 2017 as a 12N(Horizontal Construction Engineer). I spent a year in Africa helping expending and maintaining the base. I
                                have worked at Sams Xpress Car Wash as a crew member and now as a assistant manager where I am in charge of maintaining the
                                wash. I took the UNCC Full-Stack Web Developer bootcamp in 2023 were we learned HTML, CSS, JavaScript, APIs, MySQL, Handlebars,
                                and MERN. MERN is MongoDB, ExpressJS, ReactJS, and NodeJS. I am currently looking to begin my career in the Web Development
                                Industry where I can learn new and exciting things.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
