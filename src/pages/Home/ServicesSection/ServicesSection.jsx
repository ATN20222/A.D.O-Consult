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
        'Medium Voltage Cables & Switchgear',
        'Distribution Transformers & Boards (MDB/SDB)',
        'Low Voltage Cables & Lighting Systems',
        'Air Conditioning & Pump Feeding Systems',
        'Emergency, UPS, Power Factor, and ETAP Studies',
        'Earthing & Lightning Network Design'
      ]
    },
    {
      category: 'Light Current Systems (ELV)',
      icon: 'fas fa-wifi',
      items: [
        'Fire Alarm, PA, CCTV, Access Control',
        'IPTV/MATV, Smart Systems',
        'FTTH, Triple Play, Master Clock',
        'Nurse Call Systems',
        'BOQs, Specifications, SLDs'
      ]
    },
    {
      category: 'Building Automation',
      icon: 'fas fa-cogs',
      items: [
        'BMS & Smart Building Systems',
        'HVAC, Electrical Panels Monitoring',
        'Fire Alarm, Access Control Monitoring',
        'Elevator/Escalator Interface',
        'Energy Management Systems (EMS)'
      ]
    },
    {
      category: 'Infrastructure & Plumbing',
      icon: 'fas fa-water',
      items: [
        'Water, Sewage, Stormwater Networks',
        'Irrigation Networks & Pump Stations',
        'Tanks, Reservoirs & Treatment Plants',
        'MV & LV Electrical Networks',
        'Street Lighting & Fiber Optic',
        'SCADA & Traffic Management'
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