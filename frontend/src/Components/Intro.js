import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Pages/home.module.css';

function renderIntro() {
    return(
    <div className={styles.introSection}>
      <div className={styles.introImageContainer}>
        {/* Replace the placeholder URL with your actual image URL */}
        <img className="img-fluid" src="https://via.placeholder.com/300" alt="Intro Image" />
      </div>
      <div className={styles.introTextContainer}>
        <h2>Your Intro Heading</h2>
        <p>Your introductory text goes here.</p>
      </div>
    </div>
    )
};

export default renderIntro;

