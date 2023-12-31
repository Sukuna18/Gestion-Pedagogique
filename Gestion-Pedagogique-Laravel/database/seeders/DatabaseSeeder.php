<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Salle;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(5)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            UserSeeder::class,
            ModuleSeeder::class,
            NiveauSeeder::class,
            SemestreSeeder::class,
            SalleSeeder::class,
            AnneeScolaireSeeder::class,
            RoleSeeder::class,
            RoleUserSeeder::class,
            FiliereSeeder::class,
            SpecialiteSeeder::class,
            ProfesseurSeeder::class,
            ClasseSeeder::class,
        ]);
    }
}
