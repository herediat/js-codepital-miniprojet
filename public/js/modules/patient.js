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

    }

    payer(){
        this.argent -= 50
    }
}