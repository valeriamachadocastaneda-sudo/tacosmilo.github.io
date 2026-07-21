console.log("Tacos Milo iniciado");


// GUARDAR MESA

let mesaActual = "";


function seleccionarMesa(mesa){

    mesaActual = mesa;

    console.log("Mesa seleccionada:", mesaActual);

    localStorage.setItem("mesa", mesaActual);

    window.location.href = "menu.html";

}



// MOSTRAR MESA EN MENU

let mesaGuardada = localStorage.getItem("mesa");


let textoMesa = document.getElementById("mesaTexto");


if(textoMesa){

    textoMesa.innerHTML = "Mesa: " + mesaGuardada;

}


let orden = JSON.parse(localStorage.getItem("orden_" + mesaGuardada)) || [];

let total = 0;



function agregarProducto(nombre, precio){

    console.log("Producto agregado:", nombre);


    let productoExistente = orden.find(producto => producto.nombre === nombre);


    if(productoExistente){

        productoExistente.cantidad++;

    }else{

        orden.push({

            nombre:nombre,

            precio:precio,

            cantidad:1

        });

    }


    mostrarOrden();

    guardarOrden();

}

function sumarProducto(nombre){

    let producto = orden.find(p => p.nombre === nombre);

    producto.cantidad++;

    mostrarOrden();

    guardarOrden();

}



function restarProducto(nombre){

    let producto = orden.find(p => p.nombre === nombre);


    if(producto.cantidad > 1){

        producto.cantidad--;

    }else{

        orden = orden.filter(p => p.nombre !== nombre);

    }


    mostrarOrden();

    guardarOrden();

}

function guardarOrden(){

    // Guardar en localStorage
    localStorage.setItem(
        "orden_" + mesaGuardada,
        JSON.stringify(orden)
    );

    // Guardar en Firebase
database.ref("pedidos/" + mesaGuardada).set({

        mesa: mesaGuardada,

        productos: orden,

        fecha: Date.now()

    });

}
function mostrarOrden(){

    let lista = document.getElementById("listaOrden");

    let totalTexto = document.getElementById("total");


    if(lista){


        lista.innerHTML = "";


   let totalCalculado = 0;


orden.forEach(producto => {


    let subtotal = producto.precio * producto.cantidad;


    totalCalculado += subtotal;


lista.innerHTML += 
producto.cantidad + " x " + producto.nombre +
" $" + subtotal +
` <button onclick="sumarProducto('${producto.nombre}')">+</button>
<button onclick="restarProducto('${producto.nombre}')">-</button>
<br>`;


});


totalTexto.innerHTML = "Total: $" + totalCalculado;


    }

}
