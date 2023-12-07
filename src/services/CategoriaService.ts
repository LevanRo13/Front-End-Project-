import { Categoria } from "../types/Categoria";


const BASE_URL = 'http://localhost:8080';

export const CategoriaService = {

    
    getCategorias: async (): Promise<Categoria[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/categorias`,{
            headers: {
                'Content-Type': 'application/json',         //tipo de contenido
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`, //AuthData es el token
            },  
        });
        const data = await response.json();
        return data;
    },

    
    getCategoria: async (id:number): Promise<Categoria> => {

        const response = await fetch (`${BASE_URL}/api/v1/categorias/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },  
        });
        const data = await response.json();
        return data;
        
    },

    createCategoria:async (categoria:Categoria):Promise<Categoria> => {

        const response = await fetch(`${BASE_URL}/api/v1/categorias/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },
            body: JSON.stringify(categoria)
        });

        const data = await response.json();
        return data;
        
    },

    updateCategoria: async (id: number, categoria:Categoria): Promise<Categoria> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/categorias/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },
            body: JSON.stringify(categoria)
        });

        const data = await response.json();
        return data;
    },

    

    deleteCategoria: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/categorias/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },
        
        });
    }
    

  
}
