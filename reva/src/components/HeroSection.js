import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id="home" className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Esclate Tech Revolution <br>
      </br>
        Into Reality
      </h1>
      <p>
        <ul>
        <li>AI / ML , Data Annotation</li>
        <li>Website and Mobile app development</li>
        <li>Content Writing and Digital Marketing</li>
        <li>Corporate Training</li>
        </ul>
      </p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
           Explore 
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
