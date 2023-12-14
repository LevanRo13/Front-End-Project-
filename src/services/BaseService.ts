
class BaseService<T> {
    protected baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getAll(): Promise<T[]> {
        const response = await fetch(this.baseUrl);
        const data = await response.json();
        return data as T[];
    }

    async getById(id: string): Promise<T | null> {
        const response = await fetch(`${this.baseUrl}/${id}`);
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

    async update(id: string, entity: T): Promise<T | null> {
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

    async delete(id: string): Promise<boolean> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
        });
        return response.ok;
    }
}

export default BaseService;
