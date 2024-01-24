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
import Gallery from '../Components/Gallery';


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
                <iframe id={styles.venuemap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2675048877904!2d-79.80269282360833!3d43.725769471098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b169a10b02cb5%3A0x1a6c4dd3b0be855!2sCyril%20Clark%20Library%20Lecture%20Hall!5e0!3m2!1sen!2sca!4v1706119658793!5m2!1sen!2sca" width="1250" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                        <img className="img-fluid" src="https://ehq-production-canada.imgix.net/9dd1b10ae0b2258fb14de2cb6782839fc273e87b/original/1684950356/4dde7ad138ebc67538d951fc93498422_Councillor_Harkirat_Singh_Headshot_2022-cropped.jpg?auto=compress" alt="Image 1" />
                        <div className={styles.gridText}>
                            <h3>Deputy Mayor - Harkirat Singh</h3>
                            <p>
                                On behalf of the City of Brampton, it is with great pleasure and enthusiasm that I extend a
                                warm welcome to the esteemed members of the International Federation of Knitting
                                Technologists as you convene in North America for the first time.  <br></br><br></br>
                                Your decision to bring this distinguished gathering to our city is a testament to the global
                                significance of knitting technology and its impact on various industries. We are honoured to
                                host a community that is at the forefront of innovation and excellence in this field.  <br></br><br></br>
                                As you commence your conference, we trust that the sharing of ideas and the establishment of
                                meaningful connections will be at the forefront. Our city has a rich tradition of embracing
                                diverse perspectives and fostering collaboration, and we believe that your presence here will
                                contribute to the continued growth and evolution of knitting technology.  <br></br><br></br>
                                The City of Brampton extends its best wishes for a successful and fruitful conference. May this
                                gathering be a catalyst for discoveries, meaningful partnerships, and advancements in the field
                                of knitting technology.  <br></br><br></br>
                                I would like to express my heartfelt gratitude to Hitesh Sharma, the esteemed President of the
                                Congress, for consistently embodying the qualities of a true champion and leader. His unwavering
                                commitment has not only inspired but also paved the way for aspiring young entrepreneurs.<br></br><br></br>
                                <br></br><br></br>
                                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                            </p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className={styles.gridItem}>
                        <img className="img-fluid" src="https://www.hs-niederrhein.de/fileadmin/pool-ordner/bilder/Portraitfotos/FB07/Weber.jpg" alt="Image 2" />
                        <div className={styles.gridText}>
                            <h3>Marcus O. Weber - General Secretary IFKT</h3>
                            <p>
                                We are proud to cooperate internationally for more than 65 years since our first meeting in Austria in 1956. IFKT
                                (International Federation of Knitting Technologists) is an amicable non-profit association of professionals from the
                                knitting and neighbouring industries of various nations with the common goal of promoting interest in knitting and
                                other textile industries. A lively professional exchange between industries, research and education takes place in joint
                                congresses and technical discussions. <br></br><br></br>
                                The 51st IFKT Congress will take place for the first time on the American continent, opening up many new
                                perspectives. Congress President Hitesh Sharma&#39;s organisation and implementation is part of a long-standing tradition. I
                                wish all participants of the congress in presence and online much success in friendly networking and professional
                                exchange. <br></br><br></br>


                                Liebe Wirkerei, Strickerei Fachleute und globale Strickwarenhersteller <br></br><br></br>

                                Wir sind stolz auf internationaler Ebene seit über 65 Jahren zu kooperieren seit unserem ersten Meeting in Österreich
                                1956. IFKT (International Federation of Knitting Technologists) ist ein freundschaftlicher Zusammenschluss von
                                Fachleuten aus der Maschenindustrie und fachangrenzender Industrien verschiedener Nationen mit dem gemeinsamen
                                Ziel, das Interesse an der Maschentechnologie und anderen Textilbranchen zu fördern. In gemeinsamen Kongressen und
                                Fachgesprächen findet ein reger fachlicher Austausch zwischen Industrien, Forschung und Bildung statt.
                                Der 51. IFKT Kongress findet das erste Mal im amerikanischen Kontinent statt und eröffnet damit viele neue
                                Perspektiven. Der Tagungspräsident Hitesh Sharma reiht sich mit seiner Organisation und Durchführung in eine
                                langjährige Tradition ein. Ich wünsche allen Teilnehmern der Tagung in Präsenz und Online viel Erfolg beim
                                freundschaftlichen Networking und Fachaustausch.
                            </p>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className={styles.gridItem}>
                        <img className="img-fluid" src="https://www.knittingindustry.com/uploads/5694/new%20president.jpg" alt="Image 3" />
                        <div className={styles.gridText}>
                            <h3>Hitesh Kumar Sharma - President of IFKT NA</h3>
                            <p>
                                On behalf of IFKT-International Federation of Knitting Technologists-Germany, I am delighted to extend a warm
                                welcome to each and every one of you in 51 th international congress- Future of Knitting It is with great pleasure that we
                                gather here today to exchange knowledge, ideas, and experiences in this prestigious conference. This conference serves
                                as a platform for knitting experts, professionals, and enthusiasts from textile/knitting fields to come together and engage
                                in meaningful discussions, explore innovative solutions, and foster collaborations that will shape the future of our
                                industries in North America. <br></br><br></br>
                                Over the course of the conference, we have curated a diverse range of sessions, presentations, and keynote speeches that
                                cover a wide array of topics. Our esteemed speakers from global textiles universities and panelists bring with them a
                                wealth of expertise and insights, ensuring that you will gain valuable knowledge and perspectives throughout the event.
                                Furthermore, we encourage you to take full advantage of the networking textiles opportunities available in North
                                America Continent. This conference provides an ideal space for you to connect with like-minded individuals, textile &amp;
                                apparel manufacturers to expand your professional network, market job opportunities and potentially forge partnerships
                                that will propel your endeavors forward in textile field especially in knit wears. <br></br><br></br>
                                We would like to express our gratitude especially Deputy Mayor of Brampton-Harkirat Singh &amp;Regional Councillor
                                Gurpartap Singh Toor also to all our sponsors, industry partners, and volunteers. Without their support, this
                                conference would not have been possible. <br></br><br></br>
                                Once again, I extend my warmest welcome to all the participants. May this conference be a source of inspiration,
                                learning, new job opportunities, growth for each and every one of you. <br></br><br></br>
                                Thank you and enjoy the conference!

                            </p>
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
                <div className='gall' id={styles.gall}>
                    <Gallery></Gallery>
                </div>

                <h2 id={styles.registerhead}> Register Today to Attend!</h2>

                <RegistrationForm></RegistrationForm>

                <h2 id={styles.registerhead} className='hotels'>Accomodations</h2>
                <div className={styles.maps}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5104492603996!2d-79.69492012360756!3d43.74149577109805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c5459f0685f%3A0x43f70224dfcf1d36!2sHoliday%20Inn%20Express%20%26%20Suites%20Brampton%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sca!4v1705368034901!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5104492603996!2d-79.69492012360756!3d43.74149577109805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c5487825a79%3A0xed9be7e8c2687a4!2sMonte%20Carlo%20Inn%20-%20Brampton%20Suites!5e0!3m2!1sen!2sca!4v1705368071802!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
