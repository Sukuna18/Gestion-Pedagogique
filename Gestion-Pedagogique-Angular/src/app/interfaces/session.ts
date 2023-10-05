import { RestResponse } from "./rest-response";

export interface Session extends RestResponse<Session>{
    date: Date;
    heure_debut: string;
    heure_fin: string;
    en_ligne: boolean;
    nb_heures: number;
    annuler: boolean;
    cours_id: number;
    salle_id: number;
}
