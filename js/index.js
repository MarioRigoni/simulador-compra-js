// 1. Array objetos que representa los productos de la tienda
const productos = [
    { id: 1, nombre: 'procesador', precio: 296.989 },
    { id: 2, nombre: 'motherboard', precio: 291.999 },
    { id: 3, nombre: 'memorias', precio: 45.999 },
    { id: 4, nombre: 'monitores', precio: 196.799 },
    { id: 5, nombre: 'mouse', precio: 64.999 },
    { id: 6, nombre: 'teclado', precio: 40.712 }
];

// 2. Array que representa el carrito de compras (productos seleccionados por el usuario)
let carrito = [];

// 3. Funcion para agregar un producto al carrito usando su nombre
function agregarAlCarrito(nombreProducto) {
    const producto = productos.find(p => p.nombre === nombreProducto); // Busca e producto por nombre
    if (producto) {
        carrito.push(producto); // Agrega el producto encontrado al carrito
        console.log(`${producto.nombre} agregado al carrito.`);
    } else {
        console.log("Producto no valido. Intente de nuevo.");
    }
}

// 4. Funcion para manejar la seleccion de productos por el usuario
function seleccionarProductos() {
    let seleccion = ""; // Variable para almacenar la seleccion del usuario
    while (seleccion !== 'fin') {
        seleccion = prompt("Ingrese el nombre del producto que desea agregar al carrito o 'fin' para terminar:");
        if (seleccion !== 'fin') {
            agregarAlCarrito(seleccion); // Llama a la funcion para agregar producto
        }
    }
}

// 5. Funcion para calcular el total usando reduce
function calcularTotalCarrito() {
    const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0); // Suma precios
    console.log(`Total del carrito: $${total.toFixed(2)}`); // Muestra el total con dos decimales
}

// 6. Funcion para aumentar el precio de todos los productos en un porcentaje dado
function aumentarPrecio(porcentaje) {
    const productosAumentados = productos.map(p => ({
        ...p,
        precio: (p.precio * (1 + porcentaje / 100)).toFixed(2) // Aumentar precio
    }));
    console.log("Precios aumentados:", productosAumentados);
}

// 7. Funcion para filtrar productos por precio maximo
function filtrarPorPrecio(maxPrecio) {
    const productosFiltrados = productos.filter(p => p.precio <= maxPrecio); // Filtrar por precio
    console.log(`Productos que cuestan menos de $${maxPrecio}:`, productosFiltrados);
}

// 8. Llamamos a las funciones para ejecutar el proceso
seleccionarProductos(); // Inicia la seleccion de productos
calcularTotalCarrito(); // Muestra el total del carrito




