import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => {
    return (
        <section className="promo-banner-section">
            <div className="promo-banner-content">
                <div className="promo-banner-text">
                    <h2 className="promo-banner-title">Create it for free. Print it for $10.</h2>
                    <p className="promo-banner-subtitle">
                        Try our logo maker and get professional designs in minutes
                    </p>
                </div>
                <button className="btn btn-accent btn-large">
                    Create a logo
                </button>
            </div>
        </section>
    );
};

export default PromoBanner;
