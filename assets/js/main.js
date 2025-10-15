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
const nameField = document.getElementById("name-field");

const ticketNameElement = document.getElementById("ticket-name");
const priceRateElement = document.getElementById("price-rate");
const coachNumberElement = document.getElementById("coach-number");
const cpCodeElement = document.getElementById("cp-code");
const ticketPriceElement = document.getElementById("ticket-price");
const buttonElement = document.querySelector("button");

/**
 * Calculate the price of the ticket
 * @param {number} distance
 * @param {number} age
 * @returns {number}
 */
const handleTicketPrice = (distance, age) => {
	const price_by_km = 0.21;
	const minor_discount = 0.2;
	const senior_discount = 0.4;

	// Multiply the distance by the price
	let cost = distance * price_by_km;

	// Discount for minors
	if (age < 18) {
		cost -= cost * minor_discount;
	}

	// Discount for seniors
	if (age >= 65) {
		cost -= cost * senior_discount;
	}

	return cost.toFixed(2);
};

/**
 * Returns a message with the name of the ticket rate
 * @param {number} age
 * @returns {string}
 */
const handleTicketRate = (age) => {
	if (age < 18) {
		return "Tariffa Giovani";
	}
	if (age >= 65) {
		return "Tariffa Senior";
	}
	return "Tariffa Standard";
};

buttonElement.addEventListener("click", (event) => {
	// Prevent refresh
	event.preventDefault();

	// Save values on click
	const name = nameField.value;
	const age = ageField.value;
	const distance = routeLengthField.value;
	console.log(name, distance, age);

	// Calculate the price of the ticket
	const ticket = handleTicketPrice(distance, age);
	console.log(ticket);

	const priceRate = handleTicketRate(age);
	const coachNumber = 5;
	const cpCode = 939293;
	console.log(priceRate, coachNumber, cpCode);

	// Print on Screen
	ticketNameElement.textContent = name;
	priceRateElement.textContent = priceRate;
	coachNumberElement.textContent = coachNumber;
	cpCodeElement.textContent = cpCode;
	ticketPriceElement.textContent = ticket;
});
