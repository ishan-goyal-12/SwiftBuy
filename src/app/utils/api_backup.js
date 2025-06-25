const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const api = {
    // Get all products
    getAllProducts: async () => {
        try {
            const response = await fetch(`${BASE_URL}/products`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    // Get single product by ID
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

    // Get all categories
    getCategories: async () => {
        try {
            const response = await fetch(`${BASE_URL}/categories`);
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    // Get products by category (by category id)
    getProductsByCategory: async (categoryId) => {
        try {
            const response = await fetch(`${BASE_URL}/categories/${categoryId}/products`);
            if (!response.ok) {
                throw new Error('Failed to fetch products by category');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products by category:', error);
            throw error;
        }
    }
};