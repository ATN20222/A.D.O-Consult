import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './components/Nav/Nav.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.jsx'
import './App.css'

function App() {
  return (
    <Router>
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
                  © 2026 EngSolutions. All rights reserved. |
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
