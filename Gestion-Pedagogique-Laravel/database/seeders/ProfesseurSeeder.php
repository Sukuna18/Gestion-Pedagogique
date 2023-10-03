<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfesseurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $professeurs = [
            [
                'id' => 1,
                'nom' => 'Fall',
                'prenom' => 'Bamba',
                'specialite' => 'Informatique',
                'grade' => 'Docteur',
            ],
            [
                'id' => 2,
                'nom' => 'Diop',
                'prenom' => 'Moussa',
                'specialite' => 'Reseaux',
                'grade' => 'Docteur',
            ],
            [
                'id' => 3,
                'nom' => 'Leblanc',
                'prenom' => 'Francois',
                'specialite' => 'Genie Civil',
                'grade' => 'Docteur',
            ],
            [
                'id' => 4,
                'nom' => 'Mendy',
                'prenom' => 'Federick',
                'specialite' => 'Logistique',
                'grade' => 'Docteur',
            ],
            [
                'id' => 5,
                'nom' => 'Diop',
                'prenom' => 'Moussa',
                'specialite' => 'Droit des affaires',
                'grade' => 'Docteur',
            ]
        ];
        \App\Models\Professeur::insert($professeurs);
    }
}
