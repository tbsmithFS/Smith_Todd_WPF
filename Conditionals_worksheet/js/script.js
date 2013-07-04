// Todd Smith
// 7-3-13
// Conditionals
//

// Ask for amount remaining in budget
var remaining = Number(prompt("How much is left in the entertainmnet budget?", 30));

// Print out the amount
console.log("You typed in " + remaining);

if (remaining >= 30) {
    // there's enough
    console.log("We can go!");
    document.write("We can go!");
} else {
    // not enough
    console.log("We cannot go.");
    document.write("We cannot go.");
}

