<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnneeScolaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $annee_scolaire = [
            [
                'id' => 1,
                'libelle' => '2020-2021',
                'active' => 0
            ],
            [
                'id' => 2,
                'libelle' => '2021-2022',
                'active' => 0
            ],
            [
                'id' => 3,
                'libelle' => '2022-2023',
                'active' => 1
            ],
        ];
        \App\Models\AnneeScolaire::insert($annee_scolaire);
    }
}
