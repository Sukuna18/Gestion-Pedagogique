<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpecialiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $specialites = [
            [
                'libelle' => 'Programmation',
                'filiere_id' => '1'
            ],
            [
                'libelle' => 'Sys Admin',
                'filiere_id' => '4'
            ],
            [
                'libelle' => 'Architecte',
                'filiere_id' => '2'
            ],
            [
                'libelle' => 'Logistique',
                'filiere_id' => '3'
            ]
        ];
        \App\Models\Specialite::insert($specialites);
    }
}
