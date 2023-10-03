<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClasseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classes = [
            [
                'id' => 1,
                'libelle' => 'STI',
                'filiere' => 'Informatique',
                'niveau_id' => '1',
                'effectif' => '30'
            ],
            [
                'id' => 2,
                'libelle' => 'RES',
                'filiere' => 'Reseaux',
                'niveau_id' => '1',
                'effectif' => '30'
            ],
            [
                'id' => 3,
                'libelle' => 'GC',
                'filiere' => 'Genie Civil',
                'niveau_id' => '2',
                'effectif' => '30'
            ],
            [
                'id' => 4,
                'libelle' => 'LOG',
                'filiere' => 'Logistique',
                'niveau_id' => '3',
                'effectif' => '30'
            ]
        ];
        \App\Models\Classe::insert($classes);
    }
}
