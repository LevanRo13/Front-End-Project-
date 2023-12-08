import { Categoria } from "../types/Categoria";

const BASE_URL = 'https://localhost:8080';

export const CategoriaService = {
    getCategorias: async (): Promise<Categoria[]> => {
        const response = await fetch(`${BASE_URL}/categories`);
        const data = await response.json();
        return data;
    },

    getCategoria: async (id: number): Promise<Categoria> => {
        const response = await fetch(`${BASE_URL}/categories/${id}`);
        const data = await response.json();
        return data;
    },

    createCategoria: async (categoria: Categoria): Promise<Categoria> => {
        const response = await fetch(`${BASE_URL}/categories`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        });

        const data = await response.json();
        return data;
    },

    updateCategoria: async (id: number, categoria: Categoria): Promise<Categoria> => {
        const response = await fetch(`${BASE_URL}/categories/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        });

        const data = await response.json();
        return data;
    },

    deleteCategoria: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/categories/${id}`, {
            method: "DELETE"
        });
    }
}
