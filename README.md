# Challenge de React - Datcom

Este proyecto es una solución al challenge de React proporcionado por Datcom, una empresa con sede en Mar del Plata. El objetivo de este ejercicio es utilizar React para crear una aplicación que interactúe con la API proporcionada y muestre una lista de productos en una tabla. Además, se debe permitir eliminar productos de la lista y filtrar los productos por categoría. Cómo opcional se realizó la creación de productos.

## Stack:

- ReactJS

## Requisitos

- Utilizar React
- Componentizar
- Bootstrap

## Desarrollo

#### Para cumplir con los requisitos del ejercicio, sigue estos pasos:

1. Obtener una lista de productos y guardarlos en un estado:
   Utiliza la API proporcionada Fake Store API para obtener una lista de productos. Guarda estos datos en el estado de tu aplicación.
2. Generar una tabla que muestre los siguientes datos:
   Título
   Descripción
   Precio
   Categoría
   Imagen (opcional)
   Acciones
   Crea una tabla en la interfaz de usuario que muestre estos datos.

3. En la celda de acciones, poner un botón/texto para permitir eliminar un producto de la lista:
   Agrega un botón o enlace en la celda de acciones de cada fila de la tabla que permita eliminar el producto correspondiente de la lista.

4. Crear un Select con todas las categorías pertenecientes a los productos obtenidos, en lo posible que no se repitan y filtrar los productos de la tabla:
   Genera un menú desplegable (select) que contenga todas las categorías únicas de los productos obtenidos. Al seleccionar una categoría en el menú desplegable, filtra la tabla para mostrar solo los productos de esa categoría.

## Entrega

- Sube tu código a un repositorio en GitHub, GitLab o Bitbucket.
- Proporciona un enlace al repositorio en tu entrega.
- Además del repositorio, puedes proporcionar un enlace a una plataforma en línea de desarrollo, como CodeSandbox, para que los revisores puedan probar la aplicación en vivo.

## Observaciones Generales

- Implementé Bootstrap & React Bootstrap para la interfaz y una mejor experiencia de usuario.
- Implementé Yup para validacion de campos en el formulario.
- Implementé SweetAlert para las alertas personalizadas.
- Barra de navegación: Agregué una barra de busqueda para poder filtrar por el titulo del producto.
- Select de filtrado: Agregué un select para filtrar por categorias.
- Utilicé el logo de la empresa para hacerlo más personalizado.
- Al terminar con el proyecto refactoicé el código para que sea más lejible.

## Consideraciones finales

> ⚠️ **Importante:**
> Este es un mensaje de advertencia importante. Asegúrate de revisar el TODO que se encuentra en la raiz del proyecto donde allí se encontrarán todos los puntos importantes que se fueron contemplando mientras se desarrolló este challenge.

#### En el futuro, se pueden considerar agregar las siguientes características a la aplicación:

- Paginación para manejar grandes conjuntos de datos.
- Detalles de productos adicionales en una vista detallada.
- Implementar una interfaz de usuario más atractiva y receptiva.

#### También dejo algunos aspectos que puedo mejorar:

- Agregar otra carpeta correspondiente a 'pages' y utilizar la navegación entre ellas.
- Crear otra carpeta 'layout' para no llamar todo en APP.jsx.
- Utilizar variables de entorno.

#### Detalles de la aplicación:

- Al filtrar y eliminar un producto se reinicia el selector a 'todas' por default.
- Agregué funcionalidad extra para hacer más completo el challenge.
- No es posible borrar los registros creados manualmente porque la API no encuentra el producto con el ID creado.
- En caso de querer eliminar un producto agregado por nosotros, se capturará el error de que el ID no se encuentra en la API y le devolveremos un mensaje de que no se puede eliminar ese producto en este momento.
