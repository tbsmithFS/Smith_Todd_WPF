// Todd Smith
// 7-3-13
// MR
//

var ngrade = Number(prompt("What's your grade? 1-100:", 90));
var lgrade;

if (ngrade >= 90) {
    lgrade = 'A';
} else if (ngrade >= 80) {
    lgrade = 'B';
} else if (ngrade >= 70) {
    lgrade = 'C';
} else if (ngrade >= 60) {
    lgrade = 'D';
} else {
    lgrade = 'F';
}

console.log("You get an " + lgrade);
document.write("A " + ngrade + " is an " + lgrade);


