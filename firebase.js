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

    apiKey: "AIzaSyBmt0_Uztjq_hP8ejw_eTGPE_4ZE25nnfk",

    authDomain: "tacos-milo-6438a.firebaseapp.com",

    databaseURL: "https://tacos-milo-6438a-default-rtdb.firebaseio.com",

    projectId: "tacos-milo-6438a",

    storageBucket: "tacos-milo-6438a.firebasestorage.app",

    messagingSenderId: "424796577310",

    appId: "1:424796577310:web:b4ecfa554fdebab93dd80f"

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
