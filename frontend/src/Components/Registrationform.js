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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    setIsSubmitting(true);

    try {
      const PUBLIC_API_KEY = 'ITEDlNDS4SLpA-iwW';
      // Send email to the recipient
      const recipientResponse = await emailjs.send(
        'service_h8ibkqa',
        'template_f225ypw',
        {
          to_name: formData.firstName,
          from_name: 'IFKT',
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
          email: formData.email
        },
        PUBLIC_API_KEY 
      );

      console.log('Recipient Email sent successfully:', recipientResponse);

      // Send email to yourself (admin)
      const adminResponse = await emailjs.send(
        'service_h8ibkqa',
        'template_1ymc2hn',
        {
          to_name: 'IFKT Team', // Specify the admin's name or use a dedicated email address
          from_name: 'IFKT Notification',
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
          email: formData.email
        },
        PUBLIC_API_KEY 
      );

      console.log('Admin Email sent successfully:', adminResponse);

      // Show success alert
      alert('Form data successfully submitted!');

      // Clear form fields after submission
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      // Handle errors, e.g., show an error message to the user
      alert('Failed to submit form data. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
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

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
