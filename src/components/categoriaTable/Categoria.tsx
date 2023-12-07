import { useEffect, useState } from "react";
import { Categoria } from "../../types/Categoria";
import { CategoriaService } from "../../services/CategoriaService";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import CategoriaModal from "../CategoriaModal/CategoriaModal";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";

const CategoriaTable = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      const categorias = await CategoriaService.getCategorias();
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
      descripcionCategoria: "",
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
    cat: Categoria,
    modal: ModalType
  ) => {
    setTitle(newTitle);
    setModalType(modal);
    setCategoria(cat);
    setShowModal(true);
  };

  return (
    <div className="m-3">
      <Button
        onClick={() =>
          handleClick("Nueva Categoría", initializeNewCategoria(), ModalType.CREATE)
        }
      >
        Nueva Categoría
      </Button>

      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.nombreCategoria}</td>
                <td>{categoria.descripcionCategoria}</td>
                <td>
                  <EditButton
                    onClick={() =>
                      handleClick("Editar categoría", categoria, ModalType.UPDATE)
                    }
                  />
                </td>
                <td>
                  <DeleteButton
                    onClick={() =>
                      handleClick("Borrar categoría", categoria, ModalType.DELETE)
                    }
                  />
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
          cat={categoria}
          refreshData={setRefreshData}
        />
      )}
    </div>
  );
};

export default CategoriaTable;
