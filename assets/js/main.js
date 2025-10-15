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
const classField = document.getElementById("class-field");

const ticketNameElement = document.getElementById("ticket-name");
const priceRateElement = document.getElementById("price-rate");
const coachNumberElement = document.getElementById("coach-number");
const cpCodeElement = document.getElementById("cp-code");
const ticketPriceElement = document.getElementById("ticket-price");

const confirmButtonElement = document.getElementById("confirm");
const cancelButtonElement = document.getElementById("cancel");

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
 * @param {string} trainClass
 * @returns {string}
 */
const handleTicketRate = (age, trainClass) => {
	let message = "Tariffa ";

	if (trainClass !== "none") {
		message = `Tariffa ${trainClass} `;
	}

	if (age < 18) {
		message += "Giovani";
	}

	if (age >= 65) {
		message += "Senior";
	}

	return message;
};

/**
 * Returns a random number between min and max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const handleCpCode = () => getRandomNumber(90000, 99999);

const handleCoachNumber = (trainClass) => {
	if (trainClass === "none") {
		return getRandomNumber(1, 10);
	}
	if (trainClass === "Executive") {
		return 1;
	}
	if (trainClass === "Business") {
		return getRandomNumber(2, 4);
	}
	if (trainClass === "Premium") {
		return 5;
	}
	if (trainClass === "Standard") {
		return getRandomNumber(6, 10);
	}
};

confirmButtonElement.addEventListener("click", (event) => {
	// Prevent refresh
	event.preventDefault();

	// Save values on click
	const name = nameField.value;
	const age = ageField.value;
	const distance = routeLengthField.value;
	const trainClass = classField.value;
	console.log(name, distance, age, trainClass);

	// Calculate the price of the ticket
	const ticket = handleTicketPrice(distance, age);
	// Get the name of the ticket rate
	const priceRate = handleTicketRate(age, trainClass);
	// Get the coach number
	const coachNumber = handleCoachNumber(trainClass);
	// Get a code for the ticket
	const cpCode = handleCpCode();
	console.log(ticket, priceRate, coachNumber, cpCode);

	// Print on Screen
	ticketNameElement.textContent = name;
	priceRateElement.textContent = priceRate;
	coachNumberElement.textContent = coachNumber;
	cpCodeElement.textContent = `#${cpCode}`;
	ticketPriceElement.textContent = `${ticket}€`;
});

cancelButtonElement.addEventListener("click", (event) => {
	// Prevent refresh
	event.preventDefault();

	// Reset fields
	nameField.value = "";
	ageField.value = "";
	routeLengthField.value = "";
	classField.value = "none";
});
