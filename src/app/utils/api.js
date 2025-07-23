const BASE_URL = 'https://dummyjson.com';

export const api = {
    getAllProducts: async () => {
        try {
            const response = await fetch(`${BASE_URL}/products`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            return data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    },

    getCategories: async () => {
        try {
            const response = await fetch(`${BASE_URL}/products/categories`);
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },
};
