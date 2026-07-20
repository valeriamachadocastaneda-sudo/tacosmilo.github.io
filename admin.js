console.log("Admin Tacos Milo iniciado");


let contenedor = document.getElementById("ordenesAdmin");


for(let mesa = 1; mesa <= 4; mesa++){


    let orden = JSON.parse(
        localStorage.getItem("orden_" + mesa)
    );


    if(orden && orden.length > 0){


        let html = "<h2>Mesa " + mesa + "</h2>";


        orden.forEach(producto => {


            let subtotal = producto.precio * producto.cantidad;


            html += 
            producto.cantidad +
            " x " +
            producto.nombre +
            " $" +
            subtotal +
            "<br>";

        });


        contenedor.innerHTML += html;


    }

}
