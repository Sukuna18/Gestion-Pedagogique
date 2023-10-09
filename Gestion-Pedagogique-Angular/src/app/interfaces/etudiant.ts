import { Annee } from "./annee";
import { Classe } from "./classe";

export interface Etudiant {
    id? : number;
    name: string;
    email: string;
    password: string;
    matricule: string;
    telephone: string;
    date_de_naissance: Date;
    lieu_de_naissance: string;
    annee_scolaire: Annee;
    classe: Classe ;
}
