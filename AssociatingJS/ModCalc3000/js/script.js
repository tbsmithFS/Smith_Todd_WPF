var n = prompt("The dividend n: ", 100);
var r = prompt("The modulus r: ", 17);
var exitLoop = false;

var m = n;
while (exitLoop == false) {
    console.log("at the beginning of the while loop, this time exitLoop is " + exitLoop);
    console.log(" m [" + m + "] , r [" + r + "]" );
    console.log("entering if m [" + m + "] > r [" + r + "]" );
    if (Number(m) > Number(r)) {
        console.log(" m [" + m + "] > r [" + r + "]" );
        m = m - r;
        console.log(" now m is " + m);
    } else {
        console.log(" m [" + m + "] <= r [" + r + "]" );
        exitLoop = true;
    }
         console.log("at the end of the while loop, this time exitLoop is " + exitLoop);
}


document.write("The remainder of " + n + " upon division by " + r
    + " is " +  m);

