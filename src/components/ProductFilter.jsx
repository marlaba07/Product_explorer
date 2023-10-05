import { useState } from 'react';
import PropTypes from 'prop-types';

// Definimos un componente funcional llamado ProductFilter que recibe una única propiedad: filterProducts.
const ProductFilter = ({ filterProducts }) => {
    // Usamos el hook useState para gestionar un estado llamado searchQuery que almacena el valor de búsqueda.
    const [searchQuery, setSearchQuery] = useState('');

    // Definimos una función handleInputChange que se ejecutará cuando el usuario escriba en el campo de búsqueda.
    const handleInputChange = (e) => {
        // Obtenemos el valor ingresado por el usuario.
        const value = e.target.value;
        // Actualizamos el estado searchQuery con el valor ingresado.
        setSearchQuery(value);
        // Llamamos a la función filterProducts pasándole el valor de búsqueda como argumento.
        filterProducts(value);
    };

    return (
        <div className="form-floating">
            {/* Creamos un campo de entrada de texto (input) para que el usuario escriba su búsqueda. */}
            <input
                type="text"
                id="floatingInputValue"
                className="form-control"
                placeholder="Buscar un producto por su título..."
                // Establecemos el valor del campo de entrada de texto según el estado searchQuery.
                value={searchQuery}
                // Cuando el usuario cambia el valor del campo, llamamos a la función handleInputChange.
                onChange={handleInputChange}
            />
            {/* Etiqueta que describe el propósito del campo de entrada de texto. */}
            <label htmlFor="floatingInputValue">Filtrar por producto</label>
        </div>
    );
};

// Especificamos los tipos de propiedades que debe recibir el componente.
ProductFilter.propTypes = {
    filterProducts: PropTypes.func.isRequired,
};

export default ProductFilter;
