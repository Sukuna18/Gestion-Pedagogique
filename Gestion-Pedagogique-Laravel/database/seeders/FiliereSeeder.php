<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FiliereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $filieres = [
            [
                'libelle' => 'Informatique'
            ],
            [
                'libelle' => 'Génie Civil'
            ],
            [
                'libelle' => 'Logistique'
            ],
            [
                'libelle' => 'Reseaux'
            ]
        ];
        \App\Models\Filiere::insert($filieres);
    }
}
