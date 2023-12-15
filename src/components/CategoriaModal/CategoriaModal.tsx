import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { toast } from 'react-toastify';


import { ModalType } from "../../types/ModalType";
import { Categoria } from "../../types/Categoria";
import CategoriaService from "../../services/CategoriaService";

type CategoriaModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  categoria: Categoria;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoriaModal: React.FC<CategoriaModalProps> = ({
  show,
  onHide,
  title,
  modalType,
  categoria,
  refreshData,
}) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categorias = await CategoriaService.getAll();
        setCategorias(categorias);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  const formik = useFormik({
    initialValues: categoria,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (formData: Categoria) => handleSave(formData),
  });

  
  const handleSave = async (formData: Categoria) => {
    try {
      if (modalType === ModalType.CREATE) {
        await CategoriaService.create(formData);
      } else if (modalType === ModalType.UPDATE) {
        await CategoriaService.update(formData.id!, formData);
      }

      toast.success(modalType === ModalType.CREATE ? "Categoria Creada" : "Categoria Actualizada", {
        position: "top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error("Error saving categoria:", error);
      toast.error('Ha ocurrido un error');
    }
  };

  const handleDelete = async () => {
    try {
      if (categoria) {
        // Actualizar la fecha de baja
        categoria.fechaBaja = new Date();
        await CategoriaService.update(categoria.id!, categoria);
        toast.success("Categoria dada de baja con éxito", {
          position: "top-center",
        });

        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error deleting categoria:", error);
      toast.error("Ha ocurrido un error al eliminar la categoria");
    }
  };

  const handleRestore = async () => {
    try {
      if (categoria) {
        categoria.fechaBaja= null;
        await CategoriaService.update(categoria.id!, categoria);
        toast.success("Categoría restaurada con éxito", {
          position: "top-center",
        });

        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error restoring categoria:", error);
      toast.error("Ha ocurrido un error al restaurar la categoría");
    }
  };

  return (
    <>
      {modalType === ModalType.DELETE && (
        <Modal show={show} onHide={onHide} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Está seguro que desea dar de baja la categoría 
              <br /> <strong>{categoria.nombreCategoria}</strong>?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Dar de baja
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {modalType === ModalType.RESTORE && (
        <Modal show={show} onHide={onHide} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> ¿Está seguro que desea dar de alta la categoria
              <br /> <strong> {categoria.nombreCategoria} </strong> ?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleRestore}>
              Dar de alta
            </Button>
          </Modal.Footer>
        </Modal>
      )}

{modalType !== ModalType.DELETE && modalType !== ModalType.RESTORE && (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={formik.handleSubmit}>

          <Form.Group controlId="formNombreCategoria">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombreCategoria"
              type="text"
              value={formik.values.nombreCategoria || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.nombreCategoria && formik.touched.nombreCategoria)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.nombreCategoria}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formurlImagen">
            <Form.Label>Url de la imagen</Form.Label>
            <Form.Control
              name="urlImagen"
              type="text"
              value={formik.values.urlImagen || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.urlImagen && formik.touched.urlImagen)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.urlImagen}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formFechaAlta">
            <Form.Label>Fecha Alta</Form.Label>
            <Form.Control 
              name="fechaAlta"
              type="date"
              value={formik.values.fechaAlta || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.fechaAlta && formik.touched.fechaAlta)}
            />
        <Form.Control.Feedback type="invalid">
        {formik.errors.fechaAlta}
        </Form.Control.Feedback>
          </Form.Group>

    
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" disabled={!formik.isValid}>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
    )};
      
    </>
  );
};

export default CategoriaModal;
