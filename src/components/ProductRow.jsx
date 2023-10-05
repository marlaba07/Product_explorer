import PropTypes from 'prop-types';

// Definimos un componente funcional llamado ProductRow que recibe dos propiedades: product y deleteProduct.
const ProductRow = ({ product, deleteProduct }) => {
    // Extraemos las propiedades del objeto product para un acceso más sencillo.
    const { title, description, price, category, rating, image } = product;

    return (
        <tr>
            {/* Mostramos los datos del producto en una fila de una tabla. */}
            <td>{title}</td>
            <td>{description}</td>
            <td>${price}</td>
            <td>{category}</td>
            <td>{rating.rate}</td>
            {/* Mostramos la imagen del producto con un estilo de 60x60 píxeles. */}
            <td><img style={{ width: '60px', height: '60px' }} src={image} alt="Imagen" /></td>
            <td>
                {/* Botón para eliminar el producto al hacer clic. Llama a la función deleteProduct con el ID del producto. */}
                <button className="btn btn-outline-danger" onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </td>
        </tr>
    );
};

// Especificamos los tipos de propiedades que debe recibir el componente.
ProductRow.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,         // El título del producto debe ser una cadena y es obligatorio.
        description: PropTypes.string.isRequired,   // La descripción del producto debe ser una cadena y es obligatoria.
        price: PropTypes.number.isRequired,         // El precio del producto debe ser un número y es obligatorio.
        category: PropTypes.string.isRequired,      // La categoría del producto debe ser una cadena y es obligatoria.
        id: PropTypes.number.isRequired,            // El ID del producto debe ser un número y es obligatorio.
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,      // La calificación del producto debe ser un número y es obligatoria.
        }).isRequired,
        image: PropTypes.string.isRequired,         // La URL de la imagen del producto debe ser una cadena y es obligatoria.
    }).isRequired,
    deleteProduct: PropTypes.func.isRequired,       // deleteProduct debe ser una función y es obligatoria.
};

export default ProductRow;
