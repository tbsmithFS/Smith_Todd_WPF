
var day = prompt("Are you going to the dog park on a weekday or on the weekend? (Type: weekday or weekend)", "weekday");

if (day == "weekday") {
    var work = prompt("Do you need to do work later? (y/n)", "q");
    if (work == "y") {
        document.write("<h2>You should stay there for 1 hour</h2>");
    } else if (work == "n") {
        document.write("<h2>You should stay for 2 hours</h2>");
    } else {
        document.write("<h2>I don't understand your response. Start over!</h2>");
    }
} else if (day == "weekend") {
    document.write("<h2>You could stay for 3 hours</h2>");
} else {
    document.write("<h2>I didn't understand your response. Start over!</h2>");
}

