export type Categoria = {
    id: number;
    nombreCategoria: string;
    urlImagen: string;
    fechaAlta: Date;
    fechaBaja: Date | null;
}