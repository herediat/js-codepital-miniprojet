
//############### DOCTOR ############################
import {Doctor} from "./modules/doctor.js"

let doc = new Doctor("Théodor", 0)

//############## CHAT ################################
import {Chat} from "./modules/chat.js";
let kitty = new Chat("Titty")
// console.log(kitty);

//##################### Patients ######################
import {Patients} from "./modules/patient.js"

let Marcus = new Patients("Marcus", "mal indenté", 100, "vide", "malade", "ctrl+maj+f")
let Optimus = new Patients("Optimus", "unsave", 200, "vide", "malade", "saveOnFocusChange")
let Sangoku = new Patients("Sangoku", "404", 80, "vide", "malade", "CheckLinkRelation")
let DarthVader = new Patients("DarthVader", "azmatique", 110, "vide", "malade", "Ventoline")
let Semicolon = new Patients("Semicolon", "syntaxError", 60, "vide", "malade", "f12+doc")

let fullPatients = [Marcus, Optimus, Sangoku, DarthVader, Semicolon]

//################# Diagnostiques #####################
import {Diagnostiques} from "./modules/doctor.js"

let evaluation1 = new Diagnostiques( "mal indenté", `ctrl+maj+f`)
let evaluation2 = new Diagnostiques("unsave", `saveOnFocusChange`)
let evaluation3 = new Diagnostiques("404", `CheckLinkRelation`)
let evaluation4 = new Diagnostiques("azmatique", `Ventoline`)
let evaluation5 = new Diagnostiques("syntaxError", `f12+doc`)

let fullEvaluations = [evaluation1, evaluation2, evaluation3, evaluation4, evaluation5]

//#################### TARIFS #################################
import {Tarifs} from "./modules/doctor.js"

let tarif1 = new Tarifs(`ctrl+maj+f`, 60)
let tarif2 = new Tarifs(`saveOnFocusChange`, 100)
let tarif3 = new Tarifs(`CheckLinkRelation`, 35)
let tarif4 = new Tarifs(`Ventoline`, 40)
let tarif5 = new Tarifs(`f12+doc`, 20)

let fullTarifs = new Tarifs([tarif1, tarif2, tarif3, tarif4, tarif5])

//########################## LIEUX #################################
import { Lieux } from "./modules/lieux.js";

let pharmacie = new Lieux("Pharmacie")
let cimetiere = new Lieux("Cimetière")
let tousLieux = new Lieux([pharmacie, cimetiere])
console.log(tousLieux);


//################### RÉcit ############################

//############# PLACEMENT DES PATIENTS DANS LA SALLE D'ATTENTE #######################################
kitty.miaul()

fullPatients.forEach(el => {
doc.salleDattente.push(el)
// console.log(doc.salleDattente);
})
fullPatients.forEach(el => {
    console.log(`Dans la salle d'attente, il y'a ${doc.salleDattente.length} personnes.`);
    doc.salleDattente.shift(el)
    
    //############ Patients entre dans le cabinet + NOMBRE DE PATIENTS DANS LE CABINET ################
    console.log(`${el.nom} rentre dans le cabinet`);
    doc.cabinet.push(el)
    doc.salleDattente.splice(doc.salleDattente.indexOf(el), [])
    console.log("Persones présentes dans la salle d'attent", doc.salleDattente);
    // console.log(`Personnes présentes dans le cabinet ${doc.cabinet.length}`);
    console.log("`Personnes présentes dans le cabinet", doc.cabinet);

    //################# DIAGNOSTIQUE DU MÉDECIN #########################
    doc.diagnostiquer(el)
    console.log(`La maladie de ${el.nom} est ${el.maladie}`);
    console.log(`Le traitement de ${el.nom} est ${el.traitement}`);

    //####################### PAIEMENT DU PATIENT AU MÉDECIN ########################
    // console.log(el.payer(el));
    console.log(`${el.nom} a payer docteur ${doc.nom} €50`);

    //########################### RESTE DES PATIENTS APRES PAIEMENT CHEZ MÉDECIN ################
    console.log(`Après son diagnostique, ${el.nom} n'a plus que €${el.argent} sur lui`);

    //################ BÉNÉFICES DU MÉDECIN APRES PAIEMENT DES PATIENTS
    console.log(`La tirelire de docteur ${doc.nom} contient actuellement €${doc.argent}`);

    //################## DÉPLCAMENT DES PATIENTS VERS LA PHARMACIER ##########################
    // console.log(`${el.nom} s'en va à la pharmacie`);
    // doc.cabinet.shift(el)
    // tousLieux.pharmacie.push(el)
    // console.log(tousLieux.pharmacie);
    el.goPharma(el)

    //########### NOMBRE DE PATIENTS DANS LE CABINET APRES DIAGNOSTIQUES ######################
    console.log(`Il y'a actuellement ${doc.cabinet.length} personne dans le cabinet`);

    //################# PRIX DES TRAIEMENTS DES PATIENTS ##############################
    console.log(`Le traitement de ${el.nom} coût ${fullTarifs.prix}`);
    console.log("_____________________________________");
})