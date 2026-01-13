import React from 'react';
import './About.css';

const About = () => {
  const leadership = [
    {
      name: 'Eng. Karim El-Sayed',
      title: 'Managing Partner – Structural & Infrastructure Engineering',
      description: 'Karim leads the firm\'s technical direction with over a decade of experience in structural design, infrastructure projects, and construction supervision. His expertise lies in delivering safe, optimized, and regulation-compliant solutions for complex engineering challenges.',
      image: '/placeholder-karim.jpg'
    },
    {
      name: 'Eng. Omar Hassan',
      title: 'Associate Partner – MEP & Smart Systems',
      description: 'Omar specializes in mechanical, electrical, and smart systems engineering. He oversees integrated MEP coordination, energy-efficient design, and technology-driven solutions, ensuring seamless performance across all building systems.',
      image: '/placeholder-omar.jpg'
    }
  ];

  const services = [
    'Lead Engineering Consultancy',
    'Structural Engineering',
    'Mechanical Systems',
    'Electrical Systems',
    'ICT & Low Current Systems',
    'Roads & Infrastructure',
    'Utilities Networks',
    'Smart Cities & Intelligent Systems',
    'Sustainable & LEED-Oriented Design',
    'Environmental Studies',
    'Waste Management Solutions',
    'CFD & Performance Analysis',
    'Lighting Design',
    'Vertical Transportation',
    'Acoustic Engineering',
    'Traffic Analysis',
    'Bridges & Tunnels'
  ];

  const approach = [
    'Integrated, multidisciplinary coordination',
    'Compliance with international standards',
    'Practical, buildable solutions',
    'Long-term operational efficiency'
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1 className="about-hero-title" data-aos="fade-up" data-aos-delay="200">
              About <span className="about-brand-highlight"><span className='ALetter'>A</span>.<span className="DLetter">D</span>.<span className="OLetter">O</span> CONSULT</span>
            </h1>
            <p className="about-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
              Your Strategic Partner for Engineering Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-container">
          <div className="intro-content" data-aos="fade-up">
            <p className="intro-text">
              We are an engineering consultancy delivering integrated design and supervision services for complex projects across multiple disciplines. Our work combines technical precision, practical innovation, and deep industry understanding to help clients build efficiently, sustainably, and confidently.
            </p>
            <p className="intro-text">
              With a multidisciplinary approach and a strong focus on quality, we support projects from early concept through execution, ensuring clarity, coordination, and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="about-container">
          <div className="about-section-header" data-aos="fade-up">
            <h2 className="about-section-title">Who We Are</h2>
          </div>

          <div className="who-content" data-aos="fade-up" data-aos-delay="200">
            <div className="who-text">
              <p>
                Founded by experienced engineers, our firm operates as a collaborative practice that brings together architecture, engineering, and smart infrastructure solutions under one roof. We are committed to international standards, clear communication, and results-driven engineering.
              </p>
              <p>
                Our strength lies in translating vision into buildable, cost-effective, and future-ready solutions.
              </p>
            </div>

            <div className="who-stats">
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="stat-content">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="stat-card" data-aos="zoom-in" data-aos-delay="500">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-content">
                  <h3>50+</h3>
                  <p>Expert Engineers</p>
                </div>
              </div>

              <div className="stat-card" data-aos="zoom-in" data-aos-delay="600">
                <div className="stat-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="stat-content">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="about-container">
          <div className="about-section-header" data-aos="fade-up">
            <h2 className="about-section-title">Leadership & Associates</h2>
          </div>

          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="leader-card"
                data-aos="fade-up"
                data-aos-delay={200 + index * 200}
              >
                <div className="leader-image">
                  <div className="image-placeholder">
                    <i className="fas fa-user-tie"></i>
                    <span>Photo Coming Soon</span>
                  </div>
                </div>

                <div className="leader-content">
                  <h3 className="leader-name">{leader.name}</h3>
                  <h4 className="leader-title">{leader.title}</h4>
                  <p className="leader-description">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="about-container">
          <div className="about-section-header" data-aos="fade-up">
            <h2 className="about-section-title">What We Do</h2>
            <p className="about-section-subtitle">
              We provide engineering design, consultancy, and supervision services across multiple disciplines
            </p>
          </div>

          <div className="about-services-grid" data-aos="fade-up" data-aos-delay="200">
            {services.map((service, index) => (
              <div
                key={index}
                className="about-service-item"
                data-aos="fade-in"
                data-aos-delay={300 + index * 50}
              >
                <span className="about-service-bullet">•</span>
                <span className="about-service-text">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach">
        <div className="about-container">
          <div className="about-section-header" data-aos="fade-up">
            <h2 className="about-section-title">Our Approach</h2>
          </div>

          <div className="approach-content" data-aos="fade-up" data-aos-delay="200">
            <div className="approach-list">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className="approach-item"
                  data-aos="fade-right"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="approach-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="approach-quote" data-aos="fade-left" data-aos-delay="600">
              <blockquote>
                "We don't just design projects — we engineer confidence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;