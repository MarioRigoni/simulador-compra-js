/**/


// 1. Variables de productos y sus precios
let procesador = 296.989;
let motherboard = 291.999;
let discoSolido = 120.834;
let memoriaRam = 45.999;
let monitor = 196.799;
let mouse = 64.999;
let teclado = 40.712;
let parlantes = 89.999;
let fuente = 120.599;
let gabinete = 150.789;

// 2. Inicializa el total en cero
let total = 0;

// 3. Función para agregar productos al total de la compra
function agregarAlTotal(precio) {
    total += precio; // Sumar el precio del producto al total
}

// 4. Simular la selección del usuario
while (true) {
    let seleccion = prompt("Ingrese el nombre del producto que desea agregar al carrito (procesador, motherboard, discoSolido, memoriaRam, monitor, mouse, teclado, parlantes, fuente, gabinete) o 'fin' para terminar:");

    if (seleccion === 'fin') {
        break; // Salir del bucle si el usuario escribe 'fin'
    }

    // 5. Evaluar la selección del usuario y agregar el producto correspondiente al total
    if (seleccion === 'procesador') {
        agregarAlTotal(procesador);
    } else if (seleccion === 'motherboard') {
        agregarAlTotal(motherboard);
    } else if (seleccion === 'discoSolido') {
        agregarAlTotal(discoSolido);
    } else if (seleccion === 'memoriaRam') {
        agregarAlTotal(memoriaRam);
    } else if (seleccion === 'monitor') {
        agregarAlTotal(monitor);
    } else if (seleccion === 'mouse') {
        agregarAlTotal(mouse);
    } else if (seleccion === 'teclado') {
        agregarAlTotal(teclado);
    } else if (seleccion === 'parlantes') {
        agregarAlTotal(parlantes);
    } else if (seleccion === 'fuente') {
        agregarAlTotal(fuente);
    } else if (seleccion === 'gabinete') {
        agregarAlTotal(gabinete);
    } else {
        console.log("Selección no válida, por favor ingrese el nombre del producto o 'fin' para salir.");
    }
}

// 6. Mostrar el total final de la compra en la consola
console.log(`El total de su compra es: $${total.toFixed(2)}`);



