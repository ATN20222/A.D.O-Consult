import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';
import { ImagesBaseUrl } from '../../App';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjectDetails = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to load project data');
        }
        const data = await response.json();

        // Find the project by ID across all categories
        let foundProject = null;

        for (const [category, projects] of Object.entries(data)) {
          const projectItem = projects.find(p => p.project.id.toString() === projectId);
          if (projectItem) {
            foundProject = {
              ...projectItem.project,
              category: category,
              sections: projectItem.sections,
              status: 'Completed' // Default status
            };
            break;
          }
        }

        if (!foundProject) {
          throw new Error('Project not found');
        }

        setProject(foundProject);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjectDetails();
  }, [projectId]);

  if (loading) {
    return (
      <div className="project-details-page">
        <div className="project-details-container">
          <div className="project-details-loading">
            <div className="project-details-spinner"></div>
            <h3>Loading Project Details...</h3>
            <p>Fetching project information</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="project-details-page">
        <div className="project-details-container">
          <div className="project-details-error">
            <div className="project-details-error-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Error Loading Project</h3>
            <p>{error}</p>
            <button className="project-details-back-btn" onClick={() => navigate('/projects')}>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="project-details-container">
          <div className="project-details-not-found">
            <div className="project-details-not-found-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Project Not Found</h3>
            <p>The requested project could not be found.</p>
            <button className="project-details-back-btn" onClick={() => navigate('/projects')}>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }


  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'planned':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  return (
    <div className="project-details-page">
      {/* Hero Section */}
      <section className="project-details-hero" data-aos="fade">
        <div className="project-details-hero-overlay">
          <div className="project-details-hero-content">
            <h1 className="project-details-hero-title" data-aos="fade-up" data-aos-delay="200">
              {project.title}
            </h1>
            <p className="project-details-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              {project.category} Project
            </p>
            <div className="project-details-status" data-aos="fade-up" data-aos-delay="600">
              <span className={`project-details-status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-details-content">
        <div className="project-details-container">
          {/* Back Button */}
          <div className="project-details-back" data-aos="fade-down">
            <button className="project-details-back-btn" onClick={() => navigate('/projects')}>
              <i className="fas fa-arrow-left"></i>
              Back to Projects
            </button>
          </div>

          {/* Project Description */}
          <div className="project-details-description" data-aos="fade-up">
            <p>{project.description}</p>
          </div>

          {/* Project Details */}
          {project.table && (
            <div className="project-details-info-section" data-aos="fade-up">
              <div className="project-details-info-list">
                {project.table.right.map((value, index) => (
                  <div key={index} className="project-details-info-bullet">
                    <span className="bullet-point">•</span>
                    <span className="bullet-text">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Sections */}
          {project.sections && project.sections.length > 0 && (
            <div className="project-details-sections" data-aos="fade-up">
              <div className="project-details-sections-grid">
                {project.sections.map((section, index) => (
                  <div
                    key={index}
                    className="project-details-section-card"
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                  >
                    <div className={`${(section?.title || section?.description)?"project-details-section-image":"project-details-section-image-full"}`}>
                     
                       <img
                       src={ImagesBaseUrl + section.image}
                       alt={section.title}
                       className="project-details-section-img"
                     />
                    
                     
                      {section.country && (
                        <div className="project-details-section-country">
                          <i className="fas fa-map-marker-alt"></i>
                          {section.country}
                        </div>
                      )}
                    </div>
                    {(section?.title || section?.description) &&
                      <div className="project-details-section-content">
                        <h3 className="project-details-section-title">{section.title}</h3>
                        <p className="project-details-section-description">{section.description}</p>
                      </div>
                    }

                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;