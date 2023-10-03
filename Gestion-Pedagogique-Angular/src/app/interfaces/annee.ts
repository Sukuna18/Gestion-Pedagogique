import { RestResponse } from "./rest-response";

export interface Annee extends RestResponse<Annee> {
    active: boolean;
}
