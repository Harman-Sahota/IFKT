import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Pages/home.module.css';
import lady1 from '../assets/lady1.png';
import lady2 from '../assets/lady2.png';
import man1 from '../assets/man1.png';

const AutoScrollCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const renderCarouselItem = (imgSrc, name, description, index) => (
    <Carousel.Item key={name} className={styles.carouselItem} data-index={index}>
      <div
        className={`d-flex align-items-center justify-content-around h-100 ${
          isVisible ? styles.fadein : '' // Apply fadeIn class only when isVisible is true
        }`}
      >
        <div className="circle-image" id={styles.carouselimage}>
          <img className="d-block rounded-circle" src={imgSrc} alt={`${name} avatar`} />
        </div>
        <div className={`carousel-text ${styles.descriptionContainer}`}>
          <h3 id={styles.carouseldesc}>{name}</h3>
          <p id={styles.carouseldesc}>{description}</p>
        </div>
      </div>
    </Carousel.Item>
  );

  return (
    <div className={styles.carouselContainer} ref={carouselRef}>
      <Carousel
        id={styles.care}
        interval={4000}
        pause="hover"
        indicators
        controls
        activeIndex={activeIndex}
        onSelect={handleSlide}
      >
        {renderCarouselItem(
          'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=RB5j1QMAAAAJ&citpid=2',
          'Yordan Kyosev',
          'Professor Yordan Kyosev: a distinguished leader in the "Development and Assembly of Textile Products." With a stellar track record in the textile industry, he brings expertise, innovation, and a passion for pushing boundaries. Explore the transformative journey led by his visionary leadership, shaping the future of textile products.',
          0
        )}
        {renderCarouselItem(
          'https://vbu-berater.de/images/comprofiler/537_5c2b498d8acbc.jpg',
          'Thomas Mutschler',
          'Technological Advancements in Knitwear at the University of Applied Sciences Niederrhein, led by the accomplished Thomas Mustchler. As the driving force in technology development for knitwear, he combines expertise and innovation. Join the journey guided by his leadership, shaping the future of knitwear technology at IFKT Conference 2024.',
          1
        )}
        {renderCarouselItem(
          'https://www.hs-niederrhein.com/fileadmin/pool-ordner/bilder/Portraitfotos/FB07/Weber.jpg',
          'Marcus O. Weber',
          'Textile Technology, with a special emphasis on spinning technology, as well as expertise in management science and pedagogy, defines the focus of TUB/Textile Management under the capable leadership of Marcus O. Weber. Holding a pivotal role in steering the program, Marcus O. Weber brings a wealth of knowledge and a commitment to excellence.',
          2
        )}
        {renderCarouselItem(
          'https://www.autex.org/sites/default/files/team/Image_of_Mirela_Blaga_10b_237_284.jpg',
          'Mirela Blaga',
          'Professor Mirela Blaga, Director at Gheorghe Asachi Technical University, is a prominent leader in textile research, serving as an expert evaluator for EU programs and holding key roles in AUTEX and IFKT. Her impactful contributions extend to project management, editorial roles, and international engagements, solidifying her influential presence.',
          3
        )}
         {renderCarouselItem(
          'https://media.licdn.com/dms/image/C5603AQHR5eNMgqSwZQ/profile-displayphoto-shrink_400_400/0/1619552460157?e=1710374400&v=beta&t=F2ziSGuuV38LXjvVE-hkUp51ftF6k0JJNwOr5GTg-to',
          'Julia Klausmann',
          'Julia Klausmann, a Textile and Design Engineer in R&D at Hochschule Niederrhein, excels in sustainable development of technical textiles. Awarded the Promos Scholarship, her impactful contributions span eLearning administration and an Adidas internship.',
          4
        )}
         {renderCarouselItem(
          'https://www.ulster.ac.uk/staff-images/images/gault-1.jpg',
          'Alison Gault',
          'Explore the Frontier of Textile Design and Research at Ulster University, guided by the experienced Alison Gault. With a rich background in fashion and textiles, Alison spearheads innovative projects in knitwear technology and design, contributing to advancements in materials and craftsmanship. Join her pioneering initiatives and shape the future of textile innovation at upcoming conferences and research endeavors.',
          5
        )}
      </Carousel>
    </div>
  );
};

export default AutoScrollCarousel;
