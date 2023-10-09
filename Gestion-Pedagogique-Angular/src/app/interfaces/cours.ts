import { Annee } from "./annee";
import { Classe } from "./classe";
import { Module } from "./module";
import { Niveau } from "./niveau";
import { Professeur } from "./professeur";
import { RestResponse } from "./rest-response";
import { Semestre } from "./semestre";

export interface Cours extends RestResponse<Cours> {
    heure_globale: number;
    classe: Classe;
    professeur: Professeur;
    module: Module;
    annee: Annee;
    semestre: Semestre;
    niveau: Niveau;
    termine: boolean;
}
