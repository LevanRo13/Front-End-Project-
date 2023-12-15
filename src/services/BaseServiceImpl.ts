import BaseService from "./BaseService";

class BaseServiceImpl<T> extends BaseService<T> {
   
   
    async getAll(): Promise<T[]> {
        const response = await fetch(this.baseUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data as T[];
    }

    async getOne(id: number): Promise<T | null> {
        const response = await fetch(`${this.baseUrl}/${id}`,{
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data as T;
        }
        return null;
    }

    async create(entity: T): Promise<T> {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entity),
        });
        const data = await response.json();
        return data as T;
    }

    async update(id: number, entity: T): Promise<T | null> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entity),
        });
        if (response.ok) {
            const data = await response.json();
            return data as T;
        }
        return null;
    }

    async delete(id: number): Promise<boolean> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
        });
        return response.ok;
    }
}

export default BaseServiceImpl;
