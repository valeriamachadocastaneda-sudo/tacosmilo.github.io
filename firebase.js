// =======================================
// FIREBASE V4 - TACOS MILO
// =======================================

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

// =======================================
// CONFIGURACIÓN FIREBASE
// =======================================

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

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

// =======================================
// GUARDAR PEDIDO
// =======================================

export async function guardarPedido(pedido) {

    const pedidosRef = ref(db, "pedidos");

    const nuevoPedido = push(pedidosRef);

    await set(nuevoPedido, {

        ...pedido,

        estado: "Preparando",

        fecha: Date.now()

    });

}

// =======================================
// ESCUCHAR PEDIDOS
// =======================================

export function escucharPedidos(callback) {

    onValue(

        ref(db, "pedidos"),

        (snapshot) => {

            callback(snapshot.val() || {});

        }

    );

}

// =======================================
// CAMBIAR ESTADO
// =======================================

export async function cambiarEstado(id, estado) {

    await update(

        ref(db, "pedidos/" + id),

        {

            estado

        }

    );

}

// =======================================
// ELIMINAR PEDIDO
// =======================================

export async function eliminarPedido(id) {

    await remove(

        ref(db, "pedidos/" + id)

    );

}

// =======================================
// ESCUCHAR PLATOS
// =======================================

export function escucharPlatos(callback) {

    onValue(

        ref(db, "platos"),

        (snapshot) => {

            callback(snapshot.val() || {});

        }

    );

}

// =======================================
// OCUPAR PLATO
// =======================================

export async function ocuparPlato(plato) {

    await set(

        ref(db, "platos/" + plato),

        {

            estado: "ocupado"

        }

    );

}

// =======================================
// LIBERAR PLATO
// =======================================

export async function liberarPlatoEstado(plato) {

    await remove(

        ref(db, "platos/" + plato)

    );

}
