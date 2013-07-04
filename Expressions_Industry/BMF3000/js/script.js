var weight = Number(prompt("The weight in kg: ", 130));
document.write("The weight is " + weight + " kg.<br/><br/>");

var height = Number(prompt("The height in meters: ", 1.7));
document.write("The height is " + height + " m.<br/><br/>");

var BMI = weight / Math.pow(height, 2);

document.write("The Body Mass Index is " + BMI);



