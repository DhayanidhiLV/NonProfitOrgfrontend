import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header
                className="hero-section"
                style={{
                    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww")',
                }}
            >
                <div className="overlay">
                    <h1>Welcome to Dhaya Non-Profit Organization</h1>
                    <p>Making the world a better place, one step at a time.</p>
                </div>
            </header>
            <section className="about-us">
                <h2>About Us</h2>
                <p>
                    Our mission is to bring positive change to the world. We focus on helping the less fortunate, providing education, and preserving the environment.
                </p>
            </section>
            <section className="our-impact">
                <h2>Our Impact</h2>
                <div className="impact-cards">
                    <div className="card">
                        <img src="https://jbdondolo.org/wp-content/uploads/2023/08/child-is-holding-glass-with-child-holding-it.jpg" alt="Impact 1" />
                        <h3>Community Development</h3>
                        <p>We work with local communities to build sustainable solutions for growth and development.</p>
                    </div>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLI0AW3OsLMYOciI0SzvC-3ozaXu81yvdMp0bLOPI2OtBebNU6XXWESACfZDpeIrjIRZM&usqp=CAU" alt="Impact 2" />
                        <h3>Education for All</h3>
                        <p>We provide educational resources and support to children in need around the world.</p>
                    </div>
                    <div className="card">
                        <img src="https://www.indiacelebrating.com/wp-content/uploads/How-to-save-our-Environment.jpg" alt="Impact 3" />
                        <h3>Environmental Protection</h3>
                        <p>Our organization is dedicated to protecting the environment through various initiatives.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
