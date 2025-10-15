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
// Select input elements
const routeLengthInputElement = document.getElementById("route-length-field");
const ageInputElement = document.getElementById("age-field");

// Values
const price_by_km = 0.21;
const minor_discount = 0.2;
const senior_discount = 0.4;
