import { RestResponse } from "./rest-response";

export interface Salle extends RestResponse<Salle> {
    numero : number;
    capacite : number;
}
