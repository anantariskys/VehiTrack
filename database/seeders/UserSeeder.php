<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mainOfficeUsers = [
            [
                'name' => 'Ananta Risky Susanto',
                'email' => 'admin_main@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'administrator',
                'position' => 'Pengelola Kendaraan',
                'office_id' => 1, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Malsha Aqila',
                'email' => 'approver_main1@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Manajer Utama',
                'office_id' => 1, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kamilia Luthfitah',
                'email' => 'approver_main2@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Kepala Operasi Utama',
                'office_id' => 1, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

   
        $branchOfficeUsers = [
            [
                'name' => 'Lara Mariesta',
                'email' => 'approver_branch1@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Manajer Cabang',
                'office_id' => 2, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Daffa Prayoga',
                'email' => 'approver_branch2@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Kepala Operasi Cabang',
                'office_id' => 2, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Fadillah Putri',
                'email' => 'approver_branch3@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'approver',
                'position' => 'Supervisor Cabang',
                'office_id' => 2, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        User::insert(array_merge($mainOfficeUsers, $branchOfficeUsers));
    }
}
