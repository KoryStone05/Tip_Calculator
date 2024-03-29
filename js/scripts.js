//Get the values the user inputs(bill amount, service quality, number of people splitting the bill)

function calculateTip() {
var billAmount = document.getElementById("billAmt").value;
console.log(billAmount);

var serviceQuality = document.getElementById("serviceQual").value;
console.log(serviceQuality);

var numberOfPeople = document.getElementById("numPeople").value;
console.log(numberOfPeople);

//Validate their input (to make sure what they input is usable)
//Bill amount - Words, Negative values, Empty strings

var amount = Number(billAmount); //Try to turn the bill value of billAmount into a number
console.log(amount);

if (isNaN(amount) || amount <= 0)  {
    //If amount can't be converted into a number or is less than or equal to 0, show an error
    alert("Invalid input for bill amount");
    return; //Return to exit the function if the bill amount is invalid
}

//If we make here then, the amount is good

//Service Selector - Not Choosing an Option

var service = Number(serviceQuality); //Convert serviceQuality into a number

if (service === 0) {
    alert("You must pick an option for service quality");
    return;
}

//Number of People - words, negative values, or empty strings, decimal values

var people = Number(numberOfPeople);

if (isNaN(people) || people < 1) {
    alert("Enter a valid number of people splitting the bill");
    return;
}

//Calculate the amount of tip each person needs to pay

var tipPerPerson = (amount * service) / people;

var totalPerPerson = amount / people + tipPerPerson;

tipPerPerson = tipPerPerson.toFixed(2); //Round the tipPerPerson to 2 decimal points

totalPerPerson = totalPerPerson.toFixed(2);

//Display that information to the user.

document.getElementById("tipAmount").style.display = "block"; //Display the hidden tipAmount div when we're ready to show the calculated tip

document.getElementById("tip").innerText = tipPerPerson;
document.getElementById("total").innerText = totalPerPerson;

}

function reset() {
    document.getElementById("billAmt").value = "";
    document.getElementById("serviceQual").value = "0";
    document.getElementById("numPeople").value = "";
    document.getElementById("tipAmount").style.display = "none";
}


//Function that is executed when the button is clicked
//We are passing an anonymous function (a function without a name to the button when it's clicked)
document.getElementById("calculateTip").onclick = function() {
    calculateTip();
}

document.getElementById("reset").onclick = function() {
    reset();
}
