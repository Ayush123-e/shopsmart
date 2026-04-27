import React from 'react';
import './Hero.css';
import hero_img from '../assets/hero_img.png';

const Hero = () => {
    return (
        <div className='hero-section container'>
            <div className='hero-content reveal'>
                <div className='hero-label'>
                    <span className='gold-line'></span>
                    <p>NEW COLLECTION 2026</p>
                </div>
                <h1 className='title-large'>Redefining <br /> Modern Elegance</h1>
                <p className='hero-desc'>Discover curated pieces that blend timeless design with contemporary style. Elevate your wardrobe with our latest arrivals.</p>
                <div className='hero-actions'>
                    <button className='btn'>Explore Now</button>
                    <button className='btn btn-secondary'>View Lookbook</button>
                </div>
            </div>
            <div className='hero-visual reveal'>
                <div className='hero-image-wrapper'>
                    <img className='hero-main-img' src={hero_img} alt="Featured Look" />
                    <div className='hero-decorative-box'></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
