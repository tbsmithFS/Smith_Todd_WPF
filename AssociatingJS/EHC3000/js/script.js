var G = 6.67384e-11; // m^3 kg^-1 s^-2
var c = 299792458; // m / s

var mass = Number(prompt("Enter the mass in kg of the black hole (for example, the earth is 5.972e24 and the sun is 1.989e30): ", 1e25));
document.write("The mass of the black hole is " + mass + " kg.<br/><br/>");

var EHradius = 2 * G * mass / c^2;
document.write("The event horizon's radius would be " + EHradius + "m. ");


