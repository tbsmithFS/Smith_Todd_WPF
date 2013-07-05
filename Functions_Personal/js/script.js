
var mass = Number(prompt("What is the mass?", 10));

var volume = Number(prompt("What is the volume?", 100));

var compare_density = Number(prompt("What's the density to compare to?"));

function calc_first_density(m, v) {
    return m * v;
}

function calc_specific_gravity(d1, d2) {
    return d1 / d2;
}

var density = calc_first_density(mass, volume);

var SG = calc_specific_gravity(density, compare_density);

document.write("<h2>The Specific Gravity is " + SG + "</h2>");

