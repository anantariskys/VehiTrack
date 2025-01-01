<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Driver;
use App\Models\Mines;
use App\Models\Office;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::with('driver', 'vehicle','approvers','administrator','mine')->get();
        return Inertia::render('Booking/Index', [
            'bookings' => $bookings
        ]);
    }
    public function create()
    {
       $vehicles = Vehicle::select('id', 'name')->where('status', 'available')->get();
        $drivers = Driver::select('id', 'name')->where('status', 'available')->get();
        $mines = Mines::select('id', 'name')->get();
        $approvers = User::select('*')->where('role', 'approver')->get();
        return Inertia::render('Booking/Create',[
            'vehicles' => $vehicles,
            'drivers' => $drivers,
            'approvers' => $approvers,
            'mines' => $mines
        ],
            
        );
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'mines_id' => 'required',
            'vehicle_id' => 'required',
            'driver_id' => 'required',
            'administrator_id' => 'required',
            'approver' => 'required|array',
            'start_date' => 'required',
        ]);
   

        if (count($validated['approver']) < 2) {
            return redirect()->route('booking.create')->with('status', 'error')
            ->with('message', 'Pihak yang menyetujui harus lebih dari satu!');
        }

        $driver = Driver::find($validated['driver_id']);
        $driver->status = 'assigned';
        $driver->save();

        $vehicle = Vehicle::find($validated['vehicle_id']);
        $vehicle->status = 'unavailable';
        $vehicle->save();   

        $booking = Booking::create($validated);
        $booking->approvers()->attach($validated['approver']);
        return redirect()->route('booking.index')->with('status', 'success') 
        ->with('message', 'Pemesanan berhasil ditambahkan!');
    }
}
