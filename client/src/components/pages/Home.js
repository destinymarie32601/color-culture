import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import cityArt from '../../assets/images/city-life.jpg';
import treeArt from '../../assets/images/tree.jpg';
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';

export default function Home() {
    return (
        <div className= "home-container" style={{ display: 'block', width: 900, padding: 60 }}>
            <div className="homeanimation-container">
                <Lottie animationData={animationData} 
                loop 
                autoplay
                />
            </div>
            <h4>React-Bootstrap Carousel Component</h4>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={cityArt}
                        alt="One"
                    />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={treeArt}
                        alt="Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}