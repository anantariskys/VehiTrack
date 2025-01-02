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
                'fuel_cost' => 15.5,
                'last_service_date' => '2024-11-01',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Passenger Van B',
                'number_plate' => 'EF-5678-GH',
                'ownership' => 'rental',
                'type' => 'passenger',
                'status' => 'available',
                'fuel_cost' => 10.2,
                'last_service_date' => '2024-10-15',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Freight Truck C',
                'number_plate' => 'IJ-9101-KL',
                'ownership' => 'company',
                'type' => 'freight',
                'status' => 'available',
                'fuel_cost' => 18.0,
                'last_service_date' => '2024-09-20',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Passenger Van D',
                'number_plate' => 'MN-2345-OP',
                'ownership' => 'rental',
                'type' => 'passenger',
                'status' => 'available',
                'fuel_cost' => 12.5,
                'last_service_date' => '2024-08-10',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Freight Truck E',
                'number_plate' => 'QR-6789-ST',
                'ownership' => 'company',
                'type' => 'freight',
                'status' => 'available',
                'fuel_cost' => 20.0,
                'last_service_date' => '2024-07-05',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Passenger Van F',
                'number_plate' => 'UV-0123-WX',
                'ownership' => 'rental',
                'type' => 'passenger',
                'status' => 'available',
                'fuel_cost' => 11.0,
                'last_service_date' => '2024-06-30',

                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Vehicle::insert($vehicles);
    }
}
