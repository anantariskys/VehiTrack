<?php

namespace Database\Seeders;


use App\Models\Booking;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $booking = Booking::create([
            'vehicle_id' => 1,
            'administrator_id' => 1,
            'mines_id' => 1,
            'driver_id' => 2,
            'start_date' => now()->addDays(1)->toDateString(),
            'end_date' => now()->addDays(3)->toDateString(),
        ]);

        $booking->approver()->attach([2, 3]);
    }
}
