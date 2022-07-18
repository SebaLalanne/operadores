//Operador ternario
/* 
let edad = parseInt(prompt("Ingrese edad"))

const permiso = edad >= 18 ? true : false;

permiso ? alert ("Puede comprar cerveza") : alert ("No puede comprar cerveza")
*/

//const carrito = [1, 3] ;
//carrito.length === 0 && alert ("El carrito está vacio") ;

//let tamanio = carrito.length > 0 && carrito.length

//console.log(tamanio)
/*
const usuario = {
    nombre: "Seba",
    edad : 32,
};

const usuarioDos = 0

const usuarioTres = undefined

console.log(usuario || "El usuario uno no existe")
console.log(usuarioDos || "El usuario dos no existe")
console.log(usuarioTres || "El usuario tres no existe")
*/
/*
const nombre = prompt("Ingresa nombre")
alert(nombre || "No ingresó nombre")
*/

const usuario = {
    nombre: "Seba" ,
    edad: 32,
    telefono : {
    cel : 11111111,
    casa : 22222222,
    trabajo : 33333333,
    },
}

const { nombre, edad, direccion, telefono: {cel}} = usuario;

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Direccion: " + direccion);
console.log("Celular: " + cel);