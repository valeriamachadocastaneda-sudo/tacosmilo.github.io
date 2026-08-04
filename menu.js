import { guardarPedido } from "./firebase.js";

/*=========================================
            TACOS MILO 2.0
==========================================*/

const carrito = [];


/*=========================================
              CARNES
==========================================*/

const carnes = [
    "Pastor",
    "Bistec",
    "Chorizo",
    "Suadero",
    "Arrachera",
    "Tripa"
];

const carnesSinTripa = [
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


/*=========================================
            PRODUCTOS
==========================================*/

const productos = {

    tacos: [

        { nombre:"Pastor", precio:18 },

        { nombre:"Bistec", precio:18 },

        { nombre:"Chorizo", precio:18 },

        { nombre:"Suadero", precio:18 },

        { nombre:"Arrachera", precio:18 },

        { nombre:"Tripa", precio:22 }

    ],



    gringa:{

        nombre:"Gringa",

        precio:50,

        carnes:carnesSinTripa

    },



    lonches:[

        {

            nombre:"Lonche",

            precio:65,

            carnes:carnes

        },

        {

            nombre:"Lonche con queso",

            precio:75,

            carnes:carnes

        }

    ],



    quesadillas:[

        {

            nombre:"Quesadilla sencilla",

            precio:20,

            carne:false

        },

        {

            nombre:"Quesadilla con carne",

            precio:30,

            carne:true,

            carnes:carnes

        }

    ],



    volcan:{

        nombre:"Volcán",

        carnes:carnes

    },



    bebidas:[

        {

            nombre:"Agua fresca",

            precio:35,

            sabores:saboresAgua

        },

        {

            nombre:"Coca",

            precio:26

        }

    ]window.onload = ()=>{

    crearMenu();

    mostrarCarrito();

};



function crearMenu(){

    crearTacos();

    crearGringas();

    crearLonches();

    crearQuesadillas();

    crearVolcanes();

    crearBebidas();

}

};
