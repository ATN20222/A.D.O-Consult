import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { Link } from 'react-router-dom';
import './Projects.css';

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
      <div className="projects-page">
        <div className="projects-container">
          <div className="projects-loading-section">
            <div className="projects-loading-spinner">
              <div className="projects-spinner"></div>
            </div>
            <h3>Loading Projects...</h3>
            <p>Fetching our portfolio of engineering excellence</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page">
        <div className="projects-container">
          <div className="projects-error-section">
            <div className="projects-error-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Error Loading Projects</h3>
            <p>{error}</p>
            <button className="projects-retry-btn" onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero" data-aos="fade">
        <div className="projects-hero-overlay">
          <div className="projects-hero-content">
            <h1 className="projects-hero-title" data-aos="fade-up" data-aos-delay="200">
              Our <span className="projects-brand-highlight">Projects</span>
            </h1>
            <p className="projects-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              Explore our portfolio of successful engineering projects across various sectors and disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="projects-content">
        <div className="projects-container">
          {Object.entries(projectsData).map(([category, projects], categoryIndex) => (
            <div key={category} className="projects-category" data-aos="fade-up">
              {/* Category Header */}
              <div className="category-header" data-aos="fade-up" data-aos-delay="200">
                <h2 className="category-title">{category} Projects</h2>
                <div className="category-decoration"></div>
              </div>

              {/* Projects Grid */}
              <div className="projects-grid">
                {projects.map((item, index) => (
                  <div
                    key={item.project.id}
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    <ProjectCard
                      project={item}
                      category={category}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="projects-cta" data-aos="fade-up">
            <div className="projects-cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Contact us today to discuss your engineering needs and how we can bring your vision to life</p>
              <Link to="/contact" className="cta-button">
                Get In Touch
                <span className="projects-btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
