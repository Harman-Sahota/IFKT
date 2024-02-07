import React from 'react';
import styles from '../Pages/home.module.css';
import image1 from '../assets/deputymayor.jpg'; // Change the paths to your image files
import image2 from '../assets/marcus.jpg';
import image3 from '../assets/hk.jpg';

const MessagesSection = () => {
    return (
        <div className={styles.messagesContainer}>
            <div className={styles.messagesGrid}>
                <EmbedImage image={image1} />
                <EmbedImage image={image2} />
                <EmbedImage image={image3} />
            </div>
        </div>
    );
};

const EmbedImage = ({ image }) => {
    return (
        <div className={styles.imageContainer}>
            <img src={image} alt="Embedded Image" className={styles.embeddedImage} />
        </div>
    );
};

export default MessagesSection;
