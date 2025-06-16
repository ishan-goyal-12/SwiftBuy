'use client'
import React, { useState } from 'react'
import ProductCardNew from './ProductCardNew'
import Navbar from './Navbar'


const HomePage = () => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (product) => {
        setCartCount(prev => prev + 1);
    };

    const flashProducts = [
        {
            id: 1,
            title: "Wireless Headphones",
            description: "Premium quality wireless headphones with noise cancellation",
            originalPrice: 199.99,
            salePrice: 99.99,
            image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 2,
            title: "Wireless Headphones",
            description: "Premium quality wireless headphones with noise cancellation",
            originalPrice: 199.99,
            salePrice: 99.99,
            image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 3,
            title: "Wireless Headphones",
            description: "Premium quality wireless headphones with noise cancellation",
            originalPrice: 199.99,
            salePrice: 99.99,
            image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        }
    ];

    return (
        <div>
            <Navbar cartCount={cartCount} />
            {/* Search Bar */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-lg mx-auto">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</div>
                        <input
                            type="text"
                            placeholder="Search for flash deals, products..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                                Flash Sales That Won't Last!
                            </h1>
                            <p className="text-xl mb-8">
                                Discover incredible deals with limited-time offers. Save up to 70% on premium products.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 text-gray-900">
                            <h3 className="text-2xl font-bold mb-4">Get Flash Sale Alerts</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                />
                                <textarea
                                    placeholder="What products are you interested in?"
                                    rows="3"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                ></textarea>
                                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
                                    Subscribe to Alerts
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flash Products */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">⚡ Flash Sale Now Live!</h2>
                        <p className="text-lg text-gray-600">Limited time offers - grab them before they're gone!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {flashProducts.map((product) => (
                            <ProductCardNew
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Key Selling Points */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Lightning Fast Deals</h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Our flash sales happen quickly and offer massive savings. With real-time countdown timers,
                                you'll never miss a deal. We update our sales multiple times throughout the day to bring
                                you the best prices on quality products.
                            </p>
                            <div className="flex items-center">
                                <div className="mr-3 scale-110">⚡️</div>
                                <span className="text-lg font-semibold text-red-800">New deals every hour!</span>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Fast deals"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="lg:order-2">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Guaranteed Quality & Security</h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Every product comes with our quality guarantee and secure payment processing.
                                We partner with trusted brands and verified sellers to ensure you get authentic
                                products at unbeatable prices.
                            </p>
                            <div className="flex items-center">
                                <div className="mr-3 scale-110">🛡️</div>
                                <span className="text-lg font-semibold text-blue-800">100% secure shopping</span>
                            </div>
                        </div>
                        <div className="lg:order-1">
                            <img
                                src="https://images.pexels.com/photos/4968639/pexels-photo-4968639.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Quality guarantee"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage