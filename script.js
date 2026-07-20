console.log("Tacos Milo iniciado");


let mesaActual = "";


function seleccionarMesa(mesa){

    mesaActual = mesa;

    console.log("Mesa seleccionada:", mesaActual);

    localStorage.setItem("mesa", mesaActual);

}
