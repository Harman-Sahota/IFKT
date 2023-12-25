// EntranceAnimation.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './EntranceAnimation.module.css';
import sound from '../assets/sound.mp3';
import Home from '../Pages/Home';
import ReactDOM from 'react-dom/client';



const EntranceAnimation = () => {
  useEffect(() => {
    // GSAP Animation Timeline
    const timeline = gsap.timeline();

    // Initial Setup
    timeline.set(`.${styles.backgroundContainer}`, { opacity: 0 });
    timeline.set(`.${styles.textElement}`, { color: 'white', opacity: 0, y: 20 });

    // Start playing background music
    // const backgroundMusic = new Audio(sound);
    // backgroundMusic.loop = true;
    // backgroundMusic.volume = 0.5; 
    // backgroundMusic.play();

    // Animation Timeline
    timeline.to(`.${styles.backgroundContainer}`, { opacity: 1, duration: 1 })

      // Animation for the first text
      .to(`.${styles.textElement}:first-child`, { opacity: 1, y: 0, duration: 0.8 })
      .to(`.${styles.textElement}:first-child`, { opacity: 0, y: -20, duration: 0.8 })
      .to({}, { duration: 0.5 }) // Add a delay of 0.5 seconds

      // Animation for the second text
      .to(`.${styles.textElement}:nth-child(2)`, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(`.${styles.textElement}:nth-child(2)`, { opacity: 0, y: -20, duration: 0.8 }, "+=0.8")

      .to(`.${styles.backgroundContainer}`, { opacity: 0, duration: 1, onComplete: showHomePage });

    // Cleanup
    return () => {
      timeline.kill();
    //   backgroundMusic.pause();
    };
  }, []); // Empty dependency array, meaning this effect runs once on mount

  const showHomePage = () => {
    // Render the HomePage component in the same container
    const container = document.querySelector(`.${styles.backgroundContainer}`);
    const landingPage = document.querySelector(`.${styles.landingPage}`);
  
    // Log to check if this function is being called
    console.log('showHomePage function called');
  
    // Remove landingPage
    container.removeChild(landingPage);
  
    // Create a root and render HomePage component
    const homeRoot = ReactDOM.createRoot(container);
    homeRoot.render(<Home />);
  };
  
  

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.landingPage}>
        <h1 className={styles.textElement}>IFKT Presents</h1>
        <h2 className={styles.textElement}>For The First Time Ever In Canada</h2>
        {/* Add additional cinematic text elements as needed */}
      </div>
    </div>
  );
};

export default EntranceAnimation;
