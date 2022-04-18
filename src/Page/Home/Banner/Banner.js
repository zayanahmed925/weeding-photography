import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Image/banner1.jpg';
import banner2 from '../../../Image/banner2.jpg';
import banner3 from '../../../Image/banner3.jpeg';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='carousel-title'>Captured Moment </h3><br />
                    <p className='carousel-text'></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-title'>Captured Moment</h3><br />
                    <p className='carousel-text'></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-title'>Captured Moment</h3><br />
                    <p className='carousel-text'>

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;