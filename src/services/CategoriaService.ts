
import { Categoria } from "../types/Categoria";
import BaseServiceImpl from "./BaseServiceImpl";

const BASE_URL = 'http://localhost:9000/api/v1/Categoria';

class CategoriaService extends BaseServiceImpl<Categoria> {
    constructor() {
        super(BASE_URL);
    }

}

export default new CategoriaService();