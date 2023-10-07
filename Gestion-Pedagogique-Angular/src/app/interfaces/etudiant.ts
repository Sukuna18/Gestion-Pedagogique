export interface Etudiant {
    id? : number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    telephone: string;
    date_de_naissance: Date;
    lieu_de_naissance: string;
    annee_scolaire_id: number;
    classe_id: number;
}
