"use strict"

alert("Para proceder con la adopción, es necesario llenar el siguiente formulario");
alert("El formulario debe ser llenado por un adulto");

let edad, mail, nombre;

edad = prompt("Ingrese su edad:");
nombre = prompt ("Ingrese su nombre");
mail = prompt("Ingrese su dirección de correo electrónico:");


function direccionMail() {
    if (mail == "") { 
        alert(nombre + "" + " no has ingresado tu mail");
    }
    else {
        alert(nombre + "" + " tu mail es " + mail);
    }
}

function ingresarEdad() {
    if (edad >= 18) {
        alert("Puede proceder con la adopción");
    } else {
        alert("Debe ser mayor de edad para realizar la adopción");
    }
}