<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $modules = [
            [
                'id' => 1,
                'libelle' => 'HTML',
            ],
            [
                'id' => 2,
                'libelle' => 'CSS',
            ],
            [
                'id' => 3,
                'libelle' => 'JS',
            ],
            [
                'id' => 4,
                'libelle' => 'PHP',
            ],
            [
                'id' => 5,
                'libelle' => 'Laravel',
            ],
            [
                'id' => 6,
                'libelle' => 'React',
            ],
            [
                'id' => 7,
                'libelle' => 'Angular',
            ],
            [
                'id' => 8,
                'libelle' => 'Systeme d\'exploitation',
            ],
            [
                'id' => 9,
                'libelle' => 'Droit',
            ],
            [
                'id' => 10,
                'libelle' => 'Sys Admin',
            ],
        ];
        \App\Models\Module::insert($modules);
    }
}
