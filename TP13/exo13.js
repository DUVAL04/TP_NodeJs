function afficherHeure() {
    let date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    heures = heures < 10 ? '0' + heures : heures;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secondes = secondes < 10 ? '0' + secondes : secondes;
    let heureActuelle = heures + ':' + minutes + ':' + secondes;
    console.log(heureActuelle);
}

setInterval(afficherHeure, 1000);
