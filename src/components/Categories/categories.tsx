import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '../../services/ProductService';
import type { Demo } from '../../types/types';
import { Categoria } from '../../types/Categoria';
import { CategoriaService } from '../../services/CategoriaService';

const Categories = () => {
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshData, setRefreshData] = useState(false);


    const carouselResponsiveOptions = [
        {
            breakpoint: '1900px',
            numVisible: 5,
            numScroll: 5
        },
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 4
        },
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const fetchCategorias = async () => {
          const categorias = await CategoriaService.getCategorias();
          setCategoria(categorias);
          setIsLoading(false);
        };
    
        fetchCategorias();
      }, [refreshData]);
    
    const carouselItemTemplate = (categoria: Categoria) => {
        return (
            <div className="category-card">
                <div className="card-content">
                    <img src={`/demo/images/category/${categoria.urlImagen}`} alt={categoria.nombreCategoria} className="category-image" />
                    <h4 className="category-name">{categoria.nombreCategoria}</h4>
                </div>
            </div>
        );
    };
    
    const handleVerTodasCategorias = () => {
       
    };

    return (
        <div className="grid p-fluid">
            <div className="col-12">
                <div className="card">
                    <h5>Browse By Category</h5>
                    <Carousel
                        value={categoria}
                        numVisible={5}
                        numScroll={5}
                        responsiveOptions={carouselResponsiveOptions}
                        itemTemplate={carouselItemTemplate}
                    />
                </div>
            </div>
            <div className="col-12 mt-3">
                <Button label="Ver todas las categorías" onClick={handleVerTodasCategorias} />
            </div>
        </div>
    );
};

export default Categories;
