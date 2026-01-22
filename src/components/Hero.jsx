import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="hero-content fade-in">
                    <div className="hero-box">
                        <h1 className="hero-title">
                            If you need it, we print it.
                        </h1>
                        <p className="hero-subtitle">
                            Custom products with professional quality. Fast, reliable, and affordable.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn btn-accent btn-large">
                                Try designs for $10
                            </button>
                            <button className="btn btn-secondary btn-large">
                                Browse Services
                            </button>
                        </div>

                        <div className="hero-features">
                            <div className="hero-feature">
                                <div className="feature-icon">✓</div>
                                <span>100% satisfaction guaranteed</span>
                            </div>
                            <div className="hero-feature">
                                <div className="feature-icon">✓</div>
                                <span>2-day shipping available</span>
                            </div>
                            <div className="hero-feature">
                                <div className="feature-icon">✓</div>
                                <span>Professional quality</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
