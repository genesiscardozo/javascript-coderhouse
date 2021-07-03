"use strict"

// Se debe escoger entre "si" y "no"

var gatos = prompt("¿Te gustan los gatos?");

if (gatos == "si") {
    alert("¡Estás en la página indicada!");
} else if (gatos == "no") {
    alert("Quizás deberías buscar en otro lugar");
} else {
    alert("Por favor, responda con 'si' o 'no'");
}