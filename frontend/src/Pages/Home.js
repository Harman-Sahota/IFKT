import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';
import Navbar from '../Components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import toronto from '../assets/toronto.png';
import conference from '../assets/conference.png';
import yarn from '../assets/yarn.png';
import AutoScrollCarousel from '../Components/AutoScrollCarousel';
import { Modal } from 'react-bootstrap';
// import ThreeColumnLayout from '../Components/ThreeColumn';

gsap.registerPlugin(ScrollTrigger);


const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // Function to toggle modal visibility
    const toggleModal = (imageSrc = '') => {
        setSelectedImage(imageSrc);
        setIsModalOpen(!isModalOpen);
    };

    const introRef = useRef(null);
    const carouselRef = useRef(null);
    const imageGallery = useRef(null);
    const venueRef = useRef(null);
    const speakerRef = useRef(null);


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

            const venueElement = venueRef.current;
            const venueRect = venueElement.getBoundingClientRect();
            const venueScrollPosition = window.scrollY;
            const venueScrollPercentage = (venueScrollPosition - venueRect.top) / venueRect.height;
            venueElement.style.opacity = Math.min(1, Math.max(0, venueScrollPercentage));

            const speakerElement = speakerRef.current;
            const speakerRect = speakerElement.getBoundingClientRect();
            const speakerScrollPosition = window.scrollY;
            const speakerScrollPercentage = (speakerScrollPosition - speakerRect.top) / speakerRect.height;
            speakerElement.style.opacity = Math.min(1, Math.max(0, speakerScrollPercentage));

            const galleryElement = imageGallery.current;
            const galleryRect = galleryElement.getBoundingClientRect();
            const galleryScrollPosition = window.scrollY;
            const galleryScrollPercentage = (galleryScrollPosition - galleryRect.top) / galleryRect.height;
            galleryElement.style.opacity = Math.min(1, Math.max(0, galleryScrollPercentage));
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
                        <p className={styles.sub}><b>The Future of Knitting</b></p>
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

                <h2 id={styles.sectionheading}  className='introstart' ref={venueRef}>The Venue</h2>
                <div className={styles.introSection} ref={introRef}>
                    <div className={styles.introImageContainer}>
                        {/* Replace the placeholder URL with your actual image URL */}
                        <img className="img-fluid" src="https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_1.jpg" alt="Intro Image" />
                    </div>
                    <div className={styles.introTextContainer}>
                        <h2>Cyril Clark, Brampton</h2>
                        <p>Upgraded in early 2019, Cyril Clark is an intimate 187-seat proscenium venue in Brampton. Equipped with modern technology, fixed seating for accessibility, and two dressing rooms, the venue offers a captivating experience. Features include a programmable lighting system, superior audio, flexible video systems, and a grand piano on stage. Services provided encompass usher/front of house assistance, technical staff, and remote box office services.</p>
                    </div>
                </div>

                <div className={styles.imageGallery} ref={imageGallery}>
                    {/* Gallery of stadium images */}
                    <div className={styles.galleryItem} onClick={() => toggleModal("https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_2.jpg")} >
                        <img src="https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_2.jpg" alt="Stadium Image 1" />
                    </div>
                    <div className={styles.galleryItem} onClick={() => toggleModal("https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_5.jpg")} >
                        <img src="https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_5.jpg" alt="Stadium Image 2" />
                    </div>
                    <div className={styles.galleryItem} onClick={() => toggleModal("https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_7.jpg")} >
                        <img src="https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_7.jpg" alt="Stadium Image 3" />
                    </div>
                    <div className={styles.galleryItem} onClick={() => toggleModal("https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_3.jpg")}  >
                        <img src="https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_3.jpg" alt="Stadium Image 4" />
                    </div>
                    <div className={styles.galleryItem} onClick={() => toggleModal("https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_8.jpg")} >
                        <img src="https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_8.jpg" alt="Stadium Image 5" />
                    </div>
                    <div className={styles.galleryItem} onClick={() => toggleModal("https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_9.jpg")} >
                        <img src="https://tickets.brampton.ca/content/Images/COB/venues/cyril_clark/Cyril_9.jpg" alt="Stadium Image 6" />
                    </div>
                </div>

                <div className='carousel' id={styles.carouselcont} ref={carouselRef}>
                    <h2 id={styles.sectionheading} ref={speakerRef} >The Speakers</h2>
                    <AutoScrollCarousel></AutoScrollCarousel>
                </div>

                {/* <ThreeColumnLayout></ThreeColumnLayout> */}


                <Modal
                    show={isModalOpen}
                    onHide={toggleModal}
                    dialogClassName={styles.modalDialog}
                >
                    <Modal.Body>
                        <img
                            className={`${styles.modalImage} img-fluid`}
                            src={selectedImage}
                            alt="Stadium Image"
                        />
                    </Modal.Body>
                </Modal>


            </div>
        </div>
    );
};

export default Home;
