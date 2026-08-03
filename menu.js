import { guardarPedido } from "./firebase.js";


let carrito = [];



// ==========================
// AGREGAR PRODUCTOS
// ==========================

window.agregar = function(nombre, precio){


    carrito.push({

        nombre:nombre,
        precio:precio

    });


    mostrarCarrito();

};




// ==========================
// MOSTRAR CARRITO
// ==========================


function mostrarCarrito(){


    let lista = document.getElementById("listaCarrito");

    let total = document.getElementById("total");



    lista.innerHTML="";


    let suma = 0;



    if(carrito.length === 0){

        lista.innerHTML="Vacío";

    }



    carrito.forEach((producto,index)=>{


        suma += producto.precio;



        lista.innerHTML += `

        <p>

        ${producto.nombre} - $${producto.precio}

        <button onclick="eliminar(${index})">

        ❌

        </button>

        </p>

        `;


    });



    total.innerHTML=suma;


}





// ==========================
// ELIMINAR PRODUCTO
// ==========================


window.eliminar=function(index){


    carrito.splice(index,1);


    mostrarCarrito();


};






// ==========================
// ENVIAR PEDIDO
// ==========================


window.enviarPedido=function(){



    if(carrito.length===0){

        alert("Agrega productos primero");

        return;

    }



    let nombre = document.getElementById("nombre").value;


    let tipo = document.getElementById("tipo").value;


    let mesa = document.getElementById("mesa").value;



    let total = carrito.reduce(

        (suma,p)=>suma+p.precio,

        0

    );



    let pedido={


        cliente:nombre,

        tipo:tipo,

        mesa:mesa,


        productos:carrito,


        total:total,


        fecha:new Date().toLocaleString()


    };





    guardarPedido(pedido)

    .then(()=>{


        alert("Pedido enviado correctamente 🌮");



        enviarWhatsApp(pedido);



        carrito=[];

        mostrarCarrito();



    })

    .catch(error=>{


        console.log(error);

        alert("Error al enviar pedido");


    });



};






// ==========================
// WHATSAPP
// ==========================


function enviarWhatsApp(pedido){



let texto = 

`🌮 *PEDIDO TACOS MILO*

Cliente:
${pedido.cliente}

Tipo:
${pedido.tipo}

Mesa:
${pedido.mesa}


Productos:
`;



pedido.productos.forEach(p=>{


texto += `

${p.nombre} $${p.precio}

`;

});



texto += `

TOTAL:
$${pedido.total}

`;



// Cambia este número por el WhatsApp del negocio

let numero="521XXXXXXXXXX";



let url = 

"https://wa.me/"+numero+"?text="+encodeURIComponent(texto);



window.open(url,"_blank");


}
