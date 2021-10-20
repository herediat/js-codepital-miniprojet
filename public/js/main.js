
//############### DOCTOR ############################
import {Doctor} from "./modules/doctor.js"

let doc = new Doctor("Théodor", 0)
// console.log(doc);

//############## CHAT ################################
import {Chat} from "./modules/chat.js";
let kitty = new Chat("Titty")
// console.log(kitty);

//##################### Patients ######################
import {Patients} from "./modules/patient.js"

let Marcus = new Patients("Marcus", "mal indenté", 100, "vide", "malade")
let Optimus = new Patients("Optimus", "unsave", 200, "vide", "malade")
let Sangoku = new Patients("Sangoku", 404, 80, "vide", "malade")
let DarthVader = new Patients("DarthVader", "azmatique", 110, "vide", "malade")
let Semicolon = new Patients("Semicolon", "syntaxError", 60, "vide", "malade")

let fullPatients = [Marcus, Optimus, Sangoku, DarthVader, Semicolon]
// console.log(fullPatients);

//################# Diagnostiques #####################
import {Diagnostiques} from "./modules/doctor.js"

let evaluation1 = new Diagnostiques( "mal indenté", `ctrl+maj+f`)
let evaluation2 = new Diagnostiques("unsave", `saveOnFocusChange`)
let evaluation3 = new Diagnostiques("404", `CheckLinkRelation`)
let evaluation4 = new Diagnostiques("azmatique", `Ventoline`)
let evaluation5 = new Diagnostiques("syntaxError", `f12+doc`)

let fullEvaluations = [evaluation1, evaluation2, evaluation3, evaluation4, evaluation5]
// console.log(fullEvaluations);

//#################### TARIFS #################################
import {Tarifs} from "./modules/doctor.js"

let tarif1 = new Tarifs(`ctrl+maj+f`, 60)
let tarif2 = new Tarifs(`saveOnFocusChange`, 100)
let tarif3 = new Tarifs(`CheckLinkRelation`, 35)
let tarif4 = new Tarifs(`Ventoline`, 40)
let tarif5 = new Tarifs(`f12+doc`, 20)

let fullTarifs = [tarif1, tarif2, tarif3, tarif4, tarif5]
// console.log(fullTarifs);


//######################### DÉMO RÉCIT #######################
// fullPatients.forEach(el => {
//     doc.salleDattente.push(el)
// })
// console.log(`Dans la salle d'attente, il y'a ${fullPatients.length} personnes.`);

// doc.cabinet.push(Marcus.nom)
// console.log(`${doc.cabinet} est entré au cabinet`);

// // kitty.miaul()

// console.log(`La maladie de ${fullPatients[0].nom} est ${Marcus.maladie}`);

// console.log(`Le traitement de ${fullPatients[0].nom} est ${evaluation1.traitement}`);

// fullPatients.payer()
// console.log(`${fullPatients[0].nom}`)

//################### RÉcit ############################
fullPatients.forEach(el => {
    // doc.salleDattente.push(el)
    console.log(`Dans la salle d'attente, il y'a ${doc.salleDattente.length} personnes.`);
    doc.salleDattente.shift()
    console.log(`${el.nom} rentre dans le cabinet`);
    doc.patienEntre(el)
    doc.diagnostiquer(el)
})