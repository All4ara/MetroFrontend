import '../Carousel/Carousel.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../images/slide1.jpg'
import slide2 from '../../images/slide2.jpg'
import slide3 from '../../images/slide3.jpg'
import slider1 from '../../images/slider1.jpeg'
import slider2 from '../../images/slider2.jpeg'
import slider3 from '../../images/slider3.jpeg'

const HomeCarousel = () => {


    return (
        <Carousel>
            <Carousel.Item >
                <img
                className="d-block w-100 car-img"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>What's Your Home Really Worth?</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="d-block w-100 car-img"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Let us Guide You</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 car-img"
                src={slide3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Contact Us for an Appraisal</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeCarousel;