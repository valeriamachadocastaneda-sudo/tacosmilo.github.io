// =====================================
// TACOS MILO 🌮
// firebase.js
// Conexión Firebase
// Parte 1
// =====================================


// Configuración de Firebase
// Aquí después pondremos tus datos reales
// que te da Firebase Console


const firebaseConfig = {

  apiKey: "AIzaSyBmt0_Uztjq_hP8ejw_eTGPE_4ZE25nnfk",

  authDomain: "tacos-milo-6438a.firebaseapp.com",

  databaseURL: "https://tacos-milo-6438a-default-rtdb.firebaseio.com",

  projectId: "tacos-milo-6438a",

  storageBucket: "tacos-milo-6438a.firebasestorage.app",

  messagingSenderId: "424796577310",

  appId: "1:424796577310:web:b4ecfa554fdebab93dd80f",

  measurementId: "G-EWKNPSZFCL"


};



// Inicializar Firebase

firebase.initializeApp(firebaseConfig);



// Crear conexión con Realtime Database

const database = firebase.database();


// =====================================
// GUARDAR PEDIDOS EN FIREBASE 📦
// =====================================


function guardarPedidoFirebase(pedido){


    let nuevoPedido = database
        .ref("pedidos")
        .push();



    nuevoPedido.set(pedido)

    .then(()=>{


        console.log(
            "Pedido guardado correctamente 🌮"
        );


    })

    .catch((error)=>{


        console.error(
            "Error al guardar pedido:",
            error
        );


    });


}






// =====================================
// LEER PEDIDOS PARA ADMIN 👨‍💻
// =====================================


function escucharPedidos(){


    database
    .ref("pedidos")
    .on(
        "value",
        (snapshot)=>{


            let pedidos = [];



            snapshot.forEach((item)=>{


                pedidos.push({

                    id:item.key,

                    ...item.val()

                });


            });



            localStorage.setItem(

                "pedidosTacosMilo",

                JSON.stringify(pedidos)

            );



            if(
                typeof cargarPedidos === "function"
            ){

                cargarPedidos();

            }


        }

    );


}

// =====================================
// ELIMINAR PEDIDO DE FIREBASE 🗑️
// =====================================


function eliminarPedidoFirebase(id){


    database
    .ref("pedidos/" + id)
    .remove()

    .then(()=>{


        console.log(
            "Pedido eliminado 🌮"
        );


    })

    .catch((error)=>{


        console.error(
            "Error eliminando pedido:",
            error
        );


    });


}







// =====================================
// GUARDAR PROMOCIÓN 🎉
// =====================================


function guardarPromocionFirebase(texto){


    database
    .ref("configuracion/promocion")
    .set(texto)

    .then(()=>{


        console.log(
            "Promoción guardada"
        );


    });


}







// =====================================
// LEER PROMOCIÓN
// =====================================


function cargarPromocionFirebase(){


    database
    .ref("configuracion/promocion")

    .once("value")

    .then((snapshot)=>{


        let promo = snapshot.val();



        localStorage.setItem(

            "promoTacosMilo",

            promo || ""

        );


    });


}


// =====================================
// GUARDAR SABORES DE AGUA 🥤
// =====================================


function guardarAguasFirebase(aguas){


    database
    .ref("configuracion/aguas")
    .set(aguas)

    .then(()=>{


        console.log(
            "Sabores de agua guardados 🥤"
        );


    });


}







// =====================================
// LEER SABORES DE AGUA
// =====================================


function cargarAguasFirebase(){


    database
    .ref("configuracion/aguas")

    .once("value")

    .then((snapshot)=>{


        let aguas = snapshot.val();



        if(aguas){


            localStorage.setItem(

                "aguasTacosMilo",

                JSON.stringify(aguas)

            );


        }


    });


}







// =====================================
// GUARDAR PRODUCTOS 🌮
// =====================================


function guardarProductosFirebase(productos){


    database
    .ref("productos")

    .set(productos)

    .then(()=>{


        console.log(
            "Productos actualizados 🌮"
        );


    });


}







// =====================================
// LEER PRODUCTOS EN TIEMPO REAL
// =====================================


function escucharProductos(){


    database
    .ref("productos")

    .on(
        "value",
        (snapshot)=>{


            let productos = snapshot.val();



            if(productos){


                localStorage.setItem(

                    "productosTacosMilo",

                    JSON.stringify(productos)

                );


            }


        }

    );


}
