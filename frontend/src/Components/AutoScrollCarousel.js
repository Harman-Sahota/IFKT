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
          lady1,
          'Evelyn Weaver',
          'A knitting virtuoso with decades of experience, Evelyn is renowned for her intricate lacework and innovative techniques. Join her session to unravel the secrets behind creating timeless, heirloom-quality knits.',
          0
        )}
        {renderCarouselItem(
          man1,
          'Miles Yarnspinner',
          'A dynamic yarn enthusiast and entrepreneur, Miles shares his expertise on selecting the perfect yarn for any project. Explore the world of fibers, colors, and textures in his talk, and elevate your knitting projects to new heights.',
          1
        )}
        {renderCarouselItem(
          lady2,
          'Harper Needlecraft',
          'Harper, a trailblazer in the knitting community, is set to inspire with her session on sustainable and ethical knitting practices. Discover how to make eco-conscious choices without compromising on creativity and style in this enlightening presentation.',
          2
        )}
      </Carousel>
    </div>
  );
};

export default AutoScrollCarousel;
