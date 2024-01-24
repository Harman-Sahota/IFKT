// RegistrationForm.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import styles from './RegistrationForm.module.css';
import Hands from '../assets/hands.jpg';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send email to the recipient
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_name: formData.firstName,
          from_name: 'Your App',
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
          email: formData.email
        },
        'YOUR_USER_ID'
      )
      .then(
        (response) => {
          console.log('Recipient Email sent successfully:', response);
          // You can add further actions here, such as showing a success message to the user
        },
        (error) => {
          console.error('Recipient Email sending failed:', error);
          // You can handle errors, e.g., show an error message to the user
        }
      );
  
    // Send email to yourself (admin)
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_name: 'IFKT Team', // Specify the admin's name or use a dedicated email address
          from_name: 'IFKT Notification',
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
          email: formData.email
        },
        'YOUR_USER_ID'
      )
      .then(
        (response) => {
          console.log('Admin Email sent successfully:', response);
          // You can add further actions here, such as logging or notification
        },
        (error) => {
          console.error('Admin Email sending failed:', error);
          // You can handle errors, e.g., log the error or send an alert
        }
      );
  };
  

  return (
    <Container className={styles.registrationContainer}>
      <Row className='register'>
        <Col md={6} className={styles.imageContainer}>
          {/* Image goes here */}
          <img
            src={Hands}
            alt="Registration Image"
            className={styles.image}
          />
        </Col>
        <Col md={6} className={styles.formContainer}>
          {/* Form goes here */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
