import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import Navbar from '../Components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import toronto from '../assets/toronto.png';
import conference from '../assets/conference.png';
import yarn from '../assets/yarn.png';
import AutoScrollCarousel from '../Components/AutoScrollCarousel';

gsap.registerPlugin(ScrollTrigger);


const Home = () => {

   
    const introRef = useRef(null);
    const carouselRef = useRef(null);
    

    useEffect(() => {
        const introElement = introRef.current;

        // Function to handle scroll events
        const handleScroll = () => {
            const introRect = introElement.getBoundingClientRect();
            const scrollPosition = window.scrollY;

            // Calculate the scroll percentage within the intro section
            const scrollPercentage = (scrollPosition - introRect.top) / introRect.height;

            // Apply the opacity based on the scroll percentage
            introElement.style.opacity = Math.min(1, Math.max(0, scrollPercentage));

            const carouselElement = carouselRef.current;
            const carouselRect = carouselElement.getBoundingClientRect();
            const carouselScrollPosition = window.scrollY;
            const carouselScrollPercentage = (carouselScrollPosition - carouselRect.top) / carouselRect.height;
            carouselElement.style.opacity = Math.min(1, Math.max(0, carouselScrollPercentage));
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  


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
        <div className='container container-fluid' id='smooth-wrapper'>
            <div id='smooth-content'>
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

                    <div className={styles.image1}>
                        <img src={toronto} alt="CN Tower"></img>
                    </div>
                    <div className={styles.image2} >
                        <img src={conference} alt="Conference aerial view"></img>
                    </div>
                    <div className={styles.image3}>
                        <img src={yarn} alt="yarn"></img>
                    </div>
                </div>

                <div className={styles.introSection} ref={introRef}>
                    <div className={styles.introImageContainer}>
                        {/* Replace the placeholder URL with your actual image URL */}
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Intro Image" />
                    </div>
                    <div className={styles.introTextContainer}>
                        <h2>Evergreen Park Stadium</h2>
                        <p>Evergreen Park Stadium, an architectural marvel nestled in a verdant landscape, accommodates 50,000 spectators. With cutting-edge design, premium amenities, and eco-friendly initiatives, it hosts electrifying sports events, concerts, and community gatherings. The stadium, a hub for sports and entertainment, seamlessly integrates modernity with environmental sustainability, offering an unparalleled experience for all.</p>
                    </div>
                </div>

                <div className='carousel' id={styles.carouselcont} ref={carouselRef}>
                    <AutoScrollCarousel></AutoScrollCarousel>
                </div>
            </div>
        </div>
    );
};

export default Home;
