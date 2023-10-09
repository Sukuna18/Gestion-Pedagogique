import { RestResponse } from "./rest-response";

export interface Professeur extends RestResponse<Professeur>{
    id: number;
    name: string
    specialite: string;
    grade: string;
}
