// =====================================
// TACOS MILO V3
// MENU.JS PARTE 1
// =====================================



// Plato seleccionado actualmente
import { guardarPedido } from "./firebase.js";

let platoSeleccionado = "";



// Carrito

let carrito = [];





// =====================================
// PRODUCTOS
// =====================================



const tacos = [

    {
        nombre:"Pastor",
        precio:18
    },

    {
        nombre:"Bistec",
        precio:18
    },

    {
        nombre:"Chorizo",
        precio:18
    },

    {
        nombre:"Suadero",
        precio:18
    },

    {
        nombre:"Arrachera",
        precio:18
    },

    {
        nombre:"Tripa",
        precio:22
    }

];





const carnes = [

    "Pastor",

    "Bistec",

    "Chorizo",

    "Suadero",

    "Arrachera"

];





const aguas = [

    "Jamaica",

    "Horchata",

    "Limón"

];





// =====================================
// SELECCIONAR PLATO
// =====================================


document
.querySelectorAll(".botonPlato")
.forEach(boton=>{


    boton.addEventListener("click",()=>{


        platoSeleccionado = boton.innerText;



        document.getElementById(

            "platoActual"

        ).innerText =


        "Lugar seleccionado: "

        +

        platoSeleccionado;



        alert(

        "Seleccionaste: "

        +

        platoSeleccionado

        );


    });


});





// =====================================
// MOSTRAR CARRITO
// =====================================


