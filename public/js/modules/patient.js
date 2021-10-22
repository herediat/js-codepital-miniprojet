// import { Tarifs } from "./doctor"

export class Patients {
    constructor(nom, maladie, argent,  poche, etat, traitement) {
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etat = etat
        this.traitement = traitement
    }

    endroit(lieu){
        this.lieu = lieu
    }

    medicamment() {
        // if (this.traitement === traitement) {
        //     this.argent -= 
        // }
    }

    payer(){
        // this.argent -= 50
        if (this.etat === "malade") {
            this.argent -= 50
        }
    }
}