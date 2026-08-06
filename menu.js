// =====================================
// TACOS MILO V3
// MENU.JS PARTE 1 (CORREGIDA)
// =====================================

import {
    guardarPedido,
    escucharPlatos,
    ocuparPlato
} from "./firebase.js";

// =====================================
// VARIABLES
// =====================================

let platoSeleccionado = "";
let estadosPlatos = {};
let carrito = [];

// =====================================
// PRODUCTOS
// =====================================

const tacos = [
    { nombre: "Pastor", precio: 18 },
    { nombre: "Bistec", precio: 18 },
    { nombre: "Chorizo", precio: 18 },
    { nombre: "Suadero", precio: 18 },
    { nombre: "Arrachera", precio: 18 },
    { nombre: "Tripa", precio: 22 }
];

const carnes = [
    "Pastor",
    "Bistec",
    "Chorizo",
    "Suadero",
    "Arrachera",
    "Tripa"
];

const aguas = [
    "Jamaica",
    "Horchata",
    "Limón"
];

// =====================================
// ESCUCHAR CAMBIOS EN FIREBASE
// =====================================

escucharPlatos((platos) => {
    estadosPlatos = platos;
    actualizarBotonesPlatos();
});

// =====================================
// ACTUALIZAR BOTONES DE PLATOS
// =====================================

function actualizarBotonesPlatos() {

    document.querySelectorAll(".botonPlato").forEach(boton => {

        const nombre = boton.dataset.plato ||
            boton.innerText
                .replace("🍽 ", "")
                .replace("🥡 ", "")
                .replace("🔴 ", "")
                .replace("🟢 ", "")
                .replace("Ocupado", "")
                .replace("Libre", "")
                .trim();

        boton.dataset.plato = nombre;

        if (estadosPlatos[nombre]) {

            boton.style.background = "#e53935";
            boton.style.color = "white";
            boton.innerHTML = `🔴 ${nombre}<br>Ocupado`;
            boton.disabled = true;

        } else {

            boton.style.background = "#43a047";
            boton.style.color = "white";
            boton.innerHTML = `🟢 ${nombre}<br>Libre`;
            boton.disabled = false;

        }

    });

}

// =====================================
// SELECCIONAR PLATO
// =====================================

document.querySelectorAll(".botonPlato").forEach(boton => {

    boton.addEventListener("click", async () => {

        const nombre = boton.dataset.plato;

        try {

            await ocuparPlato(nombre);

            platoSeleccionado = nombre;

            document.getElementById("platoActual").innerText =
                "Lugar seleccionado: " + platoSeleccionado;

            alert("Seleccionaste: " + platoSeleccionado);

        } catch (error) {

            console.error(error);
            alert("No se pudo ocupar el plato.");

        }

    });

});// =====================================
// TACOS MILO V3
// MENU.JS PARTE 1 (CORREGIDA)
// =====================================

import {
    guardarPedido,
    escucharPlatos,
    ocuparPlato
} from "./firebase.js";

// =====================================
// VARIABLES
// =====================================

let platoSeleccionado = "";
let estadosPlatos = {};
let carrito = [];

// =====================================
// PRODUCTOS
// =====================================

const tacos = [
    { nombre: "Pastor", precio: 18 },
    { nombre: "Bistec", precio: 18 },
    { nombre: "Chorizo", precio: 18 },
    { nombre: "Suadero", precio: 18 },
    { nombre: "Arrachera", precio: 18 },
    { nombre: "Tripa", precio: 22 }
];

const carnes = [
    "Pastor",
    "Bistec",
    "Chorizo",
    "Suadero",
    "Arrachera",
    "Tripa"
];

const aguas = [
    "Jamaica",
    "Horchata",
    "Limón"
];

// =====================================
// ESCUCHAR CAMBIOS EN FIREBASE
// =====================================

escucharPlatos((platos) => {
    estadosPlatos = platos;
    actualizarBotonesPlatos();
});

// =====================================
// ACTUALIZAR BOTONES DE PLATOS
// =====================================

function actualizarBotonesPlatos() {

    document.querySelectorAll(".botonPlato").forEach(boton => {

        const nombre = boton.dataset.plato ||
            boton.innerText
                .replace("🍽 ", "")
                .replace("🥡 ", "")
                .replace("🔴 ", "")
                .replace("🟢 ", "")
                .replace("Ocupado", "")
                .replace("Libre", "")
                .trim();

        boton.dataset.plato = nombre;

        if (estadosPlatos[nombre]) {

            boton.style.background = "#e53935";
            boton.style.color = "white";
            boton.innerHTML = `🔴 ${nombre}<br>Ocupado`;
            boton.disabled = true;

        } else {

            boton.style.background = "#43a047";
            boton.style.color = "white";
            boton.innerHTML = `🟢 ${nombre}<br>Libre`;
            boton.disabled = false;

        }

    });

}

// =====================================
// SELECCIONAR PLATO
// =====================================

document.querySelectorAll(".botonPlato").forEach(boton => {

    boton.addEventListener("click", async () => {

        const nombre = boton.dataset.plato;

        try {

            await ocuparPlato(nombre);

            platoSeleccionado = nombre;

            document.getElementById("platoActual").innerText =
                "Lugar seleccionado: " + platoSeleccionado;

            alert("Seleccionaste: " + platoSeleccionado);

        } catch (error) {

            console.error(error);
            alert("No se pudo ocupar el plato.");

        }

    });

});// =====================================
// TACOS MILO V3
// MENU.JS PARTE 1 (CORREGIDA)
// =====================================

import {
    guardarPedido,
    escucharPlatos,
    ocuparPlato
} from "./firebase.js";

// =====================================
// VARIABLES
// =====================================

let platoSeleccionado = "";
let estadosPlatos = {};
let carrito = [];

// =====================================
// PRODUCTOS
// =====================================

const tacos = [
    { nombre: "Pastor", precio: 18 },
    { nombre: "Bistec", precio: 18 },
    { nombre: "Chorizo", precio: 18 },
    { nombre: "Suadero", precio: 18 },
    { nombre: "Arrachera", precio: 18 },
    { nombre: "Tripa", precio: 22 }
];

const carnes = [
    "Pastor",
    "Bistec",
    "Chorizo",
    "Suadero",
    "Arrachera",
    "Tripa"
];

const aguas = [
    "Jamaica",
    "Horchata",
    "Limón"
];

// =====================================
// ESCUCHAR CAMBIOS EN FIREBASE
// =====================================

escucharPlatos((platos) => {
    estadosPlatos = platos;
    actualizarBotonesPlatos();
});

// =====================================
// ACTUALIZAR BOTONES DE PLATOS
// =====================================

function actualizarBotonesPlatos() {

    document.querySelectorAll(".botonPlato").forEach(boton => {

        const nombre = boton.dataset.plato ||
            boton.innerText
                .replace("🍽 ", "")
                .replace("🥡 ", "")
                .replace("🔴 ", "")
                .replace("🟢 ", "")
                .replace("Ocupado", "")
                .replace("Libre", "")
                .trim();

        boton.dataset.plato = nombre;

        if (estadosPlatos[nombre]) {

            boton.style.background = "#e53935";
            boton.style.color = "white";
            boton.innerHTML = `🔴 ${nombre}<br>Ocupado`;
            boton.disabled = true;

        } else {

            boton.style.background = "#43a047";
            boton.style.color = "white";
            boton.innerHTML = `🟢 ${nombre}<br>Libre`;
            boton.disabled = false;

        }

    });

}

// =====================================
// SELECCIONAR PLATO
// =====================================

document.querySelectorAll(".botonPlato").forEach(boton => {

    boton.addEventListener("click", async () => {

        const nombre = boton.dataset.plato;

        try {

            await ocuparPlato(nombre);

            platoSeleccionado = nombre;

            document.getElementById("platoActual").innerText =
                "Lugar seleccionado: " + platoSeleccionado;

            alert("Seleccionaste: " + platoSeleccionado);

        } catch (error) {

            console.error(error);
            alert("No se pudo ocupar el plato.");

        }

    });

});// =====================================
// TACOS MILO V3
// MENU.JS PARTE 1 (CORREGIDA)
// =====================================

import {
    guardarPedido,
    escucharPlatos,
    ocuparPlato
} from "./firebase.js";

// =====================================
// VARIABLES
// =====================================

let platoSeleccionado = "";
let estadosPlatos = {};
let carrito = [];

// =====================================
// PRODUCTOS
// =====================================

const tacos = [
    { nombre: "Pastor", precio: 18 },
    { nombre: "Bistec", precio: 18 },
    { nombre: "Chorizo", precio: 18 },
    { nombre: "Suadero", precio: 18 },
    { nombre: "Arrachera", precio: 18 },
    { nombre: "Tripa", precio: 22 }
];

const carnes = [
    "Pastor",
    "Bistec",
    "Chorizo",
    "Suadero",
    "Arrachera",
    "Tripa"
];

const aguas = [
    "Jamaica",
    "Horchata",
    "Limón"
];

// =====================================
// ESCUCHAR CAMBIOS EN FIREBASE
// =====================================

escucharPlatos((platos) => {
    estadosPlatos = platos;
    actualizarBotonesPlatos();
});

// =====================================
// ACTUALIZAR BOTONES DE PLATOS
// =====================================

function actualizarBotonesPlatos() {

    document.querySelectorAll(".botonPlato").forEach(boton => {

        const nombre = boton.dataset.plato ||
            boton.innerText
                .replace("🍽 ", "")
                .replace("🥡 ", "")
                .replace("🔴 ", "")
                .replace("🟢 ", "")
                .replace("Ocupado", "")
                .replace("Libre", "")
                .trim();

        boton.dataset.plato = nombre;

        if (estadosPlatos[nombre]) {

            boton.style.background = "#e53935";
            boton.style.color = "white";
            boton.innerHTML = `🔴 ${nombre}<br>Ocupado`;
            boton.disabled = true;

        } else {

            boton.style.background = "#43a047";
            boton.style.color = "white";
            boton.innerHTML = `🟢 ${nombre}<br>Libre`;
            boton.disabled = false;

        }

    });

}

// =====================================
// SELECCIONAR PLATO
// =====================================

document.querySelectorAll(".botonPlato").forEach(boton => {

    boton.addEventListener("click", async () => {

        const nombre = boton.dataset.plato;

        try {

            await ocuparPlato(nombre);

            platoSeleccionado = nombre;

            document.getElementById("platoActual").innerText =
                "Lugar seleccionado: " + platoSeleccionado;

            alert("Seleccionaste: " + platoSeleccionado);

        } catch (error) {

            console.error(error);
            alert("No se pudo ocupar el plato.");

        }

    });

});

// =====================================
// MOSTRAR CARRITO
// =====================================

function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("total");

    lista.innerHTML = "";

    let suma = 0;

    if (carrito.length === 0) {
        lista.innerHTML = "<p>Tu carrito está vacío</p>";
    } else {

        carrito.forEach(producto => {

            const subtotal = producto.precio * producto.cantidad;
            suma += subtotal;

            lista.innerHTML += `
                <p>
                    ${producto.cantidad} x ${producto.nombre}
                    = $${subtotal}
                </p>
            `;

        });

    }

    total.innerText = "$" + suma;

}

// =====================================
// MOSTRAR TACOS
// =====================================

function cargarTacos() {

    const contenedor = document.getElementById("tacos");

    contenedor.innerHTML = "";

    tacos.forEach((taco) => {

        contenedor.innerHTML += `

        <div class="producto">

            <div class="infoProducto">

                <h3>🌮 ${taco.nombre}</h3>

                <p>$${taco.precio}</p>

            </div>

            <div class="controles">

                <button
                    class="btnMenos"
                    onclick="quitarProducto('${taco.nombre}')">
                    -
                </button>

                <span
                    class="cantidad"
                    id="cantidad-${taco.nombre}">
                    0
                </span>

                <button
                    class="btnMas"
                    onclick="agregarProducto('${taco.nombre}', ${taco.precio})">
                    +
                </button>

            </div>

        </div>

        `;

    });

}

// =====================================
// AGREGAR PRODUCTO
// =====================================

window.agregarProducto = function(nombre, precio) {

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {

        producto.cantidad++;

    } else {

        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });

    }

    actualizarCantidad(nombre);
    actualizarCarrito();

};

// =====================================
// QUITAR PRODUCTO
// =====================================

window.quitarProducto = function(nombre) {

    let producto = carrito.find(p => p.nombre === nombre);

    if (!producto) return;

    producto.cantidad--;

    if (producto.cantidad <= 0) {

        carrito = carrito.filter(p => p.nombre !== nombre);

    }

    actualizarCantidad(nombre);
    actualizarCarrito();

};

// =====================================
// ACTUALIZAR CANTIDAD
// =====================================

function actualizarCantidad(nombre) {

    const elemento = document.getElementById("cantidad-" + nombre);

    if (!elemento) return;

    const producto = carrito.find(p => p.nombre === nombre);

    elemento.innerText = producto ? producto.cantidad : 0;

}

// =====================================
// CARGAR TACOS
// =====================================

cargarTacos();

// =====================================
// MOSTRAR GRINGAS
// =====================================

