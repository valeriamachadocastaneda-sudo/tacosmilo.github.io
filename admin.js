import { escucharPedidos } from "./firebase.js";

import { 
    getDatabase,
    ref,
    update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// =================================
// CARGAR PEDIDOS
// =================================


window.cargarPedidos = function(){


    escucharPedidos((datos)=>{


        const contenedor = document.getElementById(
            "pedidos"
        );



        contenedor.innerHTML = "";



        if(!datos){


            contenedor.innerHTML =
            "No hay pedidos todavía";


            return;


        }





        Object.keys(datos).forEach(id=>{


            const pedido = datos[id];



            let productos = "";



            pedido.productos.forEach(producto=>{



                productos += `

                <p>

                ${producto.cantidad} x 
                ${producto.nombre}

                <br>

                $${producto.precio * producto.cantidad}

                </p>

                `;



            });






            contenedor.innerHTML += `


            <div class="pedido">


                <h3>
                🌮 Pedido
                </h3>


                <p>

                <b>Cliente:</b>

                ${pedido.cliente}

                </p>



                <p>

                <b>Tipo:</b>

                ${pedido.tipo}

                </p>



                ${
                    pedido.mesa

                    ?

                    `<p>

                    <b>Mesa:</b>

                    ${pedido.mesa}

                    </p>`

                    :

                    ""

                }





                <hr>


                <h4>
                Productos:
                </h4>



                ${productos}




                <hr>


                <h3>

                Total:

                $${pedido.total}

                </h3>




                <small>

                ${pedido.fecha}

                </small>




            </div>


            `;




        });



    });

// =================================
// CAMBIAR ESTADO DEL PEDIDO
// =================================


import { 
    getDatabase,
    ref,
    update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";




// =================================
// MARCAR COMO LISTO
// =================================


window.marcarListo=function(id){



    const database = getDatabase();



    const pedidoRef = ref(

        database,

        "pedidos/"+id

    );



    update(

        pedidoRef,

        {

            estado:"Listo"

        }

    )

    .then(()=>{


        alert(

        "Pedido marcado como listo ✅"

        );


    })

    .catch(error=>{


        console.log(error);


    });



};





// =================================
// ACTUALIZAR VISUALIZACION
// =================================


function mostrarEstado(estado){



    if(estado==="Listo"){


        return "🟢 Listo";


    }



    else{


        return "🟡 Preparando";


    }


}

};
