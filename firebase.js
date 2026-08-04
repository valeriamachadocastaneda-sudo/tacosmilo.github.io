// =================================
// CONFIGURACIÓN FIREBASE
// =================================


import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import {

getDatabase,

ref,

push,

set,

onValue

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";





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



const database = getDatabase(app);






// =================================
// GUARDAR PEDIDO
// =================================


export function guardarPedido(pedido){



const pedidosRef = ref(

database,

"pedidos"

);



const nuevoPedido = push(pedidosRef);



return set(

nuevoPedido,

{


...pedido,


estado:"Preparando"


}

);



}








// =================================
// ESCUCHAR PEDIDOS
// =================================


export function escucharPedidos(callback){



const pedidosRef = ref(

database,

"pedidos"

);



onValue(

pedidosRef,

(snapshot)=>{


const datos = snapshot.val();


callback(datos);



}

);



}
