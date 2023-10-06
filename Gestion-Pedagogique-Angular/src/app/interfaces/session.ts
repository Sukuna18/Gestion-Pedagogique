import { Cours } from "./cours";
import { RestResponse } from "./rest-response";
import { Salle } from "./salle";

export interface Session extends RestResponse<Session>{
    date: Date;
    heure_debut: string;
    heure_fin: string;
    en_ligne: boolean;
    nb_heures: number;
    annuler: boolean;
    cours_id: number;
    cours: Cours;
    salle_id: number;
    salle: Salle
}
