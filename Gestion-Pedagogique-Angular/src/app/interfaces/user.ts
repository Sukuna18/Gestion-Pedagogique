import { Annee } from "./annee";
import { Classe } from "./classe";

export interface User {
    id? : number;
    nom?: string;
    prenom?: string;
    name: string;
    email: string;
    password: string;
    matricule: string;
    date_de_naissance: string;
    lieu_de_naissance: string;
    classe: Classe;
    annee_scolaire: Annee;
    present: boolean;
}
