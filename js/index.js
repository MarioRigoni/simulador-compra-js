// elementos del DOM y productos en el carrito

let productos = [];
const contenedorProductos = document.querySelector(".contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
const numerito = document.querySelector("#numerito");

// Función para cargar los productos desde productos.json

async function cargarProductos() {
    try {
        const response = await fetch('./js/productos.json');
        productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

function mostrarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        tituloPrincipal.innerText = e.currentTarget.id === "todos" ? "Todos los Productos" : e.currentTarget.innerText;
        const productosBoton = e.currentTarget.id === "todos" ? productos : productos.filter(producto => producto.categoria === e.currentTarget.id);
        mostrarProductos(productosBoton);
    });
});

function actualizarBotonesAgregar() {
    document.querySelectorAll(".producto-agregar").forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto Agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #8a2be2)",
        },
        offset: {
            x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();
      
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    if (index !== -1) productosEnCarrito[index].cantidad++;
    else productosEnCarrito.push({ ...productoAgregado, cantidad: 1 });
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    numerito.innerText = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
}

cargarProductos(); // Llamada inicial para cargar los productos
actualizarNumerito();

