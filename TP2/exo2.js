function Day() {
    var today = new Date();

    var currentYear = today.getFullYear();

    var christmas = new Date(currentYear, 11, 25);

    if (today > christmas) {
        christmas.setFullYear(currentYear + 1);
    }

    var diff = christmas - today;

    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    console.log("Il reste " + days + " jours jusqu'à Noël!");

}

Day()