import '../Carousel/Carousel.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import brown from '../../images/brownstone.jpg'
import condo from '../../images/condo.jpeg'
import single from '../../images/single.jpeg'

const HomeCarousel = () => {


    return (
        <Carousel>
            <Carousel.Item className="car-img-wrap">
                <img
                className="d-block w-100 car-img"
                src={brown}
                alt="First slide"
                />
                <Carousel.Caption className="car-cap">
                <h2>What's Your Home Really Worth?</h2>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="d-block w-100 car-img"
                src={single}
                alt="Second slide"
                />
                <Carousel.Caption className="car-cap">
                <h2>Let us Guide You</h2>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 car-img"
                src={condo}
                alt="Third slide"
                />
                <Carousel.Caption className="car-cap">
                <h2>Contact Us for an Appraisal</h2>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeCarousel;