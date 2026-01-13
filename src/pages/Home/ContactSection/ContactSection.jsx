import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      setIsSubmitting(false);
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
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Info Side */}
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-header">
              <h2 className="contact-title">
                Let's Work <span className="brand-highlight">Together</span>
              </h2>
              <p className="contact-description">
                Contact <span className='ALetter'>A</span>.<span className="DLetter">D</span>.<span className="OLetter">O</span> CONSULT today for professional MEP and consulting solutions
                tailored to your project. Our experts are ready to provide guidance and
                innovative engineering solutions.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>01150357168</p>
                  <p>01094469039</p>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@ado-egy.com</p>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>Building 7881, Street 9, Mokattam, Cairo, Egypt</p>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
                <div className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/company/110053973/admin?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin%3BEWoOTkVAQBS9sZkrmf8ynQ%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="600">
                <div className="contact-icon">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="contact-text">
                  <h4>Facebook</h4>
                  <a href="https://www.facebook.com/profile.php?id=61556208473080&locale=ar_AR" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Side */}
          <div className="contact-form-container" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Get in touch with our team</p>
              </div>

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

              <div className="form-row">
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

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01150357168"
                  />
                </div>
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

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;