console.log("Tacos Milo iniciado");


let mesaActual = "";


function seleccionarMesa(mesa){

    mesaActual = mesa;

    console.log("Mesa seleccionada:", mesaActual);

    localStorage.setItem("mesa", mesaActual);

    window.location.href = "menu.html";

}


// Mostrar mesa en menú

let mesaGuardada = localStorage.getItem("mesa");

console.log("Mesa guardada:", mesaGuardada);

let textoMesa = document.getElementById("mesaTexto");


if(textoMesa){

    textoMesa.innerHTML = "Mesa: " + mesaGuardada;

}
