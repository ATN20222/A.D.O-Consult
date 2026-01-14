import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { ImagesBaseUrl } from '../../App';

const ProjectCard = ({ project, category }) => {
  const { project: projectData } = project;
  const firstSection = project.sections?.[0];

  // Get category color using CSS custom properties
  const getCategoryColor = (category) => {
    const colors = {
      'Infrastructure': 'var(--primary)',
      'Commercial': 'var(--secondary)',
      'Residential': '#059669',
      'Medical': '#dc2626',
      'Hotels': '#7c3aed',
      'Educational': '#0891b2',
      'Industrial': '#ea580c'
    };
    return colors[category] || 'var(--primary)';
  };

  return (
    <div className="project-card">
      {/* Image Section */}
      <div className="project-card-image">
        <img
          src={ImagesBaseUrl+firstSection?.image || 'https://via.placeholder.com/400x250/1e293b/f8fafc?text=No+Image'}
          alt={projectData.title}
          className="project-image"
        />
        <div className="project-card-overlay">
          <div className="overlay-content">
            <span className="category-tag" style={{ backgroundColor: getCategoryColor(category) }}>
              {category}
            </span>
            <Link to={`/project/${projectData.id}`} className="view-project-btn">
              <i className="fas fa-eye"></i>
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="project-card-content">
        <h3 className="project-card-title">
          <Link to={`/project/${projectData.id}`}>
            {projectData.title}
          </Link>
        </h3>

        <p className="project-card-description">
          {projectData?.description?.length > 100
            ? `${projectData?.description.substring(0, 100)}...`
            : projectData?.description
          }
        </p>

        {/* Project Meta */}
        <div className="project-card-meta">
          {projectData?.table && projectData?.table?.right.length >= 3 && (
            <div className="meta-item">
              <i className="fas fa-calendar-alt"></i>
              <span>{projectData?.table.right[2]}</span>
            </div>
          )}

          {firstSection?.country && (
            <div className="meta-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{firstSection?.country}</span>
            </div>
          )}
        </div>

        {/* Status Badge */}
        <div className="project-card-status">
          <span className="status-badge completed">
            <i className="fas fa-check-circle"></i>
            Completed
          </span>
        </div>

        {/* Action Button */}
        <Link to={`/project/${projectData.id}`} className="project-card-action">
          Learn More
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      {/* Category Accent Line */}
      <div
        className="project-card-accent"
        style={{ backgroundColor: getCategoryColor(category) }}
      ></div>
    </div>
  );
};

export default ProjectCard;