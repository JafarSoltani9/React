import React from 'react';
import MyNavbar from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';

function About() {
    return (
        <div>
            <MyNavbar />
            <Container className="mt-5">
                <h1>About Us</h1>
                <p>
                    Welcome to our website! We are dedicated to providing the best service and products to our customers. Our team is passionate about technology and design, and we strive to bring the latest and greatest to our audience.
                </p>
                <p>
                    Follow us on social media to stay updated with our latest news and offerings.
                </p>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-4">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-4">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-4">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default About;
