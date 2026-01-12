import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Container className="py-5  page-margin">
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold text-primary mb-4">Contact EngSolutions</h1>
          <p className="lead text-muted">
            Ready to start your next engineering project? Let's discuss how we can help bring your vision to life.
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h2 className="h3 mb-4">Send us a message</h2>

              {showSuccess && (
                <Alert variant="success" className="mb-4">
                  <i className="fas fa-check-circle me-2"></i>
                  Thank you! Your message has been sent successfully.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your project or question..."
                  />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" className="w-100">
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3 className="h5 mb-3">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                Our Location
              </h3>
              <p className="text-muted mb-0">
                123 Tech Street<br />
                Innovation City, IC 12345<br />
                United States
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3 className="h5 mb-3">
                <i className="fas fa-phone text-success me-2"></i>
                Phone
              </h3>
              <p className="text-muted mb-0">
                +1 (555) 123-4567
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h3 className="h5 mb-3">
                <i className="fas fa-envelope text-info me-2"></i>
                Email
              </h3>
              <p className="text-muted mb-0">
                hello@company.com
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="h5 mb-3">
                <i className="fas fa-clock text-warning me-2"></i>
                Business Hours
              </h3>
              <p className="text-muted mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted mb-0">Saturday: 10:00 AM - 4:00 PM</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;