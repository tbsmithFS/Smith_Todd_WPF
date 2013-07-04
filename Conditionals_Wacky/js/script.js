
var fuel = prompt("Do you have at least 100 gallons of fuel? (y/n)", "y");

if (fuel == "n") {

    document.write("<h2>You need more fuel!!!!!</h2>");

} else {

    var shield_rating = Number(prompt("What's your shield rating? (1-100)", 20));
    
    if (shield_rating >= 70) {
    
        var has_a_week = prompt("Do you have a week to spare? (y/n)", "y");
    
        if (has_a_week == "y") {
    
            document.write("<h2>You may enter warp drive</h2>");
    
        } else {
    
            document.write("<h2>You will need more time to spend in the wormhole</h2>");
    
        }
    
    } else {
     
        document.write("<h2>Your shields will never hold!!!</h2>");
    
    }

}
