import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button, Carousel, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

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
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading project details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5 text-center">
        <div className="alert alert-danger">
          <h4>Error Loading Project</h4>
          <p>{error}</p>
          <Button onClick={() => navigate('/projects')} variant="primary">
            Back to Projects
          </Button>
        </div>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container className="py-5 text-center">
        <div className="alert alert-warning">
          <h4>Project Not Found</h4>
          <p>The requested project could not be found.</p>
          <Button onClick={() => navigate('/projects')} variant="primary">
            Back to Projects
          </Button>
        </div>
      </Container>
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
    <Container className="py-5  page-margin">
      <Row className="mb-4">
        <Col>
          <Button
            variant="outline-primary"
            onClick={() => navigate(-1)}
            className="mb-3"
          >
            <i className="fas fa-arrow-left me-2"></i>Back
          </Button>
        </Col>
      </Row>

      {/* Project Title and Description */}
      <Row className="mb-5">
        <Col>
          <div className="project-header">
            <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
              <div>
                <h1 className="project-title-main">{project.title}</h1>
                <Badge bg={getStatusVariant(project.status)} className="project-status-badge">
                  {project.status}
                </Badge>
              </div>
            </div>
            <p className="project-description-text">{project.description}</p>
          </div>
        </Col>
      </Row>

      {/* Project Table */}
      {project.table && (
        <Row className="mb-5">
          <Col>
            <Card className="project-details-table-card">
              <Card.Body>
                <h2 className="table-title">Project Details</h2>
                <div className="modern-table-container">
                  <Table className="modern-table">
                    <tbody>
                      {project.table.left.map((label, index) => (
                        <tr key={index}>
                          <td className="table-label">{label}</td>
                          <td className="table-value">{project.table.right[index]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Project Sections - Two Column Layout */}
      {project.sections && project.sections.length > 0 && (
        <Row className="mb-5">
          <Col>
            <h2 className="sections-title">Project Highlights</h2>
            {project.sections.map((section, index) => (
              <Card key={index} className="section-two-column-card">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={6} className="mb-3 mb-md-0">
                      <div className="section-image-container">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="section-image"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="section-content">
                        <h3 className="section-card-title">{section.title}</h3>
                        <p className="section-card-description">{section.description}</p>
                        {section.country && (
                          <Badge className="section-country-badge">
                            <i className="fas fa-map-marker-alt me-1"></i>
                            {section.country}
                          </Badge>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProjectDetails;