// Helper function to calculate sale price (20-50% discount)
export const calculateSalePrice = (originalPrice) => {
    const discountPercent = Math.floor(Math.random() * 31) + 20;
    const salePrice = originalPrice * (1 - discountPercent / 100);
    return Math.round(salePrice * 100) / 100;
};

// Helper function to transform API product to our format
export const transformProduct = (apiProduct) => {
    const salePrice = calculateSalePrice(apiProduct.price);
    const saleEndTime = new Date().getTime() + (Math.floor(Math.random() * 12) + 1) * 60 * 60 * 1000;

    return {
        id: apiProduct.id,
        title: apiProduct.title,
        description: apiProduct.description,
        fullDescription: apiProduct.description,
        originalPrice: apiProduct.price,
        salePrice: salePrice,
        image: apiProduct.image,
        category: apiProduct.category,
        rating: apiProduct.rating,
        saleEndTime: saleEndTime
    };
};

// Helper function to capitalize category names
export const formatCategoryName = (category) => {
    return category
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};