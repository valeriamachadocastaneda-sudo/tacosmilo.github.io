// =====================================
// TACOS MILO 🌮
// admin.js
// Parte 1
// =====================================



// CONTRASEÑA DEL ADMIN

const claveCorrecta = "tacosmilo123";




// ENTRAR AL PANEL ADMIN

function entrarAdmin(){


    let clave = document.getElementById("claveAdmin").value;



    if(clave === claveCorrecta){


        document.getElementById("panelAdmin").style.display = "block";


        localStorage.setItem(
            "adminTacosMilo",
            "activo"
        );


        cargarDatosAdmin();



    }else{


        alert(
            "Contraseña incorrecta"
        );


    }


}






// COMPROBAR SI YA ESTÁ INICIADO

window.onload = function(){


    if(
        localStorage.getItem("adminTacosMilo")
        ===
        "activo"
    ){


        let panel = document.getElementById(
            "panelAdmin"
        );


        if(panel){

            panel.style.display="block";

        }


        cargarDatosAdmin();


    }


};


// =====================================
// PROMOCIONES 🎉
// =====================================


function guardarPromo(){


    let promo = document.getElementById(
        "promoTexto"
    ).value;



    localStorage.setItem(
        "promoTacosMilo",
        promo
    );


    alert(
        "Promoción guardada 🌮"
    );


}







// =====================================
// AGUAS FRESCAS 🥤
// =====================================



let saboresAgua = JSON.parse(

    localStorage.getItem(
        "aguasTacosMilo"
    )

) || [

    "Jamaica",
    "Horchata",
    "Limón"

];





function agregarSabor(){


    let nuevo = document.getElementById(
        "nuevoSabor"
    ).value;



    if(nuevo.trim() === ""){

        alert(
            "Escribe un sabor"
        );

        return;

    }



    saboresAgua.push(nuevo);



    localStorage.setItem(

        "aguasTacosMilo",

        JSON.stringify(saboresAgua)

    );



    document.getElementById(
        "nuevoSabor"
    ).value="";



    mostrarAguas();


}







function mostrarAguas(){


    let lista = document.getElementById(
        "listaAguas"
    );


    if(!lista)return;



    lista.innerHTML="";



    saboresAgua.forEach((agua,index)=>{


        lista.innerHTML += `

        <p>

        🥤 ${agua}

        <button onclick="eliminarAgua(${index})">

        ❌

        </button>

        </p>

        `;


    });


}





function eliminarAgua(index){


    saboresAgua.splice(
        index,
        1
    );



    localStorage.setItem(

        "aguasTacosMilo",

        JSON.stringify(saboresAgua)

    );



    mostrarAguas();


}


// =====================================
// PRODUCTOS 🌮
// =====================================



let productosAdmin = JSON.parse(

    localStorage.getItem(
        "productosTacosMilo"
    )

) || [

    {
        nombre:"Taco de pastor",
        precio:18
    },

    {
        nombre:"Taco de tripa",
        precio:22
    },

    {
        nombre:"Gringa",
        precio:50
    },

    {
        nombre:"Lonche",
        precio:65
    },

    {
        nombre:"Quesadilla sencilla",
        precio:20
    },

    {
        nombre:"Quesadilla con carne",
        precio:30
    },

    {
        nombre:"Volcán",
        precio:35
    },

    {
        nombre:"Coca-Cola",
        precio:26
    },

    {
        nombre:"Agua fresca",
        precio:35
    }

];





function agregarProducto(){


    let nombre = document.getElementById(
        "nombreProducto"
    ).value;



    let precio = Number(
        document.getElementById(
            "precioProducto"
        ).value
    );



    if(
        nombre === "" ||
        precio <= 0
    ){

        alert(
            "Completa los datos"
        );

        return;

    }



    productosAdmin.push({

        nombre:nombre,

        precio:precio

    });



    guardarProductos();



    document.getElementById(
        "nombreProducto"
    ).value="";



    document.getElementById(
        "precioProducto"
    ).value="";



    mostrarProductos();


}





function guardarProductos(){


    localStorage.setItem(

        "productosTacosMilo",

        JSON.stringify(productosAdmin)

    );


}


// =====================================
// MOSTRAR PRODUCTOS ADMIN 🌮
// =====================================


function mostrarProductos(){


    let lista = document.getElementById(
        "listaProductos"
    );


    if(!lista)return;



    lista.innerHTML="";



    productosAdmin.forEach((producto,index)=>{


        lista.innerHTML += `


        <div class="dato">


            <p>

            🌮 ${producto.nombre}

            <br>

            💲 $${producto.precio}

            </p>



            <button onclick="eliminarProducto(${index})">

                Eliminar ❌

            </button>


        </div>


        `;


    });


}





function eliminarProducto(index){


    productosAdmin.splice(

        index,

        1

    );



    guardarProductos();



    mostrarProductos();


}






// =====================================
// CARGAR TODO EL PANEL
// =====================================


function cargarDatosAdmin(){


    mostrarProductos();


    mostrarAguas();



    let promoGuardada = localStorage.getItem(

        "promoTacosMilo"

    );



    if(promoGuardada){


        let caja = document.getElementById(
            "promoTexto"
        );


        if(caja){

            caja.value = promoGuardada;

        }


    }


}






// =====================================
// CERRAR SESIÓN
// =====================================


function salirAdmin(){


    localStorage.removeItem(

        "adminTacosMilo"

    );



    location.reload();


}


// =====================================
// PEDIDOS RECIBIDOS 📦
// =====================================


function cargarPedidos(){


    let pedidos = JSON.parse(

        localStorage.getItem(
            "pedidosTacosMilo"
        )

    ) || [];



    let lista = document.getElementById(
        "listaPedidos"
    );


    if(!lista)return;



    lista.innerHTML="";



    if(pedidos.length === 0){


        lista.innerHTML = `

        <p>
        No hay pedidos todavía 🌮
        </p>

        `;


        return;

    }





    pedidos.forEach((pedido,index)=>{


        lista.innerHTML += `


        <div class="dato">


            <h3>
            Pedido #${index + 1}
            </h3>



            <p>

            👤 Cliente:
            ${pedido.nombre || "Sin nombre"}

            <br><br>


            🛒 Productos:

            <br>

            ${pedido.productos}


            <br><br>


            💲 Total:
            $${pedido.total}


            <br><br>


            💳 Pago:
            Transferencia


            </p>



            <button onclick="eliminarPedido(${index})">

            Eliminar pedido ❌

            </button>


        </div>


        `;


    });


}







function eliminarPedido(index){


    let pedidos = JSON.parse(

        localStorage.getItem(
            "pedidosTacosMilo"
        )

    ) || [];



    pedidos.splice(
        index,
        1
    );



    localStorage.setItem(

        "pedidosTacosMilo",

        JSON.stringify(pedidos)

    );



    cargarPedidos();


}







// CARGAR PEDIDOS AL ABRIR ADMIN

window.addEventListener(

    "load",

    ()=>{


        cargarPedidos();


    }

);
