import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from './HeroSection/HeroSection';
import './Home.css';

const Home = () => {
  return (
    <div >
      <HeroSection />

      <Container className="services-section">
        <Row className="services-grid">
          <Col md={4} className="service-card-wrapper">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <h3 className="service-title">Design & Engineering</h3>
              <p className="service-description">
                Comprehensive engineering design and planning services
              </p>
            </div>
          </Col>

          <Col md={4} className="service-card-wrapper">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="service-title">Manufacturing</h3>
              <p className="service-description">
                Precision manufacturing and industrial solutions
              </p>
            </div>
          </Col>

          <Col md={4} className="service-card-wrapper">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-hard-hat"></i>
              </div>
              <h3 className="service-title">Construction</h3>
              <p className="service-description">
                Professional construction and project management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;