import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projectsData, setProjectsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to load projects data');
        }
        const data = await response.json();
        setProjectsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading projects...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5 text-center">
        <div className="alert alert-danger">
          <h4>Error Loading Projects</h4>
          <p>{error}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5 page-margin">
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold text-primary mb-4">Our Projects</h1>
          <p className="lead text-muted">
            Explore our portfolio of successful engineering projects across various sectors
          </p>
        </Col>
      </Row>

      {Object.entries(projectsData).map(([category, projects]) => (
        <div key={category} className="mb-5">
          {/* Category Title */}
          <Row className="mb-5">
            <Col>
              <div className="category-header">
                <h2 className="category-title">{category} Projects</h2>
                <div className="category-decoration"></div>
              </div>
            </Col>
          </Row>

          {/* Projects Grid */}
          <Row className="g-4">
            {projects.map((item, index) => (
              <Col lg={4} md={6} key={item.project.id}>
                <ProjectCard
                  project={item}
                  category={category}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}

      {/* Call to Action */}
      <Row className="mt-5">
        <Col className="text-center">
          <div className="cta-section text-center">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              Contact us today to discuss your engineering needs and how we can bring your vision to life.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="cta-button">
              <i className="fas fa-envelope me-2"></i>
              Get In Touch
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
