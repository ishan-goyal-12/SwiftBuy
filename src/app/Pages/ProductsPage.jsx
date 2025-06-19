'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { api } from '../utils/api.js';
import { transformProduct, formatCategoryName } from '../utils/productHelpers.js';
import Navbar from '../components/Navbar.jsx';

function ProductsPage({ addToCart }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State to manage cart count
    const [cartCount, setCartCount] = useState(0);

    const addToCarts = (product) => {
        setCartCount(prev => prev + 1);
    };


    // Fetch all products and categories on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [productsData, categoriesData] = await Promise.all([
                    api.getAllProducts(),
                    api.getCategories()
                ]);

                const transformedProducts = productsData.map(transformProduct);
                setProducts(transformedProducts);
                setCategories(categoriesData);
            } catch (err) {
                setError('Failed to load products. Please try again later.');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // This useEffect runs only once when the component mounts (loads when page refreshes)

    // Filter products by category
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const faqs = [
        {
            question: "How long do flash sales last?",
            answer: "Flash sales typically last between 1-24 hours. Each product has a countdown timer showing exactly when the deal ends."
        },
        {
            question: "Are the products authentic?",
            answer: "Yes, SwiftBuy only work with verified sellers and authorized distributors to ensure all products are 100% authentic."
        },
        {
            question: "What if I miss a flash sale?",
            answer: "Don't worry! We have new flash sales starting throughout the day. Subscribe to our alerts to never miss a deal."
        },
        {
            question: "Is there a return policy?",
            answer: "Yes, we offer a 30-day return policy on all products. Items must be in original condition with all packaging."
        },
        {
            question: "How fast is shipping?",
            answer: "We offer free standard shipping (5-7 days) and express shipping (2-3 days) for an additional fee."
        }
    ];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center text-lg text-gray-600">
                Loading amazing deals...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-lg text-red-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar cartCount={cartCount} />
            {/* Heading Section */}
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Flash Sale Products
                    </h1>
                    <p className="text-xl">
                        Discover amazing deals with limited-time offers. Save up to 70% on premium products!
                    </p>
                </div>
            </div>

            {/* Category Selection */}
            <div className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'all'
                                ? 'bg-purple-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-purple-100'
                                }`}
                        >
                            All Products ({products.length})
                        </button>
                        {categories.map((category) => {
                            const count = products.filter(p => p.category === category).length;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-purple-100'
                                        }`}
                                >
                                    {formatCategoryName(category)} ({count})
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-lg text-gray-600">No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="cursor-pointer">
                                <ProductCard
                                    product={product}
                                    addToCart={addToCarts}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* FAQ Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;