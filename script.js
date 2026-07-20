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


    orden.push({

        nombre:nombre,

        precio:precio

    });


    total = total + precio;


    mostrarOrden();

}




function mostrarOrden(){

    let lista = document.getElementById("listaOrden");

    let totalTexto = document.getElementById("total");


    if(lista){


        lista.innerHTML = "";


        orden.forEach(producto => {


            lista.innerHTML += 
            producto.nombre + " $" + producto.precio + "<br>";


        });


        totalTexto.innerHTML = "Total: $" + total;


    }

}
