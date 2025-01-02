<?php

namespace Database\Seeders;

use App\Models\Mines;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MinesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mines = [
            [
                'name' => 'Tambang Batubara Ombilin',
                'region' => 'Sumatera Barat',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tambang Emas Freeport',
                'region' => 'Papua',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tambang Nikel Sorowako',
                'region' => 'Sulawesi Selatan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tambang Timah Bangka Belitung',
                'region' => 'Bangka Belitung',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tambang Bauksit Tayan',
                'region' => 'Kalimantan Barat',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tambang Batu Gamping Gunung Kidul',
                'region' => 'Yogyakarta',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Mines::insert($mines);

    }
}
