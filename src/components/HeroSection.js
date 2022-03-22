import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/gthr-intro.mp4' autoPlay loop muted />
      <h1>GRAN TURISMO HRVATSKA</h1>
      <p>Welcome to our official page</p>
      <div className='hero-btns'>
        <a href="https://www.youtube.com/watch?v=nigltCT2Gmw" target="_blank" rel="noopener noreferrer">
          <button className='btn'>WATCH INTRO ON YOUTUBE<i className='far fa-play-circle'/></button>
        </a>

      </div>
    </div>
  );
}

export default HeroSection;
