<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Driver;
use App\Models\Vehicle;
use App\Models\VehicleUsage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalDrivers = Driver::count();
        $activeDrivers = Driver::where('status', 'available')->count();
        $unavailableDrivers = Driver::where('status', 'assigned')->count();
        $bookingsDone = VehicleUsage::count();
        $drivers = Driver::all()->map(function ($driver) {
            $driver->approved_bookings_count = $driver->bookings()->count();
            return $driver;
        });

        $totalVehicle = Vehicle::count();
        $availableVehicle = Vehicle::where('status', 'available')->count();
        $unavailableVehicle = Vehicle::where('status', 'unavailable')->count();
        $maintenanceVehicle = Vehicle::where('status', 'maintenance')->count();

        $totalBooking = Booking::count();
        $pendingBooking = Booking::where('status', 'pending')->count();
        $rejectedBooking = Booking::where('status', 'rejected')->count();
        $approvedBooking = Booking::where('status', 'approved')->count();
        $ongoingBooking = Booking::where('progress', 'ongoing')->count();
        $doneBooking = Booking::where('progress', 'done')->count();


        $vehiclesUsage = Booking::with('vehicle')
            ->where('status', 'approved')
            ->where('progress', 'ongoing')
            ->selectRaw('vehicle_id, count(*) as usage_count')
            ->groupBy('vehicle_id')
            ->get();

        $allVehicle = Vehicle::all();

        return Inertia::render('Dashboard', [
            'driverData' => [
                'totalDrivers' => $totalDrivers,
                'activeDrivers' => $activeDrivers,
                'unavailableDrivers' => $unavailableDrivers,
                'bookingsDone' => $bookingsDone,
                'drivers' => $drivers
            ],
            'vehicleData' => [
                'totalVehicle' => $totalVehicle,
                'availableVehicle' => $availableVehicle,
                'unavailableVehicle' => $unavailableVehicle,
                'maintenanceVehicle' => $maintenanceVehicle
            ],
            'bookingData' => [
                'totalBooking' => $totalBooking,
                'pendingBooking' => $pendingBooking,
                'rejectedBooking' => $rejectedBooking,
                'approvedBooking' => $approvedBooking,
                'ongoingBooking' => $ongoingBooking,
                'doneBooking' => $doneBooking
            ],
            'vehiclesUsage' => $vehiclesUsage,
            'allVehicle' => $allVehicle
        ]);
    }
}