function cargarGringas() {

    const contenedor = document.getElementById("gringas");

    contenedor.innerHTML = `

    <div class="producto">

        <div class="infoProducto">

            <h3>🫓 Gringa</h3>

            <p>$50</p>

            <select id="carneGringa">
                ${carnes.map(carne =>
                    `<option value="${carne}">${carne}</option>`
                ).join("")}
            </select>

        </div>

        <div class="controles">

            <button class="btnMenos"
                onclick="quitarGringa()">
                -
            </button>

            <span
                class="cantidad"
                id="cantidad-Gringa">
                0
            </span>

            <button class="btnMas"
                onclick="agregarGringa()">
                +
            </button>

        </div>

    </div>

    `;

}

window.agregarGringa = function () {

    const carne = document.getElementById("carneGringa").value;
    const nombre = "Gringa de " + carne;

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio: 50,
            cantidad: 1
        });
    }

    actualizarCantidad("Gringa");
    actualizarCarrito();

}

window.quitarGringa = function () {

    const carne = document.getElementById("carneGringa").value;
    quitarProducto("Gringa de " + carne);

    actualizarCantidad("Gringa");

}

// =====================================
// MOSTRAR LONCHES
// =====================================

function cargarLonches() {

    const contenedor = document.getElementById("lonches");

    contenedor.innerHTML = `

    <div class="producto">

        <div class="infoProducto">

            <h3>🥪 Lonche</h3>

            <select id="tipoLonche">

                <option value="65">
                    Lonche normal $65
                </option>

                <option value="75">
                    Lonche con queso $75
                </option>

            </select>

            <select id="carneLonche">

                ${carnes.map(carne =>
                    `<option value="${carne}">${carne}</option>`
                ).join("")}

            </select>

        </div>

        <div class="controles">

            <button class="btnMenos"
                onclick="quitarLonche()">
                -
            </button>

            <span
                class="cantidad"
                id="cantidad-Lonche">
                0
            </span>

            <button class="btnMas"
                onclick="agregarLonche()">
                +
            </button>

        </div>

    </div>

    `;

}

window.agregarLonche = function () {

    const precio = Number(document.getElementById("tipoLonche").value);
    const carne = document.getElementById("carneLonche").value;

    const tipo = precio === 75
        ? "Lonche con queso"
        : "Lonche";

    const nombre = tipo + " de " + carne;

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio,
            cantidad: 1
        });
    }

    actualizarCantidad("Lonche");
    actualizarCarrito();

}

window.quitarLonche = function () {

    const precio = Number(document.getElementById("tipoLonche").value);
    const carne = document.getElementById("carneLonche").value;

    const tipo = precio === 75
        ? "Lonche con queso"
        : "Lonche";

    quitarProducto(tipo + " de " + carne);

    actualizarCantidad("Lonche");

}

// =====================================
// MOSTRAR QUESADILLAS
// =====================================

function cargarQuesadillas() {

    const contenedor = document.getElementById("quesadillas");

    contenedor.innerHTML = `

    <div class="producto">

        <div class="infoProducto">

            <h3>🧀 Quesadilla sencilla</h3>

            <p>$20</p>

        </div>

        <div class="controles">

            <button class="btnMenos"
                onclick="quitarProducto('Quesadilla sencilla')">
                -
            </button>

            <span
                class="cantidad"
                id="cantidad-Quesadilla sencilla">
                0
            </span>

            <button class="btnMas"
                onclick="agregarProducto('Quesadilla sencilla',20)">
                +
            </button>

        </div>

    </div>

    <div class="producto">

        <div class="infoProducto">

            <h3>🧀 Quesadilla con carne</h3>

            <p>$30</p>

            <select id="carneQuesadilla">

                ${carnes.map(carne =>
                    `<option value="${carne}">${carne}</option>`
                ).join("")}

            </select>

        </div>

        <div class="controles">

            <button class="btnMenos"
                onclick="quitarQuesadilla()">
                -
            </button>

            <span
                class="cantidad"
                id="cantidad-Quesadilla con carne">
                0
            </span>

            <button class="btnMas"
                onclick="agregarQuesadilla()">
                +
            </button>

        </div>

    </div>

    `;

}

window.agregarQuesadilla = function () {

    const carne = document.getElementById("carneQuesadilla").value;
    const nombre = "Quesadilla de " + carne;

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio: 30,
            cantidad: 1
        });
    }

    actualizarCantidad("Quesadilla con carne");
    actualizarCarrito();

}

