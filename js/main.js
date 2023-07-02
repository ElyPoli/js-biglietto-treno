/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// Dichiaro variabili
const kmToGo = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Inserisci la tua età"));
const ticketNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
const date = new Date();
const kmCost = 0.21;
let ticketCost, sale, ticketTipe;

// Controllo dati
if (isNaN(kmToGo) || isNaN(age)) {
    alert("Si è verificato un errore con i dati inseriti, ricarica la pagina.");
}

// Calcolo costo biglietto in base ai km
ticketCost = parseInt(kmToGo) * kmCost;

// Applicazione sconto
if (age < 18) {
    sale = (ticketCost / 100) * 20;
    ticketCost = (ticketCost - sale).toFixed(2);
    ticketTipe = "Bambino";
} else if (age > 65) {
    sale = (ticketCost / 100) * 40;
    ticketCost = (ticketCost - sale).toFixed(2);
    ticketTipe = "Over 65";
} else {
    ticketCost = (ticketCost).toFixed(2);
    ticketTipe = "Adulto";
}

// Stampo valori
document.getElementById("km-to-go").innerHTML = kmToGo;
document.getElementById("age").innerHTML = age;
document.getElementById("ticket-cost").innerHTML = ticketCost;
document.getElementById("ticket-tipe").innerHTML = ticketTipe;
document.getElementById("ticket-number").innerHTML = ticketNumber;
document.getElementById("date").innerHTML = (`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);