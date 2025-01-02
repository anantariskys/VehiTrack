<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Jalankan database seed.
     */
    public function run(): void
    {
        $services = [
            [
                'name' => 'Ganti Oli',
                'description' => 'Mengganti oli mesin lama dengan oli baru.',
                'price' => 50000.00,
                'status' => 'ongoing',
                'vehicle_id' => 1, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Penggantian Ban',
                'description' => 'Mengganti ban yang sudah aus dengan ban baru.',
                'price' => 200000.00,
                'status' => 'ongoing',
                'vehicle_id' => 2, // Pastikan id kendaraan ini ada di tabel vehicles
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Perbaikan Rem',
                'description' => 'Memperbaiki sistem rem untuk keamanan yang lebih baik.',
                'price' => 150000.00,
                'status' => 'ongoing',
                'vehicle_id' => 1, // Pastikan id kendaraan ini ada di tabel vehicles
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Service::insert($services);
    }
}
