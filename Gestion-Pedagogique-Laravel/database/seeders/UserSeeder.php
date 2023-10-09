<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //generer moi 9 users avec email commencant par le nom de l'user suivit de @gmail.com
       $users = [
            [
                'name' => 'Gojo',
                'email' => 'gojo@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT001',
            ],
            [
                'name' => 'Sukuna',
                'email' => 'sukuna@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT002',
            ],
            [
                'name' => 'Megumi',
                'email' => 'megumi@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT003',
            ],
            [
                'name' => 'Nobara',
                'email' => 'nobara@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT004',
            ],
            [
                'name' => 'Yuta',
                'email' => 'yuta@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT005',
            ],
            [
                'name' => 'Bamba Fall',
                'email' => 'bamba@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT006',
            ],
            [
                'name' => 'Moussa Diop',
                'email' => 'moussa@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT007',
            ],
            [
                'name' => 'Francois Leblanc',
                'email' => 'francois@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT008',
            ],
            [
                'name' => 'Federick Mendy',
                'email' => 'federick@gmail.com',
                'password' =>  bcrypt('12345'),
                'matricule' => 'MAT009',
            ]

        ];
        \App\Models\User::insert($users);
    }
}
