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

      <div className="hero-overlay">
        <div className="hero-content" data-aos="fade" data-aos-duration="1000">
          <h1 className="hero-title" data-aos="fade-down" data-aos-duration="1500">
            <span className='ALetter'>A</span>.<span className="DLetter">D</span>.<span className="OLetter">O</span> CONSULT
          </h1>
          <p className="hero-paragraph" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
            Delivering world-class MEP engineering and consultancy solutions with precision and excellence.
          </p>
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <button className="hero-cta-primary">
              Our Portfolio
              <span className="cta-arrow">→</span>
            </button>
            <button className="hero-cta-secondary">
              Get a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
