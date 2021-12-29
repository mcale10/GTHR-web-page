import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/gthr-intro.mp4' autoPlay loop muted />
      <h1>GRAN TURISMO HRVATSKA</h1>
      <p>Welcome to our official page</p>
      <div className='hero-btns'>
        {/*<Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>*/}
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick=''
        >
        
          WATCH INTRO <i className='far fa-play-circle' />
        </Button> 
      </div>
    </div>
  );
}

export default HeroSection;
