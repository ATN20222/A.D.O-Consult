import React from 'react';
import CountUp from 'react-countup';
import './AboutSection.css';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {

  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="about-title">
              About <span className="brand-highlight"><span className='ALetter'>A</span>.<span className="DLetter">D</span>.<span className="OLetter">O</span> CONSULT</span>
            </h2>
            <div className="about-description">
              <p data-aos="fade-up" data-aos-delay="200">
                <span className='ALetter'>A</span>.<span className="DLetter">D</span>.<span className="OLetter">O</span> CONSULT is a specialized consultancy office providing consulting and MEP engineering services
                following international standards. With extensive experience across medical, commercial, infrastructure,
                educational, and residential projects, we ensure your project's mechanical, electrical, and plumbing
                systems are designed and implemented with precision and excellence.
              </p>
            </div>

            <div className="about-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp
                    end={500}
                    duration={2.5}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={200}
                  />
                </div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp
                    end={15}
                    duration={2}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={300}
                  />
                </div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp
                    end={50}
                    duration={2}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={400}
                  />
                </div>
                <div className="stat-label">Expert Engineers</div>
              </div>
            </div>

            <div className="about-cta" data-aos="fade-up" data-aos-delay="600">
              <button onClick={() => navigate('/about')} className="about-btn-primary">
                Discover Our Expertise
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <div className="about-visual" data-aos="fade-left" data-aos-delay="300">
            <div className="visual-container">
              <div className="visual-placeholder">
              <div className="placeholder-icon">
                <i className="fas fa-drafting-compass"></i>
              </div>
                <div className="placeholder-text">
                  Engineering<br/>Excellence
                </div>
              </div>
              <div className="visual-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;