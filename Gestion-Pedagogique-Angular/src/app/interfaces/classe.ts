import { RestResponse } from "./rest-response";

export interface Classe extends RestResponse<Classe> {
    filiere: string;
    effectif: number;
    niveau_id: number;
}
