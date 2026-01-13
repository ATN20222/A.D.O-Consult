import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Nav.css';
import logo from '../../assets/logo.png';
const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-modern">
          <img src={logo} alt="logo" className={`logo ${!scrolled?'logoScrolled':''}`} />
        </Navbar.Brand>

        <Navbar.Toggle className="navbar-toggle-modern">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="ms-auto navbar-nav-modern">
            {navItems.map((item) => (
              <Nav.Item key={item.path} className="nav-item-modern">
                <Link
                  to={item.path}
                  className={`nav-link-modern ${
                    isActive(item.path) ? 'active' : ''
                  }`}
                  onClick={() => setExpanded(false)}
                >
                  {item.label}
                  {isActive(item.path) && <span className="active-indicator" />}
                </Link>
              </Nav.Item>
            ))}
          </Nav>

          <div className="navbar-actions">
            <Button
              as={Link}
              to="/contact"
              className="cta-button"
              onClick={() => setExpanded(false)}
            >
              Get Started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
