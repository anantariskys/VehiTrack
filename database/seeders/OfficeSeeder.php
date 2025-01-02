<?php

namespace Database\Seeders;

use App\Models\Office;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $offices = [
            [
                'name' => 'Head Office',
                'region' => 'Jakarta',
                'type' => 'Main',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Branch Office - Surabaya',
                'region' => 'Surabaya',
                'type' => 'Branch',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Office::insert($offices);
    }
}
