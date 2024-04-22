import React from 'react';
import { Link } from 'react-router-dom'; 

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Navbar */}
            <nav className="navbar">
                <h1 className="logo">ISET GAFSA</h1>
                <div className="nav-buttons">
                    <button className="nav-button">Contact</button>
                    <Link to="/login"><button className="nav-button">Sign In</button></Link>
                </div>
            </nav>
            
            {/* Hero Section */}
            <div className="hero">
                <h1 className="hero-title">Welcome to ISET GAFSA</h1>
                <p className="hero-text">We Make your life easy , Just trust us.</p>
                <Link to="/ReclamationForm"><button className="hero-button">Make Your Reclamation</button></Link> {/* Replace the anchor tag with Link component */}
            </div>
            
            {/* Footer */}
            <footer className="footer">
                &copy; 2024 ISET GAFSA. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