function actualizarCarrito(){



    let lista = document.getElementById(

        "listaCarrito"

    );



    let total = document.getElementById(

        "total"

    );



    lista.innerHTML="";



    let suma = 0;



    if(carrito.length===0){


        lista.innerHTML=

        "Tu carrito está vacío";


    }





    carrito.forEach(producto=>{



        let subtotal =

        producto.precio *

        producto.cantidad;



        suma += subtotal;




        lista.innerHTML += `

        <p>

        ${producto.cantidad}

        x

        ${producto.nombre}

        =

        $${subtotal}

        </p>

        `;


    });



    total.innerText=suma;
// =====================================
// MOSTRAR TACOS
// =====================================


function cargarTacos(){


    const contenedor = document.getElementById(

        "tacos"

    );



    contenedor.innerHTML = "";



    tacos.forEach((taco,index)=>{


        contenedor.innerHTML += `


        <div class="producto">


            <div class="infoProducto">


                <h3>

                🌮 ${taco.nombre}

                </h3>


                <p>

                $${taco.precio}

                </p>


            </div>





            <div class="controles">


                <button 

                class="btnMenos"

                onclick="quitarProducto('${taco.nombre}')">

                -

                </button>





                <span 

                class="cantidad"

                id="cantidad-${taco.nombre}">

                0

                </span>





                <button 

                class="btnMas"

                onclick="agregarProducto('${taco.nombre}',${taco.precio})">

                +

                </button>



            </div>



        </div>


        `;



    });


}






// =====================================
// AGREGAR PRODUCTO
// =====================================


window.agregarProducto=function(nombre,precio){



    let existe = carrito.find(

        producto => producto.nombre === nombre

    );




    if(existe){


        existe.cantidad++;


    }

    else{


        carrito.push({

            nombre:nombre,

            precio:precio,

            cantidad:1

        });


    }




    actualizarCantidad(nombre);


    actualizarCarrito();



};






// =====================================
// QUITAR PRODUCTO
// =====================================


window.quitarProducto=function(nombre){



    let producto = carrito.find(

        p=>p.nombre===nombre

    );




    if(!producto){

        return;

    }




    producto.cantidad--;





    if(producto.cantidad<=0){


        carrito = carrito.filter(

            p=>p.nombre!==nombre

        );


    }





    actualizarCantidad(nombre);


    actualizarCarrito();



};







// =====================================
// ACTUALIZAR NUMERO EN PANTALLA
// =====================================


function actualizarCantidad(nombre){



    let elemento = document.getElementById(

        "cantidad-"+nombre

    );



    if(!elemento){

        return;

    }





    let producto = carrito.find(

        p=>p.nombre===nombre

    );





    elemento.innerText = producto

    ?

    producto.cantidad

    :

    0;



}






// CARGAR TACOS AL INICIAR


cargarTacos();

    // =====================================
// MOSTRAR GRINGAS
// =====================================


function cargarGringas(){


const contenedor = document.getElementById("gringas");


contenedor.innerHTML = `


<div class="producto">


<div class="infoProducto">


<h3>
🫓 Gringa
</h3>


<p>
$50
</p>


<select id="carneGringa">


${carnes.map(carne=>`

<option value="${carne}">
${carne}
</option>

`).join("")}


</select>


</div>




<div class="controles">


<button 
class="btnMenos"
onclick="quitarProducto('Gringa')">

-

</button>



<span 
class="cantidad"
id="cantidad-Gringa">

0

</span>



<button 
class="btnMas"
onclick="agregarProducto('Gringa',50)">

+

</button>


</div>


</div>


`;

}







// =====================================
// MOSTRAR LONCHES
// =====================================


function cargarLonches(){


const contenedor = document.getElementById("lonches");



contenedor.innerHTML = `


<div class="producto">


<div class="infoProducto">


<h3>
🥪 Lonche
</h3>



<select id="tipoLonche">


<option value="65">

Lonche normal $65

</option>


<option value="75">

Lonche con queso $75

</option>


</select>




<select id="carneLonche">


${carnes.map(carne=>`

<option>

${carne}

</option>

`).join("")}


</select>


</div>





<div class="controles">


<button 
class="btnMenos"
onclick="quitarProducto('Lonche')">

-

</button>



<span 
class="cantidad"
id="cantidad-Lonche">

0

</span>




<button 
class="btnMas"
onclick="agregarProducto('Lonche',65)">

+

</button>


</div>



</div>


`;

}








// =====================================
// MOSTRAR QUESADILLAS
// =====================================


function cargarQuesadillas(){



const contenedor = document.getElementById("quesadillas");



contenedor.innerHTML = `



<div class="producto">


<div class="infoProducto">


<h3>

🧀 Quesadilla sencilla

</h3>


<p>

$20

</p>


</div>



<div class="controles">


<button

class="btnMenos"

onclick="quitarProducto('Quesadilla sencilla')">

-

</button>



<span

class="cantidad"

id="cantidad-Quesadilla sencilla">

0

</span>



<button

class="btnMas"

onclick="agregarProducto('Quesadilla sencilla',20)">

+

</button>



</div>


</div>








<div class="producto">


<div class="infoProducto">


<h3>

🧀 Quesadilla con carne

</h3>



<p>

$30

</p>



<select id="carneQuesadilla">


${carnes.map(carne=>`

<option>

${carne}

</option>

`).join("")}


</select>



</div>



<div class="controles">


<button

class="btnMenos"

onclick="quitarProducto('Quesadilla con carne')">

-

</button>




<span

class="cantidad"

id="cantidad-Quesadilla con carne">

0

</span>



<button

class="btnMas"

onclick="agregarProducto('Quesadilla con carne',30)">

+

</button>


</div>



</div>


`;

}







// =====================================
// CARGAR SECCIONES
// =====================================


cargarGringas();

cargarLonches();

cargarQuesadillas();

    // =====================================
// MOSTRAR VOLCANES
// =====================================


function cargarVolcanes(){


const contenedor = document.getElementById("volcanes");



contenedor.innerHTML = `



<div class="producto">


<div class="infoProducto">


<h3>
🌋 Volcán
</h3>



<select id="carneVolcan">


${carnes.map(carne=>`

<option>

${carne}

</option>

`).join("")}


</select>


<p>

Precio normal $35

<br>

Tripa $40

</p>


</div>




<div class="controles">


<button

class="btnMenos"

onclick="quitarProducto('Volcán')">

-

</button>




<span

class="cantidad"

id="cantidad-Volcán">

0

</span>





<button

class="btnMas"

onclick="agregarVolcan()">

+

</button>



</div>



</div>


`;

}







// =====================================
// AGREGAR VOLCAN
// =====================================


window.agregarVolcan=function(){



let carne = document.getElementById(

"carneVolcan"

).value;



let precio = 35;



if(carne==="Tripa"){

precio=40;

}




let nombre = 

"Volcán de "+carne;




let existe = carrito.find(

p=>p.nombre===nombre

);





if(existe){

existe.cantidad++;

}

else{


carrito.push({

nombre:nombre,

precio:precio,

cantidad:1

});


}



actualizarCarrito();



};








// =====================================
// MOSTRAR BEBIDAS
// =====================================


function cargarBebidas(){



const contenedor = document.getElementById("bebidas");



contenedor.innerHTML = `



<div class="producto">


<div class="infoProducto">


<h3>
🥤 Agua fresca
</h3>


<select id="saborAgua">


${aguas.map(agua=>`

<option>

${agua}

</option>

`).join("")}



</select>


<p>

$35

</p>


</div>





<div class="controles">


<button

class="btnMenos"

onclick="quitarProducto('Agua fresca')">

-

</button>



<span

class="cantidad"

id="cantidad-Agua fresca">

0

</span>




<button

class="btnMas"

onclick="agregarAgua()">

+

</button>


</div>



</div>







<div class="producto">


<div class="infoProducto">


<h3>
🥤 Coca
</h3>


<p>
$26
</p>


</div>




<div class="controles">


<button

class="btnMenos"

onclick="quitarProducto('Coca')">

-

</button>



<span

class="cantidad"

id="cantidad-Coca">

0

</span>




<button

class="btnMas"

onclick="agregarProducto('Coca',26)">

+

</button>



</div>



</div>



`;

}







// =====================================
// AGREGAR AGUA
// =====================================


window.agregarAgua=function(){



let sabor=document.getElementById(

"saborAgua"

).value;



let nombre="Agua "+sabor;



let existe=carrito.find(

p=>p.nombre===nombre

);





if(existe){

existe.cantidad++;

}

else{


carrito.push({

nombre:nombre,

precio:35,

cantidad:1

});


}



actualizarCarrito();



};








// CARGAR TODO

cargarVolcanes();

cargarBebidas();

    // =====================================
// ENVIAR PEDIDO A FIREBASE
// =====================================





document
.getElementById("enviarPedido")
.addEventListener("click", async ()=>{





    if(platoSeleccionado===""){


        alert(
        "Primero selecciona un plato"
        );


        return;


    }






    if(carrito.length===0){


        alert(
        "El carrito está vacío"
        );


        return;


    }






    let nombre = document.getElementById(

        "nombreCliente"

    ).value;





    if(nombre.trim()===""){


        alert(
        "Escribe tu nombre"
        );


        return;


    }







    let total = carrito.reduce(

        (suma,producto)=>

        suma +

        (producto.precio *

        producto.cantidad),

        0

    );






    let pedido = {


        plato:platoSeleccionado,


        cliente:nombre,


        productos:carrito,


        total:total,


        estado:"Preparando",


        fecha:new Date()

        .toLocaleString()



    };







    try{


        await guardarPedido(pedido);



        alert(

        "Pedido enviado 🌮"

        );




        carrito=[];



        actualizarCarrito();




    }

    catch(error){



        console.log(error);



        alert(

        "Error al enviar pedido"

        );



    }



});
    
}
