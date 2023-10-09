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
                'user_id' => 6,
                'specialite_id' => '1',
                'grade' => 'Docteur',
            ],
            [
                'id' => 2,
                'user_id' => 7,
                'specialite_id' => '2',
                'grade' => 'Docteur',
            ],
            [
                'id' => 3,
                'user_id' => 8,
                'specialite_id' => '3',
                'grade' => 'Docteur',
            ],
            [
                'id' => 4,
                'user_id' => 9,
                'specialite_id' => '4',
                'grade' => 'Docteur',
            ]
        ];
        \App\Models\Professeur::insert($professeurs);
    }
}
