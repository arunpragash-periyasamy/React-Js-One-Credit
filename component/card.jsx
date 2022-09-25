import React from 'react';
import Coffee from '../asserts/coffee.jpg'
// import Burger from '../asserts/burger.jpg'
import './card.css'
const Card = () => {
    return(
        <>
            <div class="hotel-card-wrapper">
                <div class="hotel-card-image-wrapper">
                    <img src={Coffee} alt="hotel  with branding"/>
                </div>
                <div class="hotel-name">Tea Time</div>
                <div class="hotel-category">Have a break with a coffee Makes a productivity</div>
                <div class="hotel-location-wrapper">
                    <i class="fa-solid fa-location-dot hotel-location-icon"></i>
                    <div class="hotel-location-distance">2km</div>
                </div>
                <div class="hotel-review">1034 reviews</div>
            </div>
        </>
        )
}

export default Card;