import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const sectors = [
    { name: 'Medical', icon: 'fas fa-hospital' },
    { name: 'Landscape', icon: 'fas fa-tree' },
    { name: 'Infrastructure', icon: 'fas fa-road' },
    { name: 'Hotels', icon: 'fas fa-hotel' },
    { name: 'Administrative', icon: 'fas fa-building' },
    { name: 'Gas Stations', icon: 'fas fa-gas-pump' },
    { name: 'Educational', icon: 'fas fa-school' },
    { name: 'Religious & Cultural', icon: 'fas fa-mosque' },
    { name: 'Commercial', icon: 'fas fa-store' },
    { name: 'Industrial', icon: 'fas fa-industry' }
  ];

  const services = [
    {
      category: 'Electrical Systems',
      icon: 'fas fa-bolt',
      items: [
        "M.V Network & Bulk Equipment",
        "L.V Network (LTG, PWR & Mech Power)",
        "ELV System (FA, EV, PA, AV, Security & IP System)",
        "ICT (FTTH), Master Clock, Queueing & Nurse call",
        "L.V, ELV Study, Panel Schedule & SLD"
      ]
    },
    {
      category: 'Mechanical Systems',
      icon: 'fas fa-wifi',
      items: [
        "HVAC System (Ventilation & Air Conditioning)",
        "Fire Fighting System",
        "Plumbing System (Water Supply System & Drainage System)",
        "Swimming Pool System & Water Feature",
        "Gas System (Medical / Natural Gas)"
      ]
    },
    {
      category: 'Building Automation',
      icon: 'fas fa-cogs',
      items: [
        'BMS & Smart Building Systems',
        'Medical Gases System & Apeamatic System',
        'HVAC, Electrical Panels Monitoring',
        'Fire Alarm, Access Control Monitoring',
        'Elevator/Escalator Interface',
        'Energy Management Systems (EMS)'
      ]
    },
    {
      category: 'Infrastructure',
      icon: 'fas fa-water',
      items: [
        'Water, Sewage, Stormwater Networks',
        'Irrigation Networks & Pump Stations',
        'Tanks, Reservoirs & Treatment Plants',
        'MV & LV Electrical Networks',
        'Street Lighting & Fiber Optic',
        'SCADA & Traffic Management',
        "M.V , L.V Network & Street Lighting",
        "Fiber Optic Backbone Network (OSP / ISP) & Security System"
      ]
    }
  ];

  return (
    <section className="services-section">
      {/* Sectors Section */}
      <div className="sectors-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">
              Our <span className="brand-highlight">Specialties</span>
            </h2>
            <p className="section-subtitle">
              We specialize in MEP engineering across diverse sectors
            </p>
          </div>

          <div className="sectors-grid" data-aos="fade-up" data-aos-delay="200">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="sector-card"
                data-aos="zoom-in"
                data-aos-delay={300 + index * 50}
              >
                <div className="sector-icon">
                  <i className={sector.icon}></i>
                </div>
                <h3 className="sector-name">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="detailed-services-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">
              Our <span className="brand-highlight">Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive MEP engineering solutions for every project
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.category}
                className="service-category-card"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-category-title">{service.category}</h3>
                </div>

                <ul className="service-list">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="service-item"
                      data-aos="fade-right"
                      data-aos-delay={400 + index * 100 + itemIndex * 50}
                    >
                      <span className="service-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;