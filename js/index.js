// arrays de objetos para los productos.

const productos = [
    // Fila 1: Procesadores
    {
        id: "procesador-1",
        titulo: "Procesador 1",
        imagen: "./img/ryzen-5.png",
        precio: 296.989,
        categoria: "procesadores"
    },
    {
        id: "procesador-2",
        titulo: "Procesador 2",
        imagen: "./img/ryzen5-2.png",
        precio: 312.999,
        categoria: "procesadores"
    },
    {
        id: "procesador-3",
        titulo: "Procesador 3",
        imagen: "./img/intel1.png",
        precio: 275.999,
        categoria: "procesadores"
    },
    {
        id: "procesador-4",
        titulo: "Procesador 4",
        imagen: "./img/intel2.png",
        precio: 320.000,
        categoria: "procesadores"
    },
    // Fila 2: Motherboards
    {
        id: "motherboard-1",
        titulo: "Motherboard 1",
        imagen: "./img/mother1.png",
        precio: 291.999,
        categoria: "motherboard"
    },
    {
        id: "motherboard-2",
        titulo: "Motherboard 2",
        imagen: "./img/mother2.jpg",
        precio: 309.000,
        categoria: "motherboard"
    },
    {
        id: "motherboard-3",
        titulo: "Motherboard 3",
        imagen: "./img/mother3.png",
        precio: 265.499,
        categoria: "motherboard"
    },
    {
        id: "motherboard-4",
        titulo: "Motherboard 4",
        imagen: "./img/intel4.png",
        precio: 299.999,
        categoria: "motherboard"
    },
    // Fila 3: Memorias RAM
    {
        id: "memoria-1",
        titulo: "Memoria RAM 1",
        imagen: "./img/Memoria.png",
        precio: 45.999,
        categoria: "memoria"
    },
    {
        id: "memoria-2",
        titulo: "Memoria RAM 2",
        imagen: "./img/Memoria.png",
        precio: 54.999,
        categoria: "memoria"
    },
    {
        id: "memoria-3",
        titulo: "Memoria RAM 3",
        imagen: "./img/Memoria.png",
        precio: 39.999,
        categoria: "memoria"
    },
    {
        id: "memoria-4",
        titulo: "Memoria RAM 4",
        imagen: "./img/Memoria.png",
        precio: 49.999,
        categoria: "memoria"
    },
    // Fila 4: Monitores
    {
        id: "monitor-1",
        titulo: "Monitor 1",
        imagen: "./img/monitor.png",
        precio: 196.799,
        categoria: "monitores"
    },
    {
        id: "monitor-2",
        titulo: "Monitor 2",
        imagen: "./img/monitor.png",
        precio: 225.999,
        categoria: "monitores"
    },
    {
        id: "monitor-3",
        titulo: "Monitor 3",
        imagen: "./img/monitor.png",
        precio: 215.499,
        categoria: "monitores"
    },
    {
        id: "monitor-4",
        titulo: "Monitor 4",
        imagen: "./img/monitor.png",
        precio: 209.999,
        categoria: "monitores"
    },
    // Fila 5: Mouse
    {
        id: "mouse-1",
        titulo: "Mouse 1",
        imagen: "./img/Mause.jpg",
        precio: 64.999,
        categoria: "mouse"
    },
    {
        id: "mouse-2",
        titulo: "Mouse 2",
        imagen: "./img/Mause.jpg",
        precio: 55.999,
        categoria: "mouse"
    },
    {
        id: "mouse-3",
        titulo: "Mouse 3",
        imagen: "./img/Mause.jpg",
        precio: 59.999,
        categoria: "mouse"
    },
    {
        id: "mouse-4",
        titulo: "Mouse 4",
        imagen: "./img/Mause.jpg",
        precio: 60.999,
        categoria: "mouse"
    },
    // Fila 6: Teclados
    {
        id: "teclado-1",
        titulo: "Teclado 1",
        imagen: "./img/teclado.jpg",
        precio: 40.712,
        categoria: "teclados"
    },
    {
        id: "teclado-2",
        titulo: "Teclado 2",
        imagen: "./img/teclado.jpg",
        precio: 42.999,
        categoria: "teclados"
    },
    {
        id: "teclado-3",
        titulo: "Teclado 3",
        imagen: "./img/teclado.jpg",
        precio: 44.999,
        categoria: "teclados"
    },
    {
        id: "teclado-4",
        titulo: "Teclado 4",
        imagen: "./img/teclado.jpg",
        precio: 41.499,
        categoria: "teclados"
    }
];

const contenedorProductos = document.querySelector(".contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
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

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        tituloPrincipal.innerText = e.currentTarget.id === "todos" ? "Todos los Productos" : e.currentTarget.innerText;
        const productosBoton = e.currentTarget.id === "todos" ? productos : productos.filter(producto => producto.categoria === e.currentTarget.id);
        cargarProductos(productosBoton);
    });
});

function actualizarBotonesAgregar() {
    document.querySelectorAll(".producto-agregar").forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
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

actualizarNumerito();
