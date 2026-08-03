import { escucharPedidos } from "./firebase.js";



// ==========================
// CARGAR PEDIDOS
// ==========================


window.cargarPedidos=function(){


    escucharPedidos((datos)=>{


        let contenedor = document.getElementById("pedidos");



        contenedor.innerHTML="";



        if(!datos){


            contenedor.innerHTML="No hay pedidos";

            return;


        }



        Object.keys(datos).forEach(id=>{


            let pedido = datos[id];



            let productos="";



            pedido.productos.forEach(p=>{


                productos += `

                ${p.nombre} - $${p.precio}
                
                `;


            });





            contenedor.innerHTML += `


            <div class="producto">


            <h3>🌮 Pedido</h3>


            <p>
            Cliente:
            ${pedido.cliente}
            </p>


            <p>
            Tipo:
            ${pedido.tipo}
            </p>


            <p>
            Mesa:
            ${pedido.mesa}
            </p>


            <p>
            Productos:
            <br>
            ${productos}
            </p>


            <p>
            Total:
            $${pedido.total}
            </p>


            <p>
            Fecha:
            ${pedido.fecha}
            </p>



            </div>


            `;



        });



    });



};






// ==========================
// PROMOCIÓN
// ==========================


window.guardarPromo=function(){


    let texto =
    document.getElementById("nuevaPromo").value;



    if(texto.trim()===""){


        alert("Escribe una promoción");

        return;


    }



    localStorage.setItem(

        "promo",

        texto

    );



    alert(

        "Promoción guardada 🌮"

    );



};
