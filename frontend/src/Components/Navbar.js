import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../Pages/home.module.css';

const SiteNavbar = () => {
  const scrollToSection = (className) => {
    const elements = document.getElementsByClassName(className);
  
    if (elements.length > 0) {
      const element = elements[0];
      const duration = 1000; // Adjust as needed
      const start = window.scrollY || window.pageYOffset;
      const target = element.getBoundingClientRect().top + start;
      const startTime = performance.now();
  
      const scroll = (currentTime) => {
        const progress = (currentTime - startTime) / duration;
        const easedProgress = easeInOutQuad(progress);
        const newPosition = start + (target - start) * easedProgress;
  
        window.scrollTo(0, newPosition);
  
        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };
  
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  
      requestAnimationFrame(scroll);
    } else {
      console.log('Element not found:', className);
    }
  };

  return (

<Navbar bg="light" expand="lg" id={styles.nav}>
  <Navbar.Brand href="#home" className={styles.navBrand}>IFKT</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className={`ms-auto ${styles.navItems}`} justify-content-end>
    <Nav.Link id={styles.items} className="mr-3" onClick={() => scrollToSection('introstart')}>Venue</Nav.Link>
    <Nav.Link id={styles.items} className="mr-3" onClick={() => scrollToSection('carousel')}>Speakers</Nav.Link>
    <Nav.Link id={styles.items} className="mr-3" onClick={() => scrollToSection('messages')}>Messages`</Nav.Link>
      {/* <Nav.Link id={styles.items} className="mr-3" href="#about">Agenda</Nav.Link> */}
      <Nav.Link id={styles.items} className="mr-3" onClick={() => scrollToSection('country-list')}>Countries</Nav.Link>
      <Nav.Link id={styles.items} className="mr-3" onClick={() => scrollToSection('register')}>Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);
};

export default SiteNavbar;