import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { mainCategories } from '../data/categoriesData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ExploreCategories.css';

const ExploreCategories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="explore-categories">
            <div className="container">
                <h2 className="section-title">Explore all categories</h2>
                <p className="section-subtitle">Click any category to see our full range of products</p>

                <Slider {...settings}>
                    {mainCategories.map((category) => (
                        <div key={category.id} className="category-slide">
                            <Link
                                to={`/category/${category.slug}`}
                                className="category-card"
                            >
                                <div
                                    className="category-circle"
                                    style={{ background: category.gradient }}
                                >
                                    <span className="category-icon">{category.icon}</span>
                                </div>
                                <p className="category-name">{category.name}</p>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ExploreCategories;
