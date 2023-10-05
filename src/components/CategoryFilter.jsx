// Importamos la librería PropTypes que nos permite definir tipos de propiedades para nuestros componentes.
import PropTypes from 'prop-types';

// Definimos un componente funcional llamado CategoryFilter que recibe tres propiedades: categories, filterByCategory y selectedCategory.
const CategoryFilter = ({ categories, filterByCategory, selectedCategory }) => {
    return (
        <div className="form-floating">
            {/* Creamos un elemento <select> que permite al usuario seleccionar una categoría. */}
            <select
                id="floatingSelect"
                className="form-select"
                // Cuando se cambia la selección, llamamos a la función filterByCategory con el valor seleccionado.
                onChange={(e) => filterByCategory(e.target.value)}
                // Establecemos el valor seleccionado del <select> según la propiedad selectedCategory.
                value={selectedCategory}
            >
                {/* Agregamos una opción por defecto que representa "Todas" las categorías. */}
                <option value="" selected>Todas</option>
                {/* Mapeamos las categorías proporcionadas y creamos una opción para cada una. */}
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            {/* Etiqueta que describe el propósito del <select>. */}
            <label htmlFor="floatingSelect">Filtrar por categoría</label>
        </div>
    )
}

// Especificamos los tipos de propiedades que debe recibir el componente.
CategoryFilter.propTypes = {
    categories: PropTypes.array.isRequired,         // categories debe ser un array y es obligatorio.
    filterByCategory: PropTypes.func.isRequired,    // filterByCategory debe ser una función y es obligatorio.
    selectedCategory: PropTypes.string.isRequired,  // selectedCategory debe ser una cadena de texto y es obligatorio.
};

export default CategoryFilter;
