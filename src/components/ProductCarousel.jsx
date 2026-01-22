import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCarousel.css';

const ProductCarousel = ({ title, products, type = 'rectangular' }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: type === 'circular' ? 8 : 4,
        slidesToScroll: type === 'circular' ? 4 : 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: type === 'circular' ? 6 : 3,
                    slidesToScroll: type === 'circular' ? 3 : 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: type === 'circular' ? 4 : 2,
                    slidesToScroll: type === 'circular' ? 2 : 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: type === 'circular' ? 3 : 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    if (type === 'circular') {
        return (
            <section className="product-carousel circular-carousel">
                <div className="container">
                    <h2 className="carousel-title">{title}</h2>
                    <Slider {...settings}>
                        {products.map((product, index) => (
                            <div key={index} className="carousel-item">
                                <div className="circular-product-card">
                                    <div className="circular-icon" style={{ background: product.gradient }}>
                                        <span className="icon-emoji">{product.icon}</span>
                                    </div>
                                    <p className="circular-label">{product.name}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }

    return (
        <section className="product-carousel rectangular-carousel">
            <div className="container">
                <h2 className="carousel-title">{title}</h2>
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <div key={index} className="carousel-item">
                            <div className="rectangular-product-card">
                                <div className="product-image-wrapper">
                                    <div
                                        className="product-image"
                                        style={{ background: product.gradient }}
                                    >
                                        <span className="product-emoji">{product.icon}</span>
                                    </div>
                                    {product.badge && (
                                        <div className="product-badge">{product.badge}</div>
                                    )}
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    {product.price && (
                                        <p className="product-price">Starting at {product.price}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProductCarousel;
