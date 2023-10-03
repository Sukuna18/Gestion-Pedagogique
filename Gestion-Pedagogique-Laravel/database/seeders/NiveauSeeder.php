<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NiveauSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $niveaux = [
            [
                'id' => 1,
                'libelle' => 'Licence 1'
            ],
            [
                'id' => 2,
                'libelle' => 'Licence 2'
            ],
            [
                'id' => 3,
                'libelle' => 'Licence 3'
            ],
            [
                'id' => 4,
                'libelle' => 'Master 1'
            ],
            [
                'id' => 5,
                'libelle' => 'Master 2'
            ]
        ];
        \App\Models\Niveau::insert($niveaux);
    }
}
