import { guardarPedido } from "./firebase.js";


// =================================
// CARRITO
// =================================

let carrito = [];




// =================================
// PRODUCTOS
// =================================


const tacos = [

    {nombre:"Pastor", precio:18},

    {nombre:"Bistec", precio:18},

    {nombre:"Chorizo", precio:18},

    {nombre:"Suadero", precio:18},

    {nombre:"Arrachera", precio:18},

    {nombre:"Tripa", precio:22}

];



const carnes = [

    "Pastor",

    "Bistec",

    "Chorizo",

    "Suadero",

    "Arrachera",

    "Tripa"

];



const carnesGringa = [

    "Pastor",

    "Bistec",

    "Chorizo",

    "Suadero",

    "Arrachera"

];



const saboresAgua = [

    "Jamaica",

    "Horchata",

    "Limón"

];



// =================================
// INICIAR MENU
// =================================


window.onload = function(){

    cargarTacos();

    cargarGringas();

    cargarLonches();

    cargarQuesadillas();

    cargarVolcanes();

    cargarBebidas();

    actualizarCarrito();

// =================================
// CREAR TACOS
// =================================


function cargarTacos(){

    const contenedor = document.getElementById("tacos");


    tacos.forEach((taco,index)=>{


        contenedor.innerHTML += `

        <div class="producto">


            <div>

                <h3>
                Taco ${taco.nombre}
                </h3>

                <p>
                $${taco.precio}
                </p>

            </div>



            <div class="cantidad">


                <button onclick="cambiarCantidad('taco${index}',-1)">
                    -
                </button>


                <span id="taco${index}">
                    0
                </span>


                <button onclick="cambiarCantidad('taco${index}',1)">
                    +
                </button>


            </div>



        </div>

        `;


    });



    contenedor.innerHTML += `

    <button onclick="agregarTacosCarrito()">

        Agregar tacos al carrito 🌮

    </button>

    `;

}





// =================================
// CAMBIAR CANTIDAD
// =================================


window.cambiarCantidad = function(id, cambio){


    let elemento = document.getElementById(id);


    let cantidad = Number(elemento.innerText);


    cantidad += cambio;



    if(cantidad < 0){

        cantidad = 0;

    }


    elemento.innerText = cantidad;


}





// =================================
// AGREGAR TACOS AL CARRITO
// =================================


window.agregarTacosCarrito = function(){



    tacos.forEach((taco,index)=>{


        let cantidad = Number(

            document.getElementById(

                "taco"+index

            ).innerText

        );



        if(cantidad > 0){


            agregarProductoCarrito({

                nombre:

                "Taco "+taco.nombre,


                precio:

                taco.precio,


                cantidad:

                cantidad

            });


            document.getElementById(

                "taco"+index

            ).innerText = 0;



        }



    });



    actualizarCarrito();


};

// =================================
// CREAR GRINGAS
// =================================


function cargarGringas(){


    const contenedor = document.getElementById("gringas");


    contenedor.innerHTML = `

    <div class="producto">


        <h3>
            Gringa - $50
        </h3>


        <label>
            Elige la carne:
        </label>


        <select id="carneGringa">


            ${carnesGringa.map(carne=>`

                <option value="${carne}">
                    ${carne}
                </option>

            `).join("")}


        </select>



        <div class="cantidad">


            <button onclick="cambiarCantidad('gringa',-1)">
                -
            </button>


            <span id="gringa">
                0
            </span>


            <button onclick="cambiarCantidad('gringa',1)">
                +
            </button>


        </div>



        <button onclick="agregarGringa()">

            Agregar gringa

        </button>



    </div>

    `;


}





window.agregarGringa=function(){


    let cantidad = Number(

        document.getElementById("gringa").innerText

    );


    if(cantidad > 0){


        let carne = document.getElementById(

            "carneGringa"

        ).value;



        agregarProductoCarrito({


            nombre:

            "Gringa de "+carne,


            precio:

            50,


            cantidad:

            cantidad


        });



        document.getElementById("gringa").innerText=0;


        actualizarCarrito();

    }


};






// =================================
// CREAR LONCHES
// =================================


function cargarLonches(){


const contenedor=document.getElementById("lonches");


contenedor.innerHTML=`

<div class="producto">


<h3>
Lonche
</h3>


<select id="tipoLonche">


<option value="Lonche">
Lonche $65
</option>


<option value="Lonche con queso">
Lonche con queso $75
</option>


</select>



<select id="carneLonche">


${carnes.map(carne=>`

<option value="${carne}">
${carne}
</option>

`).join("")}


</select>



<div class="cantidad">


<button onclick="cambiarCantidad('lonche',-1)">
-
</button>


<span id="lonche">
0
</span>


<button onclick="cambiarCantidad('lonche',1)">
+
</button>


</div>



<button onclick="agregarLonche()">

Agregar lonche

</button>


</div>

`;

}




window.agregarLonche=function(){


let cantidad = Number(

document.getElementById("lonche").innerText

);



if(cantidad>0){


let tipo=document.getElementById("tipoLonche").value;


let carne=document.getElementById("carneLonche").value;



let precio = tipo==="Lonche con queso"

?75

:65;



agregarProductoCarrito({


nombre:

tipo+" de "+carne,


precio,

cantidad


});



document.getElementById("lonche").innerText=0;


actualizarCarrito();


}



};






// =================================
// CREAR QUESADILLAS
// =================================


function cargarQuesadillas(){


const contenedor=document.getElementById("quesadillas");


contenedor.innerHTML=`


<div class="producto">


<h3>
Quesadilla sencilla - $20
</h3>


<div class="cantidad">

<button onclick="cambiarCantidad('quesoSimple',-1)">
-
</button>


<span id="quesoSimple">
0
</span>


<button onclick="cambiarCantidad('quesoSimple',1)">
+
</button>


</div>



<button onclick="agregarQuesadillaSimple()">

Agregar

</button>


</div>





<div class="producto">


<h3>
Quesadilla con carne - $30
</h3>



<select id="carneQuesadilla">


${carnes.map(carne=>`

<option value="${carne}">
${carne}
</option>

`).join("")}


</select>



<div class="cantidad">

<button onclick="cambiarCantidad('quesoCarne',-1)">
-
</button>


<span id="quesoCarne">
0
</span>


<button onclick="cambiarCantidad('quesoCarne',1)">
+
</button>


</div>



<button onclick="agregarQuesadillaCarne()">

Agregar

</button>


</div>


`;

}





window.agregarQuesadillaSimple=function(){


let cantidad=Number(

document.getElementById("quesoSimple").innerText

);



if(cantidad>0){


agregarProductoCarrito({

nombre:"Quesadilla sencilla",

precio:20,

cantidad

});


document.getElementById("quesoSimple").innerText=0;


actualizarCarrito();


}


};





window.agregarQuesadillaCarne=function(){


let cantidad=Number(

document.getElementById("quesoCarne").innerText

);



if(cantidad>0){


let carne=document.getElementById(

"carneQuesadilla"

).value;



agregarProductoCarrito({

nombre:"Quesadilla con "+carne,

precio:30,

cantidad

});



document.getElementById("quesoCarne").innerText=0;


actualizarCarrito();


}


};

// =================================
// CREAR VOLCANES
// =================================


function cargarVolcanes(){


const contenedor = document.getElementById("volcanes");


contenedor.innerHTML = `


<div class="producto">


<h3>
Volcán
</h3>



<select id="carneVolcan">


${carnes.map(carne=>`

<option value="${carne}">
${carne}
</option>

`).join("")}



</select>




<div class="cantidad">


<button onclick="cambiarCantidad('volcan',-1)">
-
</button>



<span id="volcan">
0
</span>



<button onclick="cambiarCantidad('volcan',1)">
+
</button>


</div>




<button onclick="agregarVolcan()">

Agregar volcán

</button>



</div>


`;

}




window.agregarVolcan=function(){


let cantidad = Number(

document.getElementById("volcan").innerText

);



if(cantidad>0){


let carne = document.getElementById(

"carneVolcan"

).value;



let precio;



if(carne==="Tripa"){

    precio=40;

}

else{

    precio=35;

}





agregarProductoCarrito({


nombre:

"Volcán de "+carne,


precio,

cantidad


});



document.getElementById("volcan").innerText=0;


actualizarCarrito();


}



};







// =================================
// CREAR BEBIDAS
// =================================


function cargarBebidas(){


const contenedor = document.getElementById("bebidas");



contenedor.innerHTML = `


<div class="producto">


<h3>
Agua fresca - $35
</h3>



<select id="saborAgua">


${saboresAgua.map(sabor=>`

<option value="${sabor}">
${sabor}
</option>

`).join("")}


</select>




<div class="cantidad">


<button onclick="cambiarCantidad('agua',-1)">
-
</button>



<span id="agua">
0
</span>



<button onclick="cambiarCantidad('agua',1)">
+
</button>



</div>




<button onclick="agregarAgua()">

Agregar agua

</button>



</div>







<div class="producto">


<h3>
Coca - $26
</h3>




<div class="cantidad">


<button onclick="cambiarCantidad('coca',-1)">
-
</button>



<span id="coca">
0
</span>



<button onclick="cambiarCantidad('coca',1)">
+
</button>



</div>




<button onclick="agregarCoca()">

Agregar Coca

</button>



</div>


`;

}






// =================================
// AGREGAR AGUA
// =================================


window.agregarAgua=function(){


let cantidad = Number(

document.getElementById("agua").innerText

);



if(cantidad>0){


let sabor=document.getElementById(

"saborAgua"

).value;



agregarProductoCarrito({


nombre:

"Agua de "+sabor,


precio:35,


cantidad


});



document.getElementById("agua").innerText=0;


actualizarCarrito();


}


};







// =================================
// AGREGAR COCA
// =================================


window.agregarCoca=function(){


let cantidad = Number(

document.getElementById("coca").innerText

);



if(cantidad>0){



agregarProductoCarrito({


nombre:"Coca",


precio:26,


cantidad


});



document.getElementById("coca").innerText=0;


actualizarCarrito();


}


};

// =================================
// AGREGAR PRODUCTO AL CARRITO
// =================================


function agregarProductoCarrito(producto){


    let encontrado = carrito.find(p =>

        p.nombre === producto.nombre

    );



    if(encontrado){


        encontrado.cantidad += producto.cantidad;


    }

    else{


        carrito.push(producto);


    }


}






// =================================
// MOSTRAR CARRITO
// =================================


function actualizarCarrito(){


    const lista = document.getElementById("listaCarrito");

    const totalHTML = document.getElementById("total");



    lista.innerHTML = "";



    let total = 0;



    if(carrito.length === 0){


        lista.innerHTML = "No hay productos";


    }





    carrito.forEach((producto,index)=>{


        let subtotal = producto.precio * producto.cantidad;


        total += subtotal;



        lista.innerHTML += `


        <div class="producto">


            <p>

            ${producto.cantidad} x 
            ${producto.nombre}

            <br>

            $${subtotal}


            </p>



            <button onclick="eliminarProducto(${index})">

                ❌

            </button>


        </div>


        `;



    });




    totalHTML.innerText = total;



}







// =================================
// ELIMINAR PRODUCTO
// =================================


window.eliminarProducto=function(index){


    carrito.splice(index,1);


    actualizarCarrito();


};






// =================================
// MOSTRAR OCULTAR MESA
// =================================


document.addEventListener(

"change",

function(e){



    if(e.target.id==="tipoPedido"){



        let caja = document.getElementById(

        "contenedorMesa"

        );



        if(e.target.value==="Comer aquí"){


            caja.style.display="block";


        }

        else{


            caja.style.display="none";


            document.getElementById(

            "mesa"

            ).value="";


        }


    }



}

);






// =================================
// ENVIAR PEDIDO
// =================================


document.getElementById(

"enviarPedido"

).addEventListener(

"click",

()=>{



    if(carrito.length===0){


        alert("Agrega productos al pedido");


        return;


    }





    let nombre = document.getElementById(

    "nombre"

    ).value;



    if(nombre.trim()===""){


        alert("Escribe tu nombre");


        return;


    }





    let tipo = document.getElementById(

    "tipoPedido"

    ).value;




    let mesa = "";



    if(tipo==="Comer aquí"){


        mesa = document.getElementById(

        "mesa"

        ).value;



        if(mesa===""){


            alert("Escribe la mesa");


            return;


        }


    }





    let total = carrito.reduce(

        (s,p)=>s+(p.precio*p.cantidad),

        0

    );







    let pedido = {


        cliente:nombre,


        tipo,


        mesa,


        productos:carrito,


        total,


        fecha:new Date().toLocaleString()



    };







    guardarPedido(pedido)

    .then(()=>{



        alert(

        "Pedido enviado correctamente 🌮"

        );



        enviarWhatsApp(pedido);



        carrito.length=0;



        actualizarCarrito();



    })

    .catch(error=>{


        console.log(error);


        alert(

        "Error enviando pedido"

        );


    });





}

);








// =================================
// WHATSAPP
// =================================


function enviarWhatsApp(pedido){



    let texto =

`🌮 PEDIDO TACOS MILO

Cliente:
${pedido.cliente}

${pedido.tipo}

${pedido.mesa ? "Mesa: "+pedido.mesa : ""}


PRODUCTOS:
`;





pedido.productos.forEach(producto=>{


    texto += `

${producto.cantidad} x ${producto.nombre}
$${producto.precio * producto.cantidad}

`;


});





texto += `

TOTAL:
$${pedido.total}

`;





// CAMBIA ESTE NUMERO POR EL DE TACOS MILO

let numero = "521XXXXXXXXXX";



let url =

"https://wa.me/"+numero+

"?text="+

encodeURIComponent(texto);



window.open(url,"_blank");



}

};
