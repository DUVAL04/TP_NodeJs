class Cylindre {
    constructor(rayon, hauteur) {
        this.rayon = rayon;
        this.hauteur = hauteur;
    }

    getVolume() {
        let volume = Math.PI * this.rayon * this.rayon * this.hauteur;
        return volume.toFixed(4);
    }
}

let monCylindre = new Cylindre(5, 10);
let volume = monCylindre.getVolume();
console.log(volume); // 785.3982
