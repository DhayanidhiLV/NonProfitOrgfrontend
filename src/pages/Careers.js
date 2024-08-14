import React from 'react';
import './Careers.css';

const Careers = () => {
    return (
        <div className="careers-container">
            <header className="careers-header">
                <h1>Careers</h1>
            </header>
            <section className="careers-content">
                <div className="job-opening">
                    <h2>Program Coordinator</h2>
                    <p>
                        As a Program Coordinator, you will oversee various projects and initiatives aimed at
                        making a positive impact in the community.
                    </p>
                    <div className="job-details">
                        <p><strong>Responsibilities:</strong> Manage project timelines, coordinate with team members, and report progress.</p>
                        <p><strong>Requirements:</strong> 3+ years of experience, excellent organizational skills.</p>
                    </div>
                </div>
                <div className="job-opening">
                    <h2>Volunteer Manager</h2>
                    <p>
                        The Volunteer Manager will recruit, train, and manage volunteers to support our various
                        programs and events.
                    </p>
                    <div className="job-details">
                        <p><strong>Responsibilities:</strong> Recruit and train volunteers, organize volunteer events, and manage schedules.</p>
                        <p><strong>Requirements:</strong> 2+ years of experience, strong interpersonal skills.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
