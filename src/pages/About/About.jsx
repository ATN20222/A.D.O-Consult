import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';

const About = () => {
  const skills = [
    { name: 'Civil Engineering', level: 95 },
    { name: 'Structural Analysis', level: 90 },
    { name: 'AutoCAD & BIM', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Quality Assurance', level: 75 }
  ];

  return (
    <Container className="py-5 page-margin">
      <Row className="mb-5">
        <Col lg={8}>
          <h1 className="display-4 fw-bold text-primary mb-4">About EngSolutions</h1>
          <p className="lead mb-4">
            We are a leading engineering firm specializing in innovative infrastructure
            and industrial solutions. Our mission is to deliver excellence through
            precision engineering and sustainable development.
          </p>
          <p className="mb-4">
            With decades of combined experience in civil, mechanical, and electrical
            engineering, we combine technical expertise with innovative thinking to
            deliver projects that exceed industry standards and client expectations.
          </p>
          <Button variant="primary" size="lg">
            <i className="fas fa-envelope me-2"></i>Contact Us
          </Button>
        </Col>
        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <i className="fas fa-users fa-4x text-primary mb-3"></i>
              <h3>50+ Projects</h3>
              <p className="text-muted">Successfully Delivered</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="h1 text-center mb-5">Our Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <ProgressBar now={skill.level} variant="primary" />
            </div>
          ))}
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <i className="fas fa-bullseye fa-2x text-primary mb-3"></i>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To deliver sustainable engineering solutions that enhance
                infrastructure, promote safety, and contribute to community development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <i className="fas fa-eye fa-2x text-success mb-3"></i>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the premier engineering firm recognized for innovative design,
                exceptional quality, and unwavering commitment to excellence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;