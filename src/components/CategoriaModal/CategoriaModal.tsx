
import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { toast } from 'react-toastify';

import { CategoriaService } from "../../services/CategoriaService";
import { ModalType } from "../../types/ModalType";
import { Categoria } from "../../types/Categoria";

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
        const categorias = await CategoriaService.getCategorias();
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
        await CategoriaService.createCategoria(formData);
      } else if (modalType === ModalType.UPDATE) {
        await CategoriaService.updateCategoria(formData.id!, formData);
      }

      toast.success(modalType === ModalType.CREATE ? "Categoria Creada" : "Categoria Actualizada", {
        position: "top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error("Error saving categoria:", error);
      toast.error('An error occurred');
    }
  };

  const handleDelete = async () => {
    try {
      if (categoria) {
        await CategoriaService.deleteCategoria(categoria.id!);
        toast.success("Categoria deleted successfully", {
          position: "top-center",
        });

        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error deleting categoria:", error);
      toast.error("An error occurred while deleting the categoria");
    }
  };

  const handleRestore = async () => {
    try {
      // Restore the deleted categoria
      if (categoria) {
        categoria.deleted = false;
        await CategoriaService.updateCategoria(categoria.id!, categoria);
        toast.success("Categoria restored successfully", {
          position: "top-center",
        });

        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error restoring categoria:", error);
      toast.error("An error occurred while restoring the categoria");
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
            <p>
              Are you sure you want to delete the categoria <br />
              <strong>{categoria.nombreCategoria}</strong>?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
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
            <p>
              Are you sure you want to restore the categoria <br />
              <strong>{categoria.nombreCategoria}</strong>?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleRestore}>
              Restore
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
              <Form.Group controlId="formDenominacion">
                <Form.Label>Denominacion</Form.Label>
                <Form.Control
                  name="denominacion"
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

              <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" disabled={!formik.isValid}>
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default CategoriaModal;
