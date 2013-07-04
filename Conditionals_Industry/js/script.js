var container_type = Number(prompt("Are you buying a 200kg keg ($1000) or a 55kg keg? ($300) (Please type 200 or 55)", 1));
var number = Number(prompt("How many of these are you buying?", 1));

var price = 0;

if (container_type == 200) {
    price += number * 1000;
} else if (container_type == 55) {
    price += number * 300;
} else {
    prompt("Container type is not correct. Please start over.");
}

document.write("<h2>Your total cost is: $" + price + "</h2>");
