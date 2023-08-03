
var etudiant = {
    nom: "David Rayy",
    sclasse: "VI",
    rollno: 12
};

console.log('Objet étudiant avant la suppression de la propriété rollno :');
console.log(etudiant);

delete etudiant.rollno;

console.log('Objet étudiant après la suppression de la propriété rollno :');
console.log(etudiant);
