import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                setResponseMessage('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            setResponseMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="contact-us-container">
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>
            <section className="contact-content">
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
            </section>
        </div>
    );
};

export default ContactUs;
