<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'id' => 1,
                'libelle' => 'admin',
            ],
            [
                'id' => 2,
                'libelle' => 'professeur',
            ],
            [
                'id' => 3,
                'libelle' => 'etudiant',
            ],
            [
                'id' => 4,
                'libelle' => 'attache',
            ],
            [
                'id' => 5,
                'libelle' => 'responsable',
            ],
        ];
        \App\Models\Role::insert($roles);
    }
}
