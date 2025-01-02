<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Vehicle;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       $this->call(
        [
            DriverSeeder::class,
            VehicleSeeder::class,
            OfficeSeeder::class,
            MinesSeeder::class,
            UserSeeder::class,
            // ServiceSeeder::class,
            // BookingSeeder::class
        ]
       );


        
    }

}
