// import { Patients } from "./patient";
// let fullPatients = new Patients[Marcus, Optimus, Sangoku, DarthVader, Semicolon]

//########################## CLASS DOCTOR ###############################
export class Doctor{
    constructor(nom, argent){
        this.nom = nom
        this.argent = argent
        this.salleDattente = []
        this.cabinet = []
    }
    
    diagnostiquer(a){
        if (a.maladie == "mal indenté" || a.maladie == "unsave" || a.maladie == "404" || a.maladie == "azmatique" || a.maladie == "syntaxError") {
            this.argent += 50
        }
        
    }

    patienEntre(){
        this.salleDattente.push()

    }

    partienSort(){

    }
}

//##################### CLASS DIAGNOSTIQUES #############################
export class Diagnostiques{
    constructor(maladie,  traitement) {
        this.maladie = maladie
        this.traitement = traitement
}
}


//######################### CLASS TARIFS ET TRAITEMENTS #################################
export class Tarifs{
    constructor(nom, prix) {
        this.nom = nom
        this.prix = prix
    }
}