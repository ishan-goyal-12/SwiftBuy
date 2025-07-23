const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const api = {
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