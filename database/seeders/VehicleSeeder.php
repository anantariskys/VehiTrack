<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vehicles = [
            [
            
                'name' => 'Freight Truck A',
                'number_plate' => 'AB-1234-CD',
                'ownership' => 'company',
                'type' => 'freight',
                'status' => 'available',
                'fuel_consumption' => 15.5,
                'last_service_date' => '2024-11-01',
                'next_service_date' => '2025-05-01',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Passenger Van B',
                'number_plate' => 'EF-5678-GH',
                'ownership' => 'rental',
                'type' => 'passenger',
                'status' => 'maintenance',
                'fuel_consumption' => 10.2,
                'last_service_date' => '2024-10-15',
                'next_service_date' => '2025-04-15',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Freight Truck C',
                'number_plate' => 'IJ-9101-KL',
                'ownership' => 'company',
                'type' => 'freight',
                'status' => 'unavailable',
                'fuel_consumption' => 18.0,
                'last_service_date' => '2024-09-20',
                'next_service_date' => '2025-03-20',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Vehicle::insert($vehicles);
    }
}
