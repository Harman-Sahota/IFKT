import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Pages/home.module.css';

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
          'https://via.placeholder.com/150',
          'Sukhdeep Kaur',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          0
        )}
        {renderCarouselItem(
          'https://via.placeholder.com/150',
          'Sukhwinder Singh',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          1
        )}
        {renderCarouselItem(
          'https://via.placeholder.com/150',
          'Test Person',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          2
        )}
      </Carousel>
    </div>
  );
};

export default AutoScrollCarousel;
