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
import CountryList from '../Components/BentoCountries';
import RegistrationForm from '../Components/Registrationform';
import FoldedSection from '../Components/Folded';
import cal from '../assets/IFKT.ics'
import map from '../assets/map.png'


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
    const countryheadingRef = useRef(null);
    const messagesHeading = useRef(null);
    const datesref = useRef(null);
    const detailsRef = useRef(null);
    const det = useRef(null);


    useEffect(() => {

        document.title = 'IFKT 2024'

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

            const messagesHeadingElement = messagesHeading.current;
            const messagesHeadingRect = messagesHeadingElement.getBoundingClientRect();
            const messagesHeadingScrollPosition = window.scrollY;
            const messagesHeadingScrollPercentage = (messagesHeadingScrollPosition - messagesHeadingRect.top) / messagesHeadingRect.height;
            messagesHeadingElement.style.opacity = Math.min(1, Math.max(0, messagesHeadingScrollPercentage));

            const datesElement = datesref.current;
            const datesRect = datesElement.getBoundingClientRect();
            const datesScrollPosition = window.scrollY;
            const datesScrollPercentage = (datesScrollPosition - datesRect.top) / datesRect.height;
            datesElement.style.opacity = Math.min(1, Math.max(0, datesScrollPercentage));

            const detailsElement = detailsRef.current;
            const detailsRect = detailsElement.getBoundingClientRect();
            const detailsScrollPosition = window.scrollY;
            const detailsScrollPercentage = (detailsScrollPosition - detailsRect.top) / detailsRect.height;
            detailsElement.style.opacity = Math.min(1, Math.max(0, detailsScrollPercentage));

            const detElement = det.current;
            const detRect = detElement.getBoundingClientRect();
            const detScrollPosition = window.scrollY;
            const detScrollPercentage = (detScrollPosition - detRect.top) / detRect.height;
            detElement.style.opacity = Math.min(1, Math.max(0, detScrollPercentage));



            const countryElement = countryheadingRef.current;

            if (countryElement) {
                const countryRect = countryElement.getBoundingClientRect();
                const countryScrollPosition = window.scrollY;
                const countryScrollPercentage = (countryScrollPosition - countryRect.top) / countryRect.height;
                countryElement.style.opacity = Math.min(1, Math.max(0, countryScrollPercentage));
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
                        <p className={styles.sub2}>August 21 and 22</p>
                        <a href={cal} Download="IFKT_The_Future_of_Knitting_2024">
                            <button type="button" className="btn btn-primary" id={styles.initbutton} onClick={handleButtonClick}>
                                Save the Date in Your Calendar
                            </button>
                        </a>
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


                <h2 id={styles.sectionheading} className='introstart' ref={detailsRef}>Introduction</h2>
                <div className='details' id={styles.det} ref={det}>
                    <p>The 51st International Federation of Knitting Technologist’s
                        Congress will be hosted by the Cyril Clark Theatre in
                        Brampton, Ontario Canada on August 21st and 22nd, 2024. The
                        theme of the upcoming IFKT Congress is “The Future of
                        Knitting.” The last IFKT Congress was held at Ulster University
                        in Dublin, Ireland in 2022. Due to Covid, the normal scheduling
                        of the conference was interrupted, but this settles it back into
                        its normal schedule in the beautiful country of Canada. Please
                        come and share in this leading conference on knitting and
                        related technologies.<br></br><br></br>
                        The IFKT Congress provides an opportunity for both
                        researchers, practitioners, and others in the industry to
                        exchange new ideas and practical experiences from a wide
                        range of knitting expertise. It is a gathering not only of knitting
                        technologists, but of people from all aspects of the knitting
                        industry. Local and international knitwear producers will be
                        invited, along with knitting machine manufacturers and
                        representatives from all aspects of the production of knitwear.
                        A chance to learn the latest news, technologies, and to
                        network with other like minded people who are engaged in this
                        unique and close-knit industry.<br></br><br></br>
                        Anyone interested is welcome to this event. Please help
                        spread the word about this opportunity to learn, grow, share,
                        and network with others in the industry. A more detailed
                        agenda of the IFKT Congress will soon be available. As
                        knitting technology is now used in almost every aspect of our
                        lives; the industry is more important than ever. Where does it
                        go from here? What new areas will it move into? What pivotal
                        technologies have changed the trajectory of the industry? All
                        voices matter, and we look forward to seeing a diverse group
                        of people attending the IFKT Congress this year. Please help
                        spread the word, and drop by the website occasionally, as we
                        will update as more information is available concerning the

                        51st IFKT Congress at the Cyril Clark Theatre in Brampton,
                        Ontario.</p>
                </div>

                <h2 id={styles.sectionheading} className='introstart' ref={venueRef}>The Venue</h2>
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


                {/* Three Column Section */}
                <h2 id={styles.sectionheading} className='messages' ref={messagesHeading}>Messages</h2>
                <div className={styles.gridContainer}>

                    {/* First Row */}
                    <div className={styles.gridItem}>
                        <img className="img-fluid" src="https://www.chatelaine.com/wp-content/uploads/2018/01/patrick-brown-resignation.jpg" alt="Image 1" />
                        <div className={styles.gridText}>
                            <h3>The Mayor of Brampton</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula auctor mi, non rhoncus metus viverra quis. Sed auctor elit vel augue bibendum, a dapibus libero volutpat. Duis ac ex nec quam commodo commodo in nec massa. Proin euismod tellus nec risus imperdiet, id euismod velit efficitur. Integer ut augue et tortor tincidunt elementum non id libero. Fusce eget massa vel augue dapibus facilisis. Nam ut sem nec tellus tincidunt fringilla in sit amet metus. Mauris eu justo vel sem iaculis eleifend. Ut vel neque vitae nisi laoreet vulputate.</p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className={styles.gridItem}>
                        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Bonnie_Crombie_at_2017_AMO_Conference_%2836541302906%29_%28cropped3%29.jpg" alt="Image 2" />
                        <div className={styles.gridText}>
                            <h3>The Mississauga Mayor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula auctor mi, non rhoncus metus viverra quis. Sed auctor elit vel augue bibendum, a dapibus libero volutpat. Duis ac ex nec quam commodo commodo in nec massa. Proin euismod tellus nec risus imperdiet, id euismod velit efficitur. Integer ut augue et tortor tincidunt elementum non id libero. Fusce eget massa vel augue dapibus facilisis. Nam ut sem nec tellus tincidunt fringilla in sit amet metus. Mauris eu justo vel sem iaculis eleifend. Ut vel neque vitae nisi laoreet vulputate.</p>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className={styles.gridItem}>
                        <img className="img-fluid" src="" alt="Image 3" />
                        <div className={styles.gridText}>
                            <h3>Sample Person</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula auctor mi, non rhoncus metus viverra quis. Sed auctor elit vel augue bibendum, a dapibus libero volutpat. Duis ac ex nec quam commodo commodo in nec massa. Proin euismod tellus nec risus imperdiet, id euismod velit efficitur. Integer ut augue et tortor tincidunt elementum non id libero. Fusce eget massa vel augue dapibus facilisis. Nam ut sem nec tellus tincidunt fringilla in sit amet metus. Mauris eu justo vel sem iaculis eleifend. Ut vel neque vitae nisi laoreet vulputate.</p>
                        </div>
                    </div>
                </div>





                <CountryList></CountryList>



                <div className='importantdates' id={styles.impdate} ref={datesref}>
                    <FoldedSection
                        title="World Map"
                        content={
                            <img src={map} className={styles.countriesmap}></img>

                        }
                    />
                    <FoldedSection
                        title="Important Dates"
                        content={
                            <ul>
                                <li><b>10th June, 2024:</b> Abstract submission</li>
                                <li><b>01st July:</b> Author notifications</li>
                                <li><b>03rd July:</b> Early bird WEBSITE registration deadline</li>
                                <li><b>01st August:</b> Camera Ready Full Version of the Manuscript</li>
                                <li><b>10th August:</b> Final Version of all accepted contributions for publication post congress</li>
                                <li>Submit your full paper template by <b>01st August 2024</b>.</li>
                            </ul>

                        }
                    />

                    <FoldedSection
                        title="CDAP Form Download"
                        content={
                            <ul>
                                <li>Download Your CDAP Form by clicking this <a href='https://docs.google.com/document/d/1uVSCAHAQSyEKqjIVIJbQ9CGxZS6mb5zq3ZbmeNR6eCI/edit?usp=sharing' target='_blank'>link</a>.</li>
                            </ul>

                        }
                    />
                    <FoldedSection
                        title="Important Information about Registration"
                        content={
                            <ul>
                                <li><b>Early Registration participant with presentation on the stage (ending 3rd June):</b> <b>CDN350</b></li>
                                <li><b>Registration participant with presentation Online/Long distance (ending 2nd July):</b> <b>CDN300</b></li>
                                <li><b>Regular Registration at the event venue (21&22 August):</b> <b>CDN200</b></li>
                                <li><b>Regular Registration at the event venue (only for 22 August):</b> <b>CDN100</b></li>
                                <li><b>Fashion/textile Student Registration –</b> <b>CDN 80</b> (with college id)</li>
                                <li><b>Non-participant online Registration –</b> <b>CDN100</b></li>
                            </ul>

                        }
                    />
                </div>
                <h2 id={styles.registerhead}> Register Today to Attend!</h2>

                <RegistrationForm></RegistrationForm>

                <h2 id={styles.registerhead} className='hotels'>Accomodations</h2>
                <div className={styles.maps}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.4743465036545!2d-79.7044882129227!3d43.64923579585067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f98f4d19eeb%3A0x196631698f30408c!2sMonte%20Carlo%20Inn%20-%20Airport%20Suites!5e0!3m2!1sen!2sca!4v1705333554198!5m2!1sen!2sca" width="590" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.4743465036545!2d-79.7044882129227!3d43.64923579585067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3ffcde064599%3A0x1a56627493cf763d!2sCountry%20Inn%20%26%20Suites%20by%20Radisson%2C%20Toronto%20Mississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1705333742457!5m2!1sen!2sca" width="590" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <Navbar />

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
