import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import Navbar from '../Components/Navbar';
import { gsap } from 'gsap';

const Home = () => {

    const generateICalendarFile = () => {
        // Generate iCalendar content
        const calendarContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:IFKT CONFERENCE 2024
DESCRIPTION:Annual conference in Canada
DTSTART:20240828T120000
DTEND:20240829T120000
LOCATION:Canada
END:VEVENT
END:VCALENDAR`;

        // Create a Blob containing the iCalendar content
        const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8' });

        // Create a download link
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'ifkt_conference_2024.ics');

        // Trigger the click event to initiate the download
        link.click();
    };

    const handleButtonClick = () => {
        // GSAP animation for the button click
        const button = `#${styles.initbutton}`;

        gsap.fromTo(
            button,
            { scale: 1 },
            {
                scale: 1.1,
                duration: 0.2,
                ease: 'power1.out',
                onComplete: () => {
                    // Reverse animation
                    gsap.to(button, { scale: 1, duration: 0.2, ease: 'power1.in' });
                    // Trigger the download function after scaling back
                    generateICalendarFile();
                },
            }
        );
    };

    return (
        <div className='container container-fluid'>
            <Navbar />
            <div className={styles.maincont}>
                <div className='text-container' id={styles.textContainer}>
                    <p className={styles.sub}>For The First Time In <span className={styles.subspan}>Canada</span>,</p>
                    <h2 className={styles.event}>IFKT CONFERENCE 2024</h2>
                    <p className={styles.sub2}>August 28 and 29</p>
                    <button type="button" className="btn btn-primary" id={styles.initbutton} onClick={handleButtonClick}>
                        Save the Date in Your Calendar
                    </button>
                </div>
                {/* <div className={styles.images}>
                    <img src='https://i.pinimg.com/564x/b1/97/8a/b1978a028fa4b63d55dd9644e7ecd54e.jpg' alt="Image 1"></img>
                    <img src='https://i.pinimg.com/564x/b1/97/8a/b1978a028fa4b63d55dd9644e7ecd54e.jpg' alt="Image 2"></img>
                    <img src='https://i.pinimg.com/564x/b1/97/8a/b1978a028fa4b63d55dd9644e7ecd54e.jpg' alt="Image 3"></img>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
