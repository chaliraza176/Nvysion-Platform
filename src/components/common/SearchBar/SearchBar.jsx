import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useDebounce } from '../../../hooks';
import './SearchBar.css';

/**
 * SearchBar Component
 * Reusable search input with navigation
 */
const SearchBar = ({ placeholder = 'Search products, templates...', onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const debouncedQuery = useDebounce(query, 300);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            if (onSearch) {
                onSearch(query);
            } else {
                navigate(`/search?q=${encodeURIComponent(query)}`);
            }
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <div className="search-wrapper">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchBar;
