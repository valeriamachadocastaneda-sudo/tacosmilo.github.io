// Importar Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
    getDatabase,
    ref,
    push,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// CONFIGURACIÓN DE TU PROYECTO FIREBASE
// Cambia estos datos por los de tu Firebase

const firebaseConfig = {

    apiKey: "TU_API_KEY",

    authDomain: "TU_PROYECTO.firebaseapp.com",

    databaseURL: "https://tacos-milo-6438a-default-rtdb.firebaseio.com/",

    projectId: "TU_PROYECTO",

    storageBucket: "TU_PROYECTO.appspot.com",

    messagingSenderId: "TU_MESSAGING_ID",

    appId: "TU_APP_ID"

};


// Inicializar Firebase

const app = initializeApp(firebaseConfig);


// Base de datos

const database = getDatabase(app);



// ==========================
// GUARDAR PEDIDOS
// ==========================


export function guardarPedido(pedido){

    const pedidosRef = ref(database,"pedidos");

    const nuevoPedido = push(pedidosRef);


    return set(nuevoPedido,pedido);

}



// ==========================
// LEER PEDIDOS (ADMIN)
// ==========================


export function escucharPedidos(callback){

    const pedidosRef = ref(database,"pedidos");


    onValue(pedidosRef,(snapshot)=>{


        const datos = snapshot.val();


        callback(datos);


    });

}
