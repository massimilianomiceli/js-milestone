const numberKmInputElement = document.getElementById("numberKm");
const numberAgeElement = document.getElementById("numberAge");
const btnTotalElement = document.getElementById("btnTotal");
const formElement = document.querySelector("form");


formElement.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("evento");
})