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
                'specialite_id' => '1',
                'grade' => 'Docteur',
            ],
            [
                'id' => 2,
                'nom' => 'Diop',
                'prenom' => 'Moussa',
                'specialite_id' => '2',
                'grade' => 'Docteur',
            ],
            [
                'id' => 3,
                'nom' => 'Leblanc',
                'prenom' => 'Francois',
                'specialite_id' => '3',
                'grade' => 'Docteur',
            ],
            [
                'id' => 4,
                'nom' => 'Mendy',
                'prenom' => 'Federick',
                'specialite_id' => '4',
                'grade' => 'Docteur',
            ]
        ];
        \App\Models\Professeur::insert($professeurs);
    }
}
