// ===============================
// FIREBASE V3 - TACOS MILO
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

    apiKey: "TU_API_KEY",

    authDomain: "TU_PROYECTO.firebaseapp.com",

    databaseURL: "TU_DATABASE_URL",

    projectId: "TU_PROJECT_ID",

    storageBucket: "TU_PROYECTO.appspot.com",

    messagingSenderId: "TU_MESSAGING_SENDER_ID",

    appId: "TU_APP_ID"

};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);



// ======================================
// GUARDAR PEDIDO
// ======================================

export async function guardarPedido(pedido){

    const pedidosRef = ref(db,"pedidos");

    const nuevoPedido = push(pedidosRef);

    await set(nuevoPedido,{

        ...pedido,

        estado:"Preparando",

        fecha:Date.now()

    });

}



// ======================================
// ESCUCHAR PEDIDOS
// ======================================

export function escucharPedidos(callback){

    onValue(

        ref(db,"pedidos"),

        snapshot=>{

            callback(snapshot.val() || {});

        }

    );

}



// ======================================
// CAMBIAR ESTADO
// ======================================

export async function cambiarEstado(id,estado){

    await update(

        ref(db,"pedidos/"+id),

        {

            estado

        }

    );

}



// ======================================
// ELIMINAR PEDIDO
// ======================================

export async function eliminarPedido(id){

    await remove(

        ref(db,"pedidos/"+id)

    );

    // =====================================
// PLATOS
// =====================================


export function escucharPlatos(callback){


    onValue(

        ref(db,"platos"),

        snapshot=>{


            callback(

                snapshot.val() || {}

            );


        }

    );


}





export async function ocuparPlato(plato){



    await set(

        ref(db,"platos/"+plato),

        {

            estado:"ocupado"

        }

    );


}





export async function liberarPlatoEstado(plato){



    await remove(

        ref(db,"platos/"+plato)

    );


}

}
