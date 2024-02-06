import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import message1Pdf from '../assets/deputymayor.pdf';
import message3Pdf from '../assets/hk.pdf';
import message2Pdf from '../assets/marcus.pdf';
import styles from '../Pages/home.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            <Document file={pdf}>
                <Page pageNumber={1} className={styles.pdfPage} />
                <Page pageNumber={2} className={styles.pdfPage} />
            </Document>
        </div>
    );
};

export default MessagesSection;
