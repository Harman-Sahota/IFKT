import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Poland1 from '../assets/poland1.jpg';
import Poland2 from '../assets/poland2.jpg';
import Poland3 from '../assets/poland3.jpg';
import Poland4 from '../assets/poland4.jpg';
import Poland5 from '../assets/poland5.jpg';
import Poland6 from '../assets/poland6.jpg';
import Poland7 from '../assets/poland7.jpg';
import Poland8 from '../assets/poland8.jpg';
import Poland9 from '../assets/poland9.jpg';
import Poland10 from '../assets/poland10.jpg';
import Poland11 from '../assets/poland11.jpg';
import Poland12 from '../assets/poland12.jpg';
import Poland13 from '../assets/poland13.jpg';
import Poland14 from '../assets/poland14.jpg';
import Poland15 from '../assets/poland15.jpg';
import Poland16 from '../assets/poland16.jpg';
import Poland17 from '../assets/poland17.jpg';
import Poland18 from '../assets/poland18.jpg';
import Poland19 from '../assets/poland19.jpg';
import Poland20 from '../assets/poland20.jpg';
import Poland21 from '../assets/poland21.jpg';
import Poland22 from '../assets/poland22.jpg';
import Poland23 from '../assets/poland23.jpg';
import Poland24 from '../assets/poland24.jpg';
import Poland25 from '../assets/poland25.jpg';
import Poland26 from '../assets/poland26.jpg';
import Poland27 from '../assets/poland27.jpg';
import Poland28 from '../assets/poland28.jpg';
import styles from './Gallery.module.css'; // Create a CSS module file

const Gallery = () => {
  const galleryTitle = "IFKT Poland";
  const gallerySubtitle = "2 - 4 OCTOBER 2018";

  const imageUrls = [
    Poland1,
    Poland2,
    Poland3,
    Poland4,
    Poland5,
    Poland6,
    Poland7,
    Poland8,
    Poland9,
    Poland10,
    Poland11,
    Poland12,
    Poland13,
    Poland14,
    Poland15,
    Poland16,
    Poland17,
    Poland18,
    Poland19,
    Poland20,
    Poland21,
    Poland22,
    Poland23,
    Poland24,
    Poland25,
    Poland26,
    Poland27,
    Poland28,
  ];

  const handleImageClick = () => {
    // You can add custom behavior here if needed
    // For example, displaying a modal or preventing the default action
    console.log('Image click prevented');
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">{galleryTitle}</h2>
      <p className="text-center">{gallerySubtitle}</p>
      <Row className="mt-4">
        {imageUrls.map((imageUrl, index) => (
           <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={`img-fluid ${styles.disableRightClick} ${styles.fixedSize}`}
              draggable="false"
              onClick={handleImageClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
