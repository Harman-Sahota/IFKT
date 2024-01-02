import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../Pages/home.module.css';

const SiteNavbar = () => {
  const scrollToSection = (className) => {
    const element = document.getElementsByClassName(className);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

<Navbar bg="light" expand="lg" id={styles.nav}>
  <Navbar.Brand href="#home" className={styles.navBrand}>IFKT</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className={`ms-auto ${styles.navItems}`} justify-content-end>
      <Nav.Link id={styles.items} className="mr-3" onClick={() => scrollToSection('carousel')}>Speakers</Nav.Link>
      <Nav.Link id={styles.items} className="mr-3" href="#about">Agenda</Nav.Link>
      <Nav.Link id={styles.items} className="mr-3" href="#services">Venue</Nav.Link>
      <Nav.Link id={styles.items} className="mr-3" href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);
};

export default SiteNavbar;