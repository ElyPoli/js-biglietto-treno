/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// Dichiaro variabili
const kmToGo = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt("Inserisci la tua età");
const kmCost = 0.21;
let ticketCost, sale;

// Calcolo costo biglietto in base ai km
ticketCost = parseInt(kmToGo) * kmCost;

// Utente è minorenne o over 65? - applicazione sconto
if (parseInt(age) < 18) {
    sale = (ticketCost / 100) * 20;
    ticketCost = (ticketCost - sale).toFixed(2);
} else if (parseInt(age) > 65) {
    sale = (ticketCost / 100) * 40;
    ticketCost = (ticketCost - sale).toFixed(2);
} else {
    ticketCost = (ticketCost).toFixed(2);
}

// Stampo valori
document.getElementById("km-to-go").innerHTML = kmToGo;
document.getElementById("age").innerHTML = age;
document.getElementById("ticket-cost").innerHTML = ticketCost;