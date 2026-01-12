import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const projectTypes = [
    'Medical Facility',
    'Commercial Building',
    'Residential Project',
    'Infrastructure',
    'Educational Institution',
    'Hotel & Hospitality',
    'Industrial Complex',
    'Government Building',
    'Other'
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" data-aos="fade">
      <div className="contact-hero-overlay">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title" data-aos="fade-up" data-aos-delay="200">
            Contact <span className="contact-brand-highlight">A.D.O CONSULT</span>
          </h1>
          <p className="contact-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              Ready to bring your MEP engineering vision to life? Let's discuss how our expertise
              can transform your project into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section" data-aos="fade-right">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Get in touch with our expert team</p>
              </div>

              {submitSuccess && (
                <div className="success-message" data-aos="fade-in">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting A.D.O CONSULT. We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section" data-aos="fade-left">
              <div className="contact-info-header">
                <h2>Get in Touch</h2>
                <p>Multiple ways to reach our expert team</p>
              </div>

              <div className="contact-cards">
                <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="card-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="card-content">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="card-content">
                    <h3>Email</h3>
                    <p>info@adoconsult.com</p>
                    <p>projects@adoconsult.com</p>
                  </div>
                </div>

                <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
                  <div className="card-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="card-content">
                    <h3>Address</h3>
                    <p>123 Engineering Plaza</p>
                    <p>Business District, City 12345</p>
                    <p>United States</p>
                  </div>
                </div>

                <div className="contact-card" data-aos="fade-up" data-aos-delay="500">
                  <div className="card-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="card-content">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder" data-aos="fade-up" data-aos-delay="600">
                <div className="map-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <div className="map-text">
                  <h3>Visit Our Office</h3>
                  <p>Located in the heart of the business district</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="additional-info" data-aos="fade-up">
        <div className="container">
          <div className="info-grid">
            <div className="info-item" data-aos="zoom-in" data-aos-delay="200">
              <div className="info-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Team</h3>
              <p>50+ certified MEP engineers ready to serve your project needs</p>
            </div>

            <div className="info-item" data-aos="zoom-in" data-aos-delay="300">
              <div className="info-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>15+ Years</h3>
              <p>Experience across diverse sectors and project types</p>
            </div>

            <div className="info-item" data-aos="zoom-in" data-aos-delay="400">
              <div className="info-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>500+ Projects</h3>
              <p>Successfully completed projects worldwide</p>
            </div>

            <div className="info-item" data-aos="zoom-in" data-aos-delay="500">
              <div className="info-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Dedicated support throughout your project lifecycle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;