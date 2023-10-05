import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from './assets/datcom-icon.png';

// Componentes utilizados
import CategoryFilter from './components/CategoryFilter';
import ProductFilter from './components/ProductFilter';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';

// Servicios
import categoryService from './service/categoryService';
import productService from './service/productService';

function App() {
  // Declaración de estados para almacenar datos y controlar la interfaz
  const [categories, setCategories] = useState([]);              // Lista de categorías
  const [products, setProducts] = useState([]);                  // Lista de productos
  const [filteredProducts, setFilteredProducts] = useState([]);  // Lista de productos filtrados
  const [selectedCategory, setSelectedCategory] = useState('');  // Categoría seleccionada
  const [searchQuery, setSearchQuery] = useState('');            // Consulta de búsqueda

  // Efecto de lado para cargar datos iniciales al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Función para cargar datos iniciales (categorías y productos) desde los servicios
  const fetchData = async () => {
    try {
      const categoriesData = await categoryService.getCategories();
      setCategories(categoriesData);

      const productsData = await productService.getProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
    } catch (error) {
      handleDataError(error.message);
    }
  };

  // Función para manejar errores relacionados con los datos
  const handleDataError = (errorMessage) => {
    Swal.fire('Error!', errorMessage, 'error');
  };

  // Función para eliminar un producto
  const handleDeleteProduct = async (productId) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro!',
      });

      if (result.isConfirmed) {
        const deletedProduct = await productService.deleteProduct(productId);

        if (!deletedProduct) {
          throw new Error('No se puede eliminar el producto. Intente más tarde.');
        }

        // Actualizar la lista de productos después de la eliminación
        updateProductsList(deletedProduct);

        // Limpiar la categoría seleccionada
        setSelectedCategory('');
      }
    } catch (error) {
      handleDataError(error.message);
    }
  };

  // Función para actualizar la lista de productos después de eliminar un producto
  const updateProductsList = (deletedProduct) => {
    const updatedProducts = products.filter((product) => product.id !== deletedProduct.id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  // Función para agregar un nuevo producto
  const handleAddProduct = async (newProduct) => {
    // Asignar un ID único al nuevo producto
    newProduct.id = getNextProductId();

    // Convertir el rating a un número entero
    newProduct.rating = { rate: parseInt(newProduct.rating, 10) };

    // Actualizar las listas de productos después de la adición
    const updatedProducts = [...filteredProducts, newProduct];
    setFilteredProducts(updatedProducts);
    setProducts(updatedProducts);

    // Mostrar un mensaje de éxito
    showSuccessMessage(`Se agregó correctamente el siguiente producto: ${newProduct.title}`);
  };

  // Función para obtener el siguiente ID de producto disponible
  const getNextProductId = () => {
    return filteredProducts.length > 0 ? filteredProducts[filteredProducts.length - 1].id + 1 : 1;
  };

  // Función para mostrar un mensaje de éxito
  const showSuccessMessage = (message) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Función para filtrar productos por categoría
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);

    if (category === '') {
      // Si no se selecciona una categoría, mostrar todos los productos
      setFilteredProducts(products);
    } else {
      // Filtrar productos por la categoría seleccionada
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Función para filtrar productos por título
  const handleTitleFilter = (query) => {
    console.log("🚀 ~ file: App.jsx:134 ~ searchQuery ~ searchQuery:", searchQuery)
    setSearchQuery(query);

    // Filtrar productos por título (insensible a mayúsculas y minúsculas)
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Renderizado del componente
  return (
    <>
      {/* Barra de navegación */}
      <Navbar className="bg-body-tertiary">
        <Container className="d-flex justify-content-between align-items-center py-2">
          <Navbar.Brand href="#home">
            <img alt="logo" src={imagen} width="120" height="45" />
          </Navbar.Brand>
          <div className="row">
            <div className="col-md-6">
              {/* Componente de filtro por categoría */}
              <CategoryFilter
                categories={categories}
                filterByCategory={handleCategoryFilter}
                selectedCategory={selectedCategory}
              />
            </div>
            <div className="col-md-6">
              {/* Componente de filtro de productos por título */}
              <ProductFilter filterProducts={handleTitleFilter} />
            </div>
          </div>
          <div>
            {/* Componente de formulario para agregar productos */}
            <ProductForm onSubmit={handleAddProduct} categories={categories} />
          </div>
        </Container>
      </Navbar>

      {/* Tabla de productos */}
      <div className="mt-4">
        <ProductTable products={filteredProducts} deleteProduct={handleDeleteProduct} />
      </div>
    </>
  );
}

export default App;
