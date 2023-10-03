<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SemestreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $semestres = [
            [
                'id' => 1,
                'libelle' => 'Semestre 1',
            ],
            [
                'id' => 2,
                'libelle' => 'Semestre 2',
            ]
        ];
        \App\Models\Semestre::insert($semestres);
    }
}