window.quitarQuesadilla = function () {

    const carne = document.getElementById("carneQuesadilla").value;

    quitarProducto("Quesadilla de " + carne);

    actualizarCantidad("Quesadilla con carne");

}

// =====================================
// CARGAR SECCIONES
// =====================================

cargarGringas();
cargarLonches();
cargarQuesadillas();

// =====================================
// MOSTRAR VOLCANES
// =====================================

function cargarVolcanes() {

    const contenedor = document.getElementById("volcanes");

    contenedor.innerHTML = `

    <div class="producto">

        <div class="infoProducto">

            <h3>🌋 Volcán</h3>

            <select id="carneVolcan">

                ${carnes.map(carne => `
                    <option value="${carne}">
                        ${carne}
                    </option>
                `).join("")}

                <option value="Tripa">Tripa</option>

            </select>

            <p>
                Precio normal $35<br>
                Tripa $40
            </p>

        </div>

        <div class="controles">

            <button class="btnMenos" onclick="quitarVolcan()">-</button>

            <span
                class="cantidad"
                id="cantidad-Volcan">
                0
            </span>

            <button class="btnMas" onclick="agregarVolcan()">+</button>

        </div>

    </div>

    `;

}

window.agregarVolcan = function () {

    const carne = document.getElementById("carneVolcan").value;

    const precio = carne === "Tripa" ? 40 : 35;

    const nombre = "Volcán de " + carne;

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio,
            cantidad: 1
        });
    }

    actualizarCantidad("Volcan");
    actualizarCarrito();

}

window.quitarVolcan = function () {

    const carne = document.getElementById("carneVolcan").value;

    quitarProducto("Volcán de " + carne);

    actualizarCantidad("Volcan");

}

// =====================================
// BEBIDAS
// =====================================

function cargarBebidas() {

    const contenedor = document.getElementById("bebidas");

    contenedor.innerHTML = `

    <div class="producto">

        <div class="infoProducto">

            <h3>🥤 Agua fresca</h3>

            <select id="saborAgua">

                ${aguas.map(agua => `
                    <option value="${agua}">
                        ${agua}
                    </option>
                `).join("")}

            </select>

            <p>$35</p>

        </div>

        <div class="controles">

            <button class="btnMenos" onclick="quitarAgua()">-</button>

            <span
                class="cantidad"
                id="cantidad-Agua">
                0
            </span>

            <button class="btnMas" onclick="agregarAgua()">+</button>

        </div>

    </div>

    <div class="producto">

        <div class="infoProducto">

            <h3>🥤 Coca</h3>

            <p>$26</p>

        </div>

        <div class="controles">

            <button class="btnMenos"
                onclick="quitarProducto('Coca')">-</button>

            <span
                class="cantidad"
                id="cantidad-Coca">
                0
            </span>

            <button class="btnMas"
                onclick="agregarProducto('Coca',26)">+</button>

        </div>

    </div>

    `;

}

window.agregarAgua = function () {

    const sabor = document.getElementById("saborAgua").value;

    const nombre = "Agua " + sabor;

    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio: 35,
            cantidad: 1
        });
    }

    actualizarCantidad("Agua");
    actualizarCarrito();

}

window.quitarAgua = function () {

    const sabor = document.getElementById("saborAgua").value;

    quitarProducto("Agua " + sabor);

    actualizarCantidad("Agua");

}

// =====================================
// CARGAR
// =====================================

cargarVolcanes();
cargarBebidas();

// =====================================
// ENVIAR PEDIDO
// =====================================

document.getElementById("enviarPedido").addEventListener("click", async () => {

    if (platoSeleccionado === "") {
        alert("Selecciona un plato.");
        return;
    }

    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    const nombre = document.getElementById("nombreCliente").value.trim();

    if (nombre === "") {
        alert("Escribe el nombre del cliente.");
        return;
    }

    const total = carrito.reduce(
        (suma, p) => suma + (p.precio * p.cantidad),
        0
    );

    const pedido = {
        plato: platoSeleccionado,
        cliente: nombre,
        productos: carrito,
        total,
        estado: "Preparando",
        fecha: new Date().toLocaleString()
    };

    try {

        await guardarPedido(pedido);

        alert("✅ Pedido enviado correctamente.");

        carrito = [];

        document.querySelectorAll(".cantidad").forEach(e => {
            e.innerText = "0";
        });

        actualizarCarrito();

        document.getElementById("nombreCliente").value = "";

    } catch (error) {

        console.error(error);

        alert("Error al enviar el pedido.");

    }

});
