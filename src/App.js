import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Donation from './pages/Donation';
import Register from './pages/Register'; 
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/register">Login</Link></li>
                        <li><Link to="/donation">Donation</Link></li>
                    </ul>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/donation" element={<Donation />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
