// =====================================
// TACOS MILO 🌮
// menu.js
// Parte 1
// =====================================


// CARRITO

let carrito = JSON.parse(

    localStorage.getItem(
        "carritoTacosMilo"
    )

) || [];





// PRODUCTOS INICIALES

let productos = JSON.parse(

    localStorage.getItem(
        "productosTacosMilo"
    )

) || [

    {
        id:1,
        nombre:"Taco de pastor",
        precio:18,
        imagen:"imagenes/pastor.png"
    },

    {
        id:2,
        nombre:"Taco de tripa",
        precio:22,
        imagen:"imagenes/tripa.png"
    },

    {
        id:3,
        nombre:"Gringa",
        precio:50,
        imagen:"imagenes/gringa.png"
    },

    {
        id:4,
        nombre:"Lonche",
        precio:65,
        imagen:"imagenes/lonche.png"
    },

    {
        id:5,
        nombre:"Quesadilla sencilla",
        precio:20,
        imagen:"imagenes/quesadilla.png"
    },

    {
        id:6,
        nombre:"Quesadilla con carne",
        precio:30,
        imagen:"imagenes/quesadilla_carne.png"
    },

    {
        id:7,
        nombre:"Volcán",
        precio:35,
        imagen:"imagenes/volcan.png"
    },

    {
        id:8,
        nombre:"Coca-Cola",
        precio:26,
        imagen:"imagenes/coca.png"
    },

    {
        id:9,
        nombre:"Agua fresca",
        precio:35,
        imagen:"imagenes/agua.png"
    }

];


// =====================================
// MOSTRAR MENÚ 🌮
// =====================================


function mostrarMenu(){


    let contenedor = document.getElementById(
        "menu"
    );


    if(!contenedor) return;



    contenedor.innerHTML = "";



    productos.forEach((producto)=>{


        contenedor.innerHTML += `


        <div class="producto">


            <img 
            src="${producto.imagen}"
            alt="${producto.nombre}">


            <h3>

            ${producto.nombre}

            </h3>



            <p>

            $${producto.precio}

            </p>



            <button onclick="agregarCarrito(${producto.id})">

                Agregar 🛒

            </button>


        </div>


        `;


    });


}







// =====================================
// AGREGAR AL CARRITO 🛒
// =====================================


function agregarCarrito(id){


    let producto = productos.find(

        p => p.id === id

    );



    let existe = carrito.find(

        p => p.id === id

    );



    if(existe){


        existe.cantidad++;


    }else{


        carrito.push({


            id:producto.id,


            nombre:producto.nombre,


            precio:producto.precio,


            cantidad:1


        });


    }



    guardarCarrito();



    mostrarCarrito();


}







// =====================================
// GUARDAR CARRITO
// =====================================


function guardarCarrito(){


    localStorage.setItem(

        "carritoTacosMilo",

        JSON.stringify(carrito)

    );


}


// =====================================
// MOSTRAR CARRITO 🛒
// =====================================


function mostrarCarrito(){


    let caja = document.getElementById(
        "carrito"
    );


    if(!caja) return;



    caja.innerHTML = "";



    let total = 0;



    carrito.forEach((producto)=>{


        total += producto.precio * producto.cantidad;



        caja.innerHTML += `


        <div class="dato">


            <h3>

            ${producto.nombre}

            </h3>



            <p>

            Cantidad:
            ${producto.cantidad}

            <br><br>


            Precio:
            $${producto.precio * producto.cantidad}

            </p>



            <button onclick="sumarProducto(${producto.id})">

                +

            </button>



            <button onclick="restarProducto(${producto.id})">

                -

            </button>


        </div>


        `;


    });





    caja.innerHTML += `


    <h2>

    Total: $${total}

    </h2>


    `;


}








// =====================================
// SUMAR PRODUCTO ➕
// =====================================


function sumarProducto(id){


    let producto = carrito.find(

        p=>p.id===id

    );



    if(producto){


        producto.cantidad++;


    }



    guardarCarrito();


    mostrarCarrito();


}







// =====================================
// RESTAR PRODUCTO ➖
// =====================================


function restarProducto(id){


    let producto = carrito.find(

        p=>p.id===id

    );



    if(producto){


        producto.cantidad--;


    }




    carrito = carrito.filter(

        p=>p.cantidad>0

    );



    guardarCarrito();


    mostrarCarrito();


}


// =====================================
// ENVIAR PEDIDO 📲
// =====================================


function enviarPedido(){


    let nombre = document.getElementById(
        "nombreCliente"
    ).value;



    let tipoPedido = document.getElementById(
        "tipoPedido"
    ).value;




    if(carrito.length === 0){


        alert(
            "El carrito está vacío 🌮"
        );


        return;


    }




    let productosTexto = "";



    let total = 0;



    carrito.forEach((producto)=>{


        productosTexto +=

        `${producto.nombre} x${producto.cantidad}%0A`;



        total += producto.precio * producto.cantidad;



    });






    let pedido = {


        nombre:nombre,


        tipo:tipoPedido,


        productos:productosTexto,


        total:total,


        pago:"Transferencia",


        fecha:new Date().toLocaleString()


    };






    // GUARDAR EN FIREBASE

    guardarPedidoFirebase(pedido);






    // GUARDAR LOCALMENTE

    let pedidos = JSON.parse(

        localStorage.getItem(
            "pedidosTacosMilo"
        )

    ) || [];



    pedidos.push(pedido);



    localStorage.setItem(

        "pedidosTacosMilo",

        JSON.stringify(pedidos)

    );






    // MENSAJE WHATSAPP


    let mensaje =

    `🌮 *Pedido Tacos Milo* 🌮%0A%0A` +

    `👤 Cliente: ${nombre}%0A` +

    `🍽️ Tipo: ${tipoPedido}%0A%0A` +

    productosTexto +

    `%0A💰 Total: $${total}%0A` +

    `💳 Pago: Transferencia`;




    window.open(

        "https://wa.me/?text=" + mensaje

    );




    carrito = [];



    guardarCarrito();


    mostrarCarrito();



}


// =====================================
// MOSTRAR PROMOCIÓN 🎉
// =====================================


function mostrarPromocion(){


    let caja = document.getElementById(
        "promocion"
    );



    if(!caja) return;



    let promo = localStorage.getItem(

        "promoTacosMilo"

    );



    if(promo){


        caja.innerHTML = `

        🎉 ${promo}

        `;


        caja.style.display="block";


    }else{


        caja.style.display="none";


    }


}







// =====================================
// MOSTRAR SABORES DE AGUA 🥤
// =====================================


function mostrarAguas(){


    let caja = document.getElementById(

        "saboresAgua"

    );



    if(!caja)return;



    let aguas = JSON.parse(

        localStorage.getItem(

            "aguasTacosMilo"

        )

    ) || [

        "Jamaica",
        "Horchata",
        "Limón"

    ];



    caja.innerHTML="";



    aguas.forEach((agua)=>{


        caja.innerHTML += `


        <option>

        ${agua}

        </option>


        `;


    });


}








// =====================================
// INICIAR MENÚ 🌮
// =====================================


window.onload=function(){


    mostrarMenu();


    mostrarCarrito();


    mostrarPromocion();


    mostrarAguas();



    if(
        typeof escucharProductos === "function"
    ){

        escucharProductos();

    }



};
