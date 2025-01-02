<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\UserActivity;
use App\Models\VehicleUsage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VehicleUsageController extends Controller
{
    public function index()
    {
        $usages = VehicleUsage::with(['vehicle', 'booking.mine'])
            ->orderBy('created_at', 'desc')
            ->paginate(7);
        return Inertia::render('Usage/Index', [
            'usages' => $usages
        ]);
    }

    public function create()
    {
        $bookings = Booking::with('vehicle', 'driver', 'mine')->where('status', 'approved')->where('progress', 'ongoing')->get();
        return Inertia::render('Usage/Create', [
            'bookings' => $bookings,
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'booking_id' => 'required',
            'fuel_consumption' => 'required|numeric|min:0',
        ]);

        $booking = Booking::with('vehicle', 'driver')->find($validated['booking_id']);

        $data = [
            'booking_id' => $validated['booking_id'],
            'vehicle_id' => $booking->vehicle_id,
            'duration' => $this->calculateDuration($booking->start_date),
            'fuel_consumption' => $validated['fuel_consumption'],
        ];
        $usage = VehicleUsage::create($data);
        if ($usage) {
            $booking->progress = 'done';
            $booking->end_date = now();
            $booking->vehicle->status = 'available';
            $booking->driver->status = 'available';
            $booking->vehicle->save();
            $booking->driver->save();
            $booking->save();
            UserActivity::logActivity(Auth::user(), 'Menambahkan riwayat penggunaan kendaraan', $data);
            return redirect()->route('usage.index')->with('status', 'success')
                ->with('message', 'Riwayat penggunaan kendaraan berhasil ditambahkan!');
        }
        return redirect()->route('usage.index')->with('status', 'error')
            ->with('message', 'Riwayat penggunaan kendaraan gagal ditambahkan!');
    }
    
    private function calculateDuration($startDate)
    {
        $start = Carbon::parse($startDate);
        $now = now();

        
        $days = $start->diffInDays($now);
        $hours = $start->diffInHours($now) % 24;

        $duration = '';
        if ($days >= 1) {
            $duration .= "{$days} hari";
        }
        if ($hours >= 1 ) {
            $duration .= ($days > 0 ? ' ' : '') . "{$hours} jam";
        }

        return $duration ?: 'Kurang dari 1 jam';
    }
}
