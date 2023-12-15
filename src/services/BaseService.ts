abstract class BaseService<T> {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    abstract getAll(): Promise<T[]>;
    abstract getOne(id: number): Promise<T | null>;
    abstract create(entity: T): Promise<T>;
    abstract update(id: number, entity: T): Promise<T | null>;
    abstract delete(id: number): Promise<boolean>;
}

export default BaseService;