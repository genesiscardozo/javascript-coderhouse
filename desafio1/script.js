"use strict"

alert("Para continuar, necesitamos que complete la información solicitada a continuación:");

let nombreIngresado, appellidoIngresado, emailIngresado;

nombreIngresado = prompt("¿Cuál es tu nombre?");
appellidoIngresado = prompt("¿Cuál es tu appellido?");
emailIngresado = prompt("¿Cuál es tu email?");
alert("Confirmas que el mail " + emailIngresado + " es correcto?");

alert("Perfecto " + nombreIngresado + " " + appellidoIngresado + ", " + "¡Gracias por contactarnos! \nEn breve nos pondremos en contacto.");

console.log(nombreIngresado + " " + appellidoIngresado);