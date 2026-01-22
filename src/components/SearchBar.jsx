import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { mainCategories } from '../data/categoriesData';
import './SearchBar.css';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    // Popular searches
    const popularSearches = [
        { text: 'Business Cards', link: '/category/business-cards' },
        { text: 'Flyers', link: '/category/postcards-print' },
        { text: 'Banners', link: '/category/signs-banners-posters' },
        { text: 'T-Shirts', link: '/category/clothing-bags' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (searchQuery.trim()) {
            const results = [];
            const query = searchQuery.toLowerCase();

            // Search through categories and products
            mainCategories.forEach(category => {
                // Check category name
                if (category.name.toLowerCase().includes(query)) {
                    results.push({
                        type: 'category',
                        title: category.name,
                        link: `/category/${category.slug}`,
                        icon: category.icon
                    });
                }

                // Check subcategories and items
                category.subcategories.forEach(subcat => {
                    subcat.items.forEach(item => {
                        if (item.toLowerCase().includes(query)) {
                            results.push({
                                type: 'product',
                                title: item,
                                category: category.name,
                                link: `/category/${category.slug}/${item.toLowerCase().replace(/ /g, '-')}`,
                                icon: category.icon
                            });
                        }
                    });
                });
            });

            setSearchResults(results.slice(0, 8)); // Limit to 8 results
            setShowDropdown(true);
        } else {
            setSearchResults([]);
            setShowDropdown(false);
        }
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setShowDropdown(false);
        }
    };

    return (
        <div className="search-bar-wrapper" ref={searchRef}>
            <form onSubmit={handleSearch} className="search-form">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search for products, designs, or inspiration..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                />
            </form>

            {showDropdown && (
                <div className="search-dropdown">
                    {searchQuery.trim() === '' ? (
                        <div className="search-section">
                            <h4 className="search-section-title">Popular Searches</h4>
                            <ul className="search-list">
                                {popularSearches.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.link}
                                            className="search-item"
                                            onClick={() => {
                                                setShowDropdown(false);
                                                setSearchQuery('');
                                            }}
                                        >
                                            <FiSearch className="item-icon" />
                                            <span>{item.text}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : searchResults.length > 0 ? (
                        <div className="search-section">
                            <h4 className="search-section-title">Search Results</h4>
                            <ul className="search-list">
                                {searchResults.map((result, index) => (
                                    <li key={index}>
                                        <Link
                                            to={result.link}
                                            className="search-item"
                                            onClick={() => {
                                                setShowDropdown(false);
                                                setSearchQuery('');
                                            }}
                                        >
                                            <span className="result-icon">{result.icon}</span>
                                            <div className="result-info">
                                                <span className="result-title">{result.title}</span>
                                                {result.category && (
                                                    <span className="result-category">in {result.category}</span>
                                                )}
                                            </div>
                                            <span className="result-type">{result.type}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to={`/search?q=${encodeURIComponent(searchQuery)}`}
                                className="view-all-link"
                                onClick={() => {
                                    setShowDropdown(false);
                                }}
                            >
                                View all results for "{searchQuery}"
                            </Link>
                        </div>
                    ) : (
                        <div className="search-section">
                            <p className="no-results">No results found for "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
