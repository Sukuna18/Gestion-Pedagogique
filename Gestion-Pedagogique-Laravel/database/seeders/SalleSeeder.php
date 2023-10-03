<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SalleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $salles = [
            [
                'id' => 1,
                'libelle' => 'Salle 1',
                'numero' => '1',
                'capacite' => 30,
            ],
            [
                'id' => 2,
                'libelle' => 'Salle 2',
                'numero' => '2',
                'capacite' => 30,
            ],
            [
                'id' => 3,
                'libelle' => 'Salle 3',
                'numero' => '3',
                'capacite' => 30,
            ],
            [
                'id' => 4,
                'libelle' => 'Salle 4',
                'numero' => '4',
                'capacite' => 30,
            ],
            [
                'id' => 5,
                'libelle' => 'Salle 5',
                'numero' => '5',
                'capacite' => 30,
            ],
            [
                'id' => 6,
                'libelle' => 'Salle 6',
                'numero' => '6',
                'capacite' => 30,
            ],
            [
                'id' => 7,
                'libelle' => 'Salle 7',
                'numero' => '7',
                'capacite' => 30,
            ],
            [
                'id' => 8,
                'libelle' => 'Salle 8',
                'numero' => '8',
                'capacite' => 30,
            ],
            [
                'id' => 9,
                'libelle' => 'Salle 9',
                'numero' => '9',
                'capacite' => 30,
            ],
            [
                'id' => 10,
                'libelle' => 'Salle 10',
                'numero' => '10',
                'capacite' => 30,
            ]
        ];
        \App\Models\Salle::insert($salles);
    }
}
