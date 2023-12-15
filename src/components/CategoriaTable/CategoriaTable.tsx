import { useEffect, useState } from "react";
import { Categoria } from "../../types/Categoria";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import CategoriaModal from "../CategoriaModal/CategoriaModal";
import { ArrowDown, ArrowUp, Pencil } from "react-bootstrap-icons";
import CategoriaService from "../../services/CategoriaService";

const CategoriaTable = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      const categorias = await CategoriaService.getAll();
      setCategorias(categorias);
      setIsLoading(false);
    };

    fetchCategorias();
  }, [refreshData]);

  console.log(JSON.stringify(categorias, null, 2));

  const initializeNewCategoria = (): Categoria => {
    return {
      id: 0,
      nombreCategoria: "",
      urlImagen: "",
      fechaAlta: new Date(),
      fechaBaja: null,

    };
  };

  const [categoria, setCategoria] = useState<Categoria>(
    initializeNewCategoria
  );

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  const handleClick = (
    newTitle: string,
    categoria: Categoria,
    modal: ModalType
  ) => {
    setTitle(newTitle);
    setModalType(modal);
    setCategoria(categoria);
    setShowModal(true);
  };

  return (
    <div className="m-3">
      <Button
        onClick={() => handleClick("Nueva Categoría", 
          initializeNewCategoria(), ModalType.CREATE)}>
        Nueva Categoría
      </Button>

      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha Alta</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id} className={categoria.fechaBaja ? 'table-danger' : ''}>
                <td>{categoria.nombreCategoria}</td>
                <td>{categoria.fechaAlta.toString()}</td>
                 <td> <img src={categoria.urlImagen} alt={categoria.nombreCategoria} style={{width: '50px'}} /> </td>
                <td>
                <Button variant={"light"} onClick={() => handleClick("Editar categoria", 
                categoria, ModalType.UPDATE)}>
                      <Pencil color='orange'/></Button>
                          {categoria.fechaBaja !== null && (
                                <Button variant={"light"} onClick={() => handleClick("Dar de alta categoria", 
                                   categoria, ModalType.RESTORE)}><ArrowUp color='green'/>
                                </Button>
                            )}
                          {categoria.fechaBaja === null && (
                                <Button variant={"light"} onClick={() => handleClick("Dar de baja categoria", 
                                  categoria, ModalType.DELETE)}><ArrowDown color='red'/>
                                </Button>
                            )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <CategoriaModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          categoria={categoria}
          refreshData={setRefreshData}
        />
      )}
    </div>
  );
};

export default CategoriaTable;
