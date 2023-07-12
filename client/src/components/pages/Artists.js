import React from "react";
import artistone from "./images/artistnum1.jpg";
import artisttwo from "./images/artistnum2.jpg";
import artistthree from "./images/artistnum3.jpg";
import artistfour from "./images/artistnum4.jpg";
import artistfive from "./images/artistnum5.jpg";
import artistsix from "./images/artistnum6.jpg";
import artistseven from "./images/artistnum7.jpg";
import artisteight from "./images/artistnum8.jpg";
import artistnine from "./images/artistnum9.jpg";
import artistten from "./images/artistnum10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Install Swiper modules

const profiles = [
    {
        profileImage: artistone,
        caption: 'Profile 1',
        link: 'profile1-link'
    },
    {
        profileImage: artisttwo,
        caption: 'Profile 2',
        link: 'profile2-link'
    },
    {
        profileImage: artistthree,
        caption: 'Profile 3',
        link: 'profile2-link'
    },
    {
        profileImage: artistfour,
        caption: 'Profile 4',
        link: 'profile2-link'
    },
    {
        profileImage: artistfive,
        caption: 'Profile 5',
        link: 'profile2-link'
    },
    {
        profileImage: artistsix,
        caption: 'Profile 6',
        link: 'profile2-link'
    },
    {
        profileImage: artistseven,
        caption: 'Profile 7',
        link: 'profile2-link'
    },
    {
        profileImage: artisteight,
        caption: 'Profile 8',
        link: 'profile2-link'
    },
    {
        profileImage: artistnine,
        caption: 'Profile 9',
        link: 'profile2-link'
    },
    {
        profileImage: artistten,
        caption: 'Profile 10',
        link: 'profile2-link'
    },
    // Add more profile data for each slide (up to 10)
];

export default function Artists() {
    return (
        <div className="container-artists">
            <Swiper
                modules={{ Swiper }}
                spaceBetween={20}
                slidesPerView={4}
                grabCursor={true}
                >
                {
                    profiles.map(({ profileImage, caption, link }, index) => {
                        return (
                            <SwiperSlide key={index} style={{height:'360px'}}>
                                <img src={profileImage} alt={caption} />
                                <h3>{caption}</h3>
                                <a href={link}>View This Artists Profile</a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}






