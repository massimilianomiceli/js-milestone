const passengerNameInputElement = document.getElementById("passengerName");
const numberKmInputElement = document.getElementById("numberKm");
const numberAgeElement = document.getElementById("numberAge");
const btnTotalElement = document.getElementById("btnTotal");
const formElement = document.querySelector("form");
const tbodyElement = document.querySelector("tbody");
const tableTotalElement = document.getElementById("tableTotal");
const summaryCardElement = document.getElementById("summary");
var total = 0;

formElement.addEventListener("submit", function(event){
    event.preventDefault();

    summaryCardElement.classList.remove("d-none");


    const newTdPassengerNameElement = document.createElement("td");
    newTdPassengerNameElement.textContent = passengerNameInputElement.value;
    const newTdKmElement = document.createElement("td");
    newTdKmElement.textContent = numberKmInputElement.value;
    const newTdAgeElement = document.createElement("td");
    newTdAgeElement.textContent = numberAgeElement.value;
    const newTdTotalElement = document.createElement("td");
    newTdTotalElement.textContent = `${ticketPrice(numberKmInputElement.value, numberAgeElement.value).toFixed(2)} €`;

    const newTrElement = document.createElement("tr");
    newTrElement.append(newTdPassengerNameElement, newTdKmElement, newTdAgeElement, newTdTotalElement);

    tbodyElement.append(newTrElement);
    
    total += ticketPrice(parseFloat(numberKmInputElement.value), parseFloat(numberAgeElement.value));

    tableTotalElement.textContent = `${(total).toFixed(2)} €`;
})

function ticketPrice (km, age){
    const kmPrice = 0.21;
    const underageDiscount = 0.20;
    const over65discount = 0.40;
    if (age >= 0 && age < 18) {
        return km * kmPrice * (1 - underageDiscount);
    } else if (age >= 18 && age < 65) {
        return km * kmPrice;
    } else {
        return km * kmPrice * (1 - over65discount);
    }
}