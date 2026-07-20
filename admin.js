console.log("Admin Tacos Milo iniciado");


let contenedor = document.getElementById("ordenesAdmin");


for(let mesa = 1; mesa <= 4; mesa++){


    let orden = JSON.parse(
        localStorage.getItem("orden_" + mesa)
    );


    let estado = localStorage.getItem(
        "estado_" + mesa
    ) || "Pendiente";


    if(orden && orden.length > 0){


        let html = `

        <div class="tarjetaMesa">

        <h2>
        Mesa ${mesa}
        </h2>

        <h3>
        Estado: ${estado}
        </h3>

        `;


        orden.forEach(producto => {


            let subtotal =
            producto.precio * producto.cantidad;


            html += 
            producto.cantidad +
            " x " +
            producto.nombre +
            " $" +
            subtotal +
            "<br>";


        });



        html += `

        <br>

        <button onclick="cambiarEstado(${mesa}, 'Preparando')">
        🔥 Preparando
        </button>


        <button onclick="cambiarEstado(${mesa}, 'Entregado')">
        🟢 Entregado
        </button>


        <button onclick="cerrarMesa(${mesa})">
        🗑️ Cerrar mesa
        </button>


        </div>

        `;


        contenedor.innerHTML += html;


    }

}




function cambiarEstado(mesa, estado){


    localStorage.setItem(
        "estado_" + mesa,
        estado
    );


    location.reload();


}



function cerrarMesa(mesa){


    localStorage.removeItem(
        "orden_" + mesa
    );


    localStorage.removeItem(
        "estado_" + mesa
    );


    location.reload();


}
