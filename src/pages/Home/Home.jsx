import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection/AboutSection';
import ServicesSection from './ServicesSection/ServicesSection';
import ClientsSection from './ClientsSection/ClientsSection';
import ContactSection from './ContactSection/ContactSection';
import './Home.css';

const Home = () => {
  return (
    <div >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />

    </div>
  );
};

export default Home;