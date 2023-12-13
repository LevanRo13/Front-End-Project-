import { Categoria } from "../types/Categoria";

const BASE_URL = 'http://localhost:9000/api/v1';

export const CategoriaService = {
    getCategorias: async (): Promise<Categoria[]> => {
        const response = await fetch(`${BASE_URL}/Categoria`,{
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        return data;
    },

    getCategoria: async (id: number): Promise<Categoria> => {
        const response = await fetch(`${BASE_URL}/Categoria/${id}`);
        const data = await response.json();
        return data;
    },

    createCategoria: async (categoria: Categoria): Promise<Categoria> => {
        const response = await fetch(`${BASE_URL}/Categoria`, {
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
        const response = await fetch(`${BASE_URL}/Categoria/${id}`, {
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
        await fetch(`${BASE_URL}/Categoria/${id}`, {
            method: "DELETE"
        });
    }
}
