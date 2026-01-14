import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from './components/Nav/Nav.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.jsx'
import './App.css'
export const ImagesBaseUrl = "https://ado-egy.com/images/";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>

        <footer className="footer-modern">
          <Container>
            <Row className="text-center">
              <Col>
                <p className="footer-text mb-0">
                  © {new Date().getFullYear()} A.D.O CONSULT. All rights reserved. |
                  <a href="/contact" className="footer-link ms-2">
                    Contact Us
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Router>
  )
}

export default App
