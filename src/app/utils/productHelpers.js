export const calculateSalePrice = (originalPrice) => {
    const discountPercent = Math.floor(Math.random() * 41) + 30;
    const salePrice = originalPrice * (1 - discountPercent / 100);
    return Math.round(salePrice * 100) / 100;
};

export const transformProduct = (apiProduct) => {
    const salePrice = calculateSalePrice(apiProduct.price);

    return {
        id: apiProduct.id,
        title: apiProduct.title,
        description: apiProduct.description,
        fullDescription: apiProduct.description,
        originalPrice: apiProduct.price,
        salePrice: salePrice,
        image: Array.isArray(apiProduct.images) && apiProduct.images.length > 0 ? apiProduct.images[0] : '',
        category: apiProduct.category ? apiProduct.category : '',
    };
};
