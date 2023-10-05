// Importamos los módulos necesarios desde las bibliotecas de React y Bootstrap.
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// Importamos una función de validación de esquema desde un archivo helper llamado productValidation.
import createValidationSchema from '../helpers/productValidation.js';

// Definimos un componente llamado ProductForm que recibe dos propiedades: onSubmit y categories.
function ProductForm({ onSubmit, categories }) {
  // Usamos el hook useState para gestionar el estado de validationErrors, show y formData.
  const [validationErrors, setValidationErrors] = useState({});
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: 0,
    rating: 0,
    image: '',
  });

  // Función para cerrar el modal y limpiar los campos del formulario.
  const handleClose = () => {
    setShow(false);
    // Limpia los campos del formulario al cerrar el modal
    setFormData({
      title: '',
      description: '',
      category: '',
      price: 0,
      rating: 0,
      image: '',
    });
  };

  // Función para mostrar el modal.
  const handleShow = () => setShow(true);

  // Función para manejar la presentación del formulario.
  const handleSubmit = () => {
    // Valida el formulario con el esquema de validación
    createValidationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Si la validación es exitosa, envía los datos al padre (onSubmit) y cierra el modal.
        onSubmit(formData);
        handleClose();
      })
      .catch((error) => {
        // Si la validación falla, establece los errores de validación en el estado.
        const errors = {};
        error.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setValidationErrors(errors);
      });
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <Button variant="btn btn-outline-primary" onClick={handleShow}>
        Agregar producto
      </Button>

      {/* Modal para ingresar los datos del producto */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Completa los campos!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campo de entrada para el título del producto */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mens Cotton Jacket"
                autoFocus
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                  // Elimina el error de validación al cambiar el valor del campo.
                  setValidationErrors((errors) => ({
                    ...errors,
                    title: null,
                  }));
                }}
              />
              {/* Muestra un mensaje de error si hay errores de validación para el título. */}
              {validationErrors.title && (
                <div className="text-danger">{validationErrors.title}</div>
              )}
            </Form.Group>

            {/* Campo de entrada para la descripción del producto */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                  // Elimina el error de validación al cambiar el valor del campo.
                  setValidationErrors((errors) => ({
                    ...errors,
                    description: null,
                  }));
                }}
              />
              {/* Muestra un mensaje de error si hay errores de validación para la descripción. */}
              {validationErrors.description && (
                <div className="text-danger">{validationErrors.description}</div>
              )}
            </Form.Group>

            {/* Campo de selección para la categoría del producto */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                value={formData.category}
                onChange={(e) => {
                  setFormData({ ...formData, category: e.target.value });
                  // Elimina el error de validación al cambiar el valor del campo.
                  setValidationErrors((errors) => ({
                    ...errors,
                    category: null,
                  }));
                }}
              >
                {/* Opción por defecto */}
                <option value="" selected>Seleccione una categoría...</option>
                {/* Mapea las categorías disponibles para crear las opciones */}
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
              {/* Muestra un mensaje de error si hay errores de validación para la categoría. */}
              {validationErrors.category && (
                <div className="text-danger">{validationErrors.category}</div>
              )}
            </Form.Group>

            {/* Campo de entrada para el precio del producto */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={formData.price}
                onChange={(e) => {
                  setFormData({ ...formData, price: e.target.value });
                  // Elimina el error de validación al cambiar el valor del campo.
                  setValidationErrors((errors) => ({
                    ...errors,
                    price: null,
                  }));
                }}
              />
              {/* Muestra un mensaje de error si hay errores de validación para el precio. */}
              {validationErrors.price && (
                <div className="text-danger">{validationErrors.price}</div>
              )}
            </Form.Group>

            {/* Campo de entrada para la calificación (rating) del producto */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                value={formData.rating}
                onChange={(e) => {
                  setFormData({ ...formData, rating: e.target.value });
                  // Elimina el error de validación al cambiar el valor del campo.
                  setValidationErrors((errors) => ({
                    ...errors,
                    rating: null,
                  }));
                }}
              />
              {/* Muestra un mensaje de error si hay errores de validación para el rating. */}
              {validationErrors.rating && (
                <div className="text-danger">{validationErrors.rating}</div>
              )}
            </Form.Group>

            {/* Campo de entrada para la URL de la imagen del producto */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>URL Imagen</Form.Label>
              <Form.Control
                type="url"
                placeholder="URL de la imagen"
                value={formData.image}
                onChange={(e) => {
                  setFormData({ ...formData, image: e.target.value });
                  // Elimina el error de validación al cambiar el valor del campo.
                  setValidationErrors((errors) => ({
                    ...errors,
                    image: null,
                  }));
                }}
              />
              {/* Muestra un mensaje de error si hay errores de validación para la URL de la imagen. */}
              {validationErrors.image && (
                <div className="text-danger">{validationErrors.image}</div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Botón para cerrar el modal */}
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {/* Botón para enviar el formulario */}
          <Button variant="primary" onClick={handleSubmit}>
            Añadir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// Especificamos los tipos de propiedades que debe recibir el componente.
ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // onSubmit debe ser una función y es obligatorio.
  categories: PropTypes.array.isRequired, // categories debe ser un array y es obligatorio.
};

export default ProductForm;
