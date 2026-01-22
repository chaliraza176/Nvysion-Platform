import React from 'react';
import { FiCheckCircle, FiSmile, FiHeadphones } from 'react-icons/fi';
import './TrustFeatures.css';

const TrustFeatures = () => {
    const features = [
        {
            icon: <FiCheckCircle />,
            title: 'Custom-printed products',
            description: 'Professional quality, delivered fast'
        },
        {
            icon: <FiSmile />,
            title: 'Create with more confidence',
            description: '100% satisfaction guaranteed'
        },
        {
            icon: <FiHeadphones />,
            title: 'Live support',
            description: 'Expert help when you need it'
        }
    ];

    return (
        <section className="trust-features">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item scale-in">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustFeatures;
