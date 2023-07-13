import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import cityArt from '../../assets/images/city-life.jpg';
import treeArt from '../../assets/images/tree.jpg';
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';
import couple from '../../assets/images/art.jpg';
import jazz from '../../assets/images/art3.JPG';
import cats from '../../assets/images/cat.jpg';
import hand from '../../assets/images/hand.jpg';
import stag from '../../assets/images/stag.jpg';
import winter from '../../assets/images/winter_land.jpg';

export default function Home() {

    const homeArts = [
        {
            artwork: cats,
            artist: 'Hen',
            title: 'Cat with Kittens'
        },
        {
            artwork: hand,
            artist: 'Isaac_We',
            title: 'Hand'
        },
        {
            artwork: stag,
            artist: 'GeorgeLey',
            title: 'Stag'
        },
        {
            artwork: winter,
            artist: 'Ludwig K',
            title: 'Winter Landscape in Moonlight'
        },
    ];

    return (
        <div className= "home-container">
            <div className="homeanimation-container">
                <Lottie animationData={animationData} 
                loop 
                autoplay
                />
            </div>
            <div style={{ display: 'block', width: 1400, padding: 60 }}>
                <h4>Artworks of the day!</h4>
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <img
                            className="h-img d-block w-100"
                            src={cityArt}
                            alt="One"
                        />
                        <Carousel.Caption>
                            <h3>The Front</h3>
                            <p>By: Ang_Rook</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="h-img d-block w-100"
                            src={treeArt}
                            alt="Two"
                        />
                        <Carousel.Caption>
                            <h3>Morning</h3>
                            <p>By: IvanS</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="h-img d-block w-100"
                            src={couple}
                            alt="Three"
                        />
                        <Carousel.Caption>
                            <h3>Le Cirque</h3>
                            <p>By: Georges</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="h-img d-block w-100"
                            src={jazz}
                            alt="Four"
                        />
                        <Carousel.Caption>
                            <h3>The Repast</h3>
                            <p>By: Henri</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    homeArts.map(({ artwork, artist, title }, index) => {
                        return (
                            <div className="col">
                                <div class="card text-bg-dark" key={index}>
                                    <img src={artwork} class="small-h-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text">By: {artist}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
