import PropTypes from 'prop-types';
import ProductRow from "./ProductRow";

// Definimos un componente llamado ProductTable que recibe dos propiedades: products y deleteProduct.
const ProductTable = ({ products, deleteProduct }) => {
    return (
        <div className='container'>
            {/* Creamos una tabla para mostrar la lista de productos */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {/* Definimos las columnas de la tabla */}
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Rating</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapeamos la lista de productos y generamos una fila para cada producto utilizando el componente ProductRow */}
                    {products.map((product) => (
                        <ProductRow
                            key={product.id}                 // Asignamos una clave única a cada fila.
                            product={product}                // Pasamos los datos del producto como propiedad al componente ProductRow.
                            deleteProduct={deleteProduct}    // Pasamos la función deleteProduct para permitir eliminar productos.
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// Especificamos los tipos de propiedades que debe recibir el componente.
ProductTable.propTypes = {
    products: PropTypes.array.isRequired,       // La propiedad products debe ser un array y es obligatoria.
    deleteProduct: PropTypes.func.isRequired,   // La propiedad deleteProduct debe ser una función y es obligatoria.
};

export default ProductTable;
