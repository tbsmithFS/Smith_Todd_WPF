
function die() {
    document.write("<h1>Bad input, please reload.</h1>");
    exit();
}

var usual = Number(prompt("How many kisses do you usually get per night?"));

if (usual < 0 || isNaN(usual)) { die(); }

var mood = Number(prompt("What mood is she in? (1-10)", 5));

if (mood < 0 || mood > 10 || isNaN(mood)) { die(); }

var smell = Number(prompt("How good do you smell? (1-10)", 5));

if (smell < 0 || smell > 10 || isNaN(smell)) { die(); }

var level_of_intoxication = Number(prompt("How intoxicated is she? (1-10)", 5));

if (level_of_intoxication < 0 || level_of_intoxication > 10 || isNaN(level_of_intoxication)) { die(); }

// returns a number between 0 and 20
function get_mood_factor(mood, smell) {
    return mood + smell;
}

// returns the value of 20*sin stretched out to a period of 20. This makes the lowest and highest levels of intoxication the worst case scenarios in terms of number of kisses.
function get_intox_factor(level) {
    return 20 * Math.sin(Math.PI * level/10);
}

document.write(" intox factor is " + get_intox_factor(level_of_intoxication));

// calculate the mood and intox factor
var external_factors = get_mood_factor(mood, smell)
                     + get_intox_factor(level_of_intoxication);

// Calculate the number of kisses as a percenrtage of the usual number, assuming 20 is normal conditions
document.write("<h2>You will get " + Math.round((usual * external_factors / 20)) + " kisses tonight</h2>");


