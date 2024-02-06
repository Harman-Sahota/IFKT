import React from 'react';
import styles from '../Pages/home.module.css';
import message1Pdf from '../assets/deputymayor.pdf';
import message3Pdf from '../assets/hk.pdf';
import message2Pdf from '../assets/marcus.pdf';

const MessagesSection = () => {
    return (
        <div className={styles.messagesContainer}>
            <div className={styles.messagesGrid}>
                <EmbedPdf pdf={message1Pdf} />
                <EmbedPdf pdf={message2Pdf} />
                <EmbedPdf pdf={message3Pdf} />
            </div>
        </div>
    );
};

const EmbedPdf = ({ pdf }) => {
    return (
        <div className={styles.pdfContainer}>
            <embed src={pdf} type="application/pdf" width="100%" height="500px" sandbox="" />
        </div>
    );
};

export default MessagesSection;
