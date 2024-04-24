import React, { useState, useEffect } from 'react';
import './Slides.css';

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "https://www.iitbracing.org/redbull.png",
        "https://www.iitbracing.org/car.svg",
        "https://www.iitbracing.org/assets/image-2-C8poHMFX.png",
        "https://www.iitbracing.org/assets/image-3-DL8wGSR2.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slideshow-container'>
            <h1 className='heading'>IIT Bombay Racing</h1>
            <p className='paragraph'>[Driving Innovation, Powering Sustainability: IITB Racing]</p>
            <div className="slideshow">
                {slides.map((slide, index) => (
                    <div key={index} className={`slides ${index === currentSlide ? 'active' : ''}`}>
                        <img src={slide} className="slide-img" alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slides;

