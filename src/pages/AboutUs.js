import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <section className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to extend a helping hand to the poor and financially disadvantaged children, support orphanages, and care for abandoned elderly individuals. We strive to collect donations to aid those in need, making a tangible difference in their lives.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Our History</h2>
                    <p>
                        Our journey began in 2020 during the challenging times of the COVID-19 pandemic. Since then, we have tirelessly worked to assist countless individuals, collecting donations and forging partnerships with numerous companies to further our cause.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Our Team</h2>
                    <p>
                        Our team started with three passionate individuals—Dhaya, Digeesh, and Easwar. Dhaya Sir, known for his kindness and dedication, was the driving force behind the creation of our NPO. Over time, our team has grown, with representatives now present in every district of India, united in our mission to make a positive impact.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
