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
                'filiere_id' => '1',
                'niveau_id' => '1',
                'effectif' => '30'
            ],
            [
                'id' => 2,
                'libelle' => 'RES',
                'filiere_id' => '4',
                'niveau_id' => '1',
                'effectif' => '20'
            ],
            [
                'id' => 3,
                'libelle' => 'GC',
                'filiere_id' => '2',
                'niveau_id' => '2',
                'effectif' => '30'
            ],
            [
                'id' => 4,
                'libelle' => 'LOG',
                'filiere_id' => '3',
                'niveau_id' => '3',
                'effectif' => '30'
            ]
        ];
        \App\Models\Classe::insert($classes);
    }
}
