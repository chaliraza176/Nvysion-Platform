import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { mainCategories } from '../data/categoriesData';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState({ categories: [], products: [] });

    useEffect(() => {
        if (query.trim()) {
            const categoryResults = [];
            const productResults = [];
            const q = query.toLowerCase();

            mainCategories.forEach(category => {
                if (category.name.toLowerCase().includes(q)) {
                    categoryResults.push(category);
                }

                category.subcategories.forEach(subcat => {
                    subcat.items.forEach(item => {
                        if (item.toLowerCase().includes(q)) {
                            productResults.push({
                                name: item,
                                category: category.name,
                                categorySlug: category.slug,
                                slug: item.toLowerCase().replace(/ /g, '-'),
                                icon: category.icon,
                                gradient: category.gradient
                            });
                        }
                    });
                });
            });

            setResults({ categories: categoryResults, products: productResults });
        }
    }, [query]);

    const totalResults = results.categories.length + results.products.length;

    return (
        <div className="search-results-page fade-in">
            <div className="container">
                <div className="search-header">
                    <h1>Search Results for "{query}"</h1>
                    <p className="result-count">{totalResults} results found</p>
                </div>

                {totalResults === 0 ? (
                    <div className="no-results-section">
                        <div className="no-results-icon">🔍</div>
                        <h2>No results found</h2>
                        <p>Try searching with different keywords or browse our categories below.</p>
                        <Link to="/" className="btn btn-primary">Browse All Products</Link>
                    </div>
                ) : (
                    <div className="results-content">
                        {/* Categories Section */}
                        {results.categories.length > 0 && (
                            <div className="results-section">
                                <h2 className="section-title">Categories</h2>
                                <div className="categories-grid">
                                    {results.categories.map(category => (
                                        <Link
                                            key={category.id}
                                            to={`/category/${category.slug}`}
                                            className="category-result-card"
                                        >
                                            <div className="card-icon" style={{ background: category.gradient }}>
                                                <span>{category.icon}</span>
                                            </div>
                                            <h3>{category.name}</h3>
                                            <p>Browse all {category.name.toLowerCase()}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Products Section */}
                        {results.products.length > 0 && (
                            <div className="results-section">
                                <h2 className="section-title">Products</h2>
                                <div className="products-grid">
                                    {results.products.map((product, index) => (
                                        <Link
                                            key={index}
                                            to={`/category/${product.categorySlug}/${product.slug}`}
                                            className="product-result-card"
                                        >
                                            <div className="card-visual" style={{ background: product.gradient }}>
                                                <span className="card-icon-large">{product.icon}</span>
                                            </div>
                                            <div className="card-details">
                                                <h4>{product.name}</h4>
                                                <p className="product-category">in {product.category}</p>
                                                <p className="product-price">Starting at $12.99</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
