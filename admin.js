// =====================================
// TACOS MILO V3
// ADMIN.JS
// PARTE 1
// =====================================


import { 
    escucharPedidos,
    cambiarEstado,
    eliminarPedido

} from "./firebase.js";





// =====================================
// CARGAR PEDIDOS
// =====================================


function cargarPedidos(){



    escucharPedidos((pedidos)=>{



        const panel = document.getElementById(

            "panelPedidos"

        );



        panel.innerHTML = "";





        if(Object.keys(pedidos).length===0){


            panel.innerHTML =

            "No hay pedidos";


            return;


        }







        Object.keys(pedidos).forEach(id=>{



            let pedido = pedidos[id];



            let productos="";





            pedido.productos.forEach(producto=>{



                productos += `


                <p>

                ${producto.cantidad}

                x

                ${producto.nombre}

                <br>

                $${producto.precio * producto.cantidad}

                </p>


                `;


            });








            panel.innerHTML += `



            <div class="seccion">



            <h2>

            🍽 ${pedido.plato}

            </h2>





            <h3>

            Estado:

            ${pedido.estado}

            </h3>





            <p>

            👤 Cliente:

            ${pedido.cliente}

            </p>





            <hr>



            ${productos}





            <h2>

            Total:

            $${pedido.total}

            </h2>





            <button

            onclick="marcarListo('${id}')">

            ✅ Listo

            </button>





            <button

            onclick="liberarPlato('${id}')">

            🗑 Liberar plato

            </button>





            </div>


            `;





        });





    });




}








// iniciar

cargarPedidos();

// =====================================
// MARCAR PEDIDO COMO LISTO
// =====================================


window.marcarListo = async function(id){



    try{


        await cambiarEstado(

            id,

            "Listo"

        );



        alert(

        "Pedido listo ✅"

        );


    }


    catch(error){



        console.log(error);



        alert(

        "Error cambiando estado"

        );


    }



};








// =====================================
// LIBERAR PLATO
// =====================================


window.liberarPlato = async function(id){



    let confirmar = confirm(

    "¿Liberar este plato?"

    );




    if(!confirmar){

        return;

    }






    try{


        await eliminarPedido(id);



        alert(

        "Plato liberado 🍽"

        );



    }



    catch(error){



        console.log(error);



        alert(

        "Error liberando plato"

        );


    }



};
