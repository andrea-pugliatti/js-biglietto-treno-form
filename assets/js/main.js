/*
Calcolo del prezzo del biglietto del treno

Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

// Select elements
const routeLengthField = document.getElementById("route-length-field");
const ageField = document.getElementById("age-field");
const buttonElement = document.querySelector("button");

// Values
const price_by_km = 0.21;
const minor_discount = 0.2;
const senior_discount = 0.4;

let age;
let distance;

buttonElement.addEventListener("click", (event) => {
	// Prevent refresh
	event.preventDefault();

	// Save values on click
	age = ageField.value;
	distance = routeLengthField.value;
});
