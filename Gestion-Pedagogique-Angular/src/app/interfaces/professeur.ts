import { RestResponse } from "./rest-response";

export interface Professeur extends RestResponse<Professeur>{
    id: number;
    nom: string;
    prenom: string;
    specialite: string;
    grade: string;
}
