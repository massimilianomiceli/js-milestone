const numberKmInputElement = document.getElementById("numberKm");
const numberAgeElement = document.getElementById("numberAge");
const btnTotalElement = document.getElementById("btnTotal");
const formElement = document.querySelector("form");


formElement.addEventListener("submit", function(event){
    event.preventDefault();
    const totale = ticketPrice(numberKmInputElement.value, numberAgeElement.value)
    console.log(totale);
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