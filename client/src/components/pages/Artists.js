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
import Lottie from 'lottie-react';
import animationData from './images/animation_ljyvxowa.json';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from "../../utils/queries";

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
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    return (
        <div className="container-artists">
            <div className="artistanimation-container">
                <Lottie animationData={animationData} loop autoplay
                />
            </div>
            <Swiper
                modules={{ Swiper }}
                spaceBetween={20}
                slidesPerView={4}
                grabCursor={true}
            >
                {users &&
                    users.map((user => {
                        return (
                            <SwiperSlide key={user._id} style={{ height: '360px' }}>
                                <h3>{user.username}</h3>
                                <a href={`/users/${user._id}`}>View This Artists Profile</a>
                            </SwiperSlide>
                        )
                    })
                    )}
            </Swiper>
        </div>
    );
}
