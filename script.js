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



// ORDEN

let orden = [];

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
    " $" + subtotal + "<br>";


});


totalTexto.innerHTML = "Total: $" + totalCalculado;


        totalTexto.innerHTML = "Total: $" + total;


    }

}
