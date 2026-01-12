import React from 'react';
import './HeroSection.css';
import video from '../../../assets/HeroVideo.mp4';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;