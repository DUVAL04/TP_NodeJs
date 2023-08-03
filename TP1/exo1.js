var randomNumber = Math.floor(Math.random() * 10) + 1;

function time(number) {
        if (number === randomNumber) {
            console.log("Bon travail");
        } else {
            console.log("Pas de correspondance");
        }
}

time(5)