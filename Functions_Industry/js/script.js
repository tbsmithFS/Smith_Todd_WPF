
function die() {
    document.write("<h1>Bad input, please reload.</h1>");
    exit();
}

var twoOzBottles = Number(prompt("How many 2oz bottles do you want to order?"));

if (twoOzBottles < 0 || isNaN(twoOzBottles)) { die(); }

var oneOzBottles = Number(prompt("How many one oz bottles?", 5));

if (oneOzBottles < 0 || isNaN(oneOzBottles)) { die(); }

var soaps = Number(prompt("How many bars of soap?", 5));

if (soaps < 0 || isNaN(soaps)) { die(); }

// converts fl ounces to kg of argan oil.
function flozToKg(flounces) {
    var density = 0.95; // kg / L

    // 1 liter = 33.8140226 US fluid ounces
    var liters = flounces / 33.8140226;

    var kgs = density * liters;
    return kgs;
}

var willNeedKgs = flozToKg(2 * twoOzBottles + 1 * oneOzBottles + 0.2 * soaps);

document.write("<h2>You will need " + willNeedKgs + " kg of argan oil.</h2>");

