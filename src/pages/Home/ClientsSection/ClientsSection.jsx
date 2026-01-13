import React from 'react';
import './ClientsSection.css';

// Import client logos
import AmazonEG from '../../../assets/Clients/amazoneg.png';
import Apex from '../../../assets/Clients/Apex.jpg';
import ARCOM from '../../../assets/Clients/ARCOM.png';
import Badreldin from '../../../assets/Clients/Badreldin.png';
import CCC from '../../../assets/Clients/CCC.png';
import CECTP from '../../../assets/Clients/cectp.png';
import Concrete from '../../../assets/Clients/Concrete.png';
import ConsultantGroup from '../../../assets/Clients/ConsultantGroup.png';
import EchoArch from '../../../assets/Clients/EchoArch.png';
import Edit from '../../../assets/Clients/edit.jpg';
import Elmasria from '../../../assets/Clients/Elmasria.svg';
import Elsweedy from '../../../assets/Clients/elsweedy.jpg';
import Elznouki from '../../../assets/Clients/Elznouki.webp';
import Falcom from '../../../assets/Clients/Falcom.png';
import Fanar from '../../../assets/Clients/fanar.svg';
import Froneri from '../../../assets/Clients/Froneri.png';
import GHK from '../../../assets/Clients/GHK.png';
import HelwanUniversity from '../../../assets/Clients/Helwan_University_Logo.jpg';
import MinOfHealth from '../../../assets/Clients/MinOfHealth.png';
import MisrRealState from '../../../assets/Clients/MisrRealState.jpg';
import Nozha from '../../../assets/Clients/Nozha.png';
import OmairaBin from '../../../assets/Clients/OmairaBin.png';
import Omran from '../../../assets/Clients/Omran.png';
import ORC from '../../../assets/Clients/ORC.png';
import SunRise from '../../../assets/Clients/sunRise.webp';

const ClientsSection = () => {
  const clients = [
    { id: 1, name: 'Amazon Egypt', logo: AmazonEG },
    { id: 2, name: 'Apex', logo: Apex },
    { id: 3, name: 'ARCOM', logo: ARCOM },
    { id: 4, name: 'Badreldin', logo: Badreldin },
    { id: 5, name: 'CCC', logo: CCC },
    { id: 6, name: 'CECTP', logo: CECTP },
    { id: 7, name: 'Concrete', logo: Concrete },
    { id: 8, name: 'Consultant Group', logo: ConsultantGroup },
    { id: 9, name: 'Echo Architecture', logo: EchoArch },
    { id: 10, name: 'Edit', logo: Edit },
    { id: 11, name: 'Elmasria', logo: Elmasria },
    { id: 12, name: 'Elsweedy', logo: Elsweedy },
    { id: 13, name: 'Elznouki', logo: Elznouki },
    { id: 14, name: 'Falcom', logo: Falcom },
    { id: 15, name: 'Fanar', logo: Fanar },
    { id: 16, name: 'Froneri', logo: Froneri },
    { id: 17, name: 'GHK', logo: GHK },
    { id: 18, name: 'Helwan University', logo: HelwanUniversity },
    { id: 19, name: 'Ministry of Health', logo: MinOfHealth },
    { id: 20, name: 'Misr Real State', logo: MisrRealState },
    { id: 21, name: 'Nozha', logo: Nozha },
    { id: 22, name: 'Omaira Bin', logo: OmairaBin },
    { id: 23, name: 'Omran', logo: Omran },
    { id: 24, name: 'ORC', logo: ORC },
    { id: 25, name: 'Sun Rise', logo: SunRise },
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header" data-aos="fade-up">
          <h1 className="clients-title">Our <span className='clients-title-2'>Clients</span></h1>
          <p className="clients-subtitle">
            We're proud to partner with industry leaders and innovative companies
          </p>
        </div>

        <div className="clients-grid" data-aos="fade-up" data-aos-delay="200">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="client-logo-container"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 50}
            >
              <div className="client-logo-wrapper">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;