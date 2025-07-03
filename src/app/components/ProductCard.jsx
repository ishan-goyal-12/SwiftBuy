import React from 'react';
import CountdownTimer from './CountdownTimer.jsx';

function ProductCard({ product, addToCart }) {
    const discountPercent = Math.round(
        ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
    );

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                    -{discountPercent}%
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-1 sm:line-clamp-1 md:line-clamp-1 lg:line-clamp-1 xl:line-clamp-1 2xl:line-clamp-1 max-[640px]:line-clamp-3">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-red-600">${product.salePrice}</span>
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                </div>

                <div className="mb-3">
                    <CountdownTimer endTime={12 * 60000 * 60 * 60 * 1000} />
                </div>

                <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-red-600 text-white py-2 px-4 rounded-md font-medium cursor-pointer"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;