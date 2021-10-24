import { Tarifs } from "./doctor.js"
import { Doctor } from "./doctor.js";
import { Lieux } from "./lieux.js";




export class Patients {
    constructor(nom, maladie, argent,  poche, etat, traitement) {
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etat = etat
        this.traitement = traitement
    }

    payer(){
        // this.argent -= 50
        if (this.etat === "malade") {
            this.argent -= 50
        }
    }

//     goTo(pointA,pointB) {
//         pointA.splice(pointA.indexOf(this), 1);
//         pointB.push(this);
//         console.log(this.nom, ' se déplace vers ', pointB.name);
// }

    // takeCare = function(){
    //     if(Lieux.pharmacie.indexOf(this) != -1){
    //         if(this.argent >= traitement[this.traitement]){
    //             console.log(this.nom, ' a assez d\'argent pour son traitement !');
    //             this.etatSante = "Bonne santé";
    //             this.argent -= traitement[this.traitement];
    //             this.goTo(Lieux.pharmacie, Lieux.rue);
    //         } else {
    //             console.log(this.nom, ' n\'a pas assez d\'argent pour son traitement...');
    //             this.etatSante = "Mort";
    //             this.goTo(Lieux.pharmacie, Lieux.cimetiere);
    //         }
    //         console.log('L\'état du patient est: "', this.etatSante,'"');
    //     } else {
    //         console.log("Le patient n'est pas à la Pharmacie.");
    //     }
    // };

    goPharma(){
        if (this.argent >= Tarifs[1]) {
            console.log(this.nom, "a assez d'argent pour son traitement");
            this.etat = "Bonne santé"
            this.argent -= Tarifs[1]
            doc.cabinet.shift(el)
            tousLieux.pharmacie.push(el)
            console.log(tousLieux.pharmacie);
        }else{
            console.log(this.nom, "n'a pas assez d'argent pour son traitement et donc est mort et va au cimetère");
            this.etat = "Mort"
        }
    }
}