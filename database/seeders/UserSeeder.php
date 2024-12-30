<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Ananta Risky Susanto',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'administrator',
                'position' => 'Pengelola Kendaraan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Malsha Aqila',
                'email' => 'approver1@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Manajer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kamilia Luthfitah',
                'email' => 'approver2@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Kepala Operasi',
        
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Lara Mariesta',
                'email' => 'approver3@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Manajer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        User::insert($users);
    }
}
