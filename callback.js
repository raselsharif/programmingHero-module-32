function gretting(callback, name) {
    callback(name);
}

function greetMoring(name) {
    console.log("Good Mornig ", name);
}

function greetEvening(name) {
    console.log("Good Evening", name);
}

function greetNight(name) {
    console.log("Good Night", name);
}
gretting(greetMoring, "Rasel");
gretting(greetEvening, "Abdur Rahaman");
gretting(greetNight, "Hasan");