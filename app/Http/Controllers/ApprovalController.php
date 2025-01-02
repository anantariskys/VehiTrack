<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\BookingAprrover;
use App\Models\Driver;
use App\Models\UserActivity;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ApprovalController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $bookings = Booking::with('driver', 'vehicle', 'approvers', 'administrator', 'mine')
            ->whereHas('approvers', function ($query) use ($user) {
                $query->where('approver_id', $user->id);
            })
            ->get();



        return Inertia::render('Approval/Index', [
            'bookings' => $bookings,
        ]);
    }

    public function approving($id, $status)
    {
        $approval = BookingAprrover::where('booking_id', $id)
            ->where('approver_id', Auth::user()->id)
            ->first();
        if ($approval) {
            $approval->status = $status;
            $approval->save();
            $allApproval = BookingAprrover::where('booking_id', $id)->get();
            $approvedCount = $allApproval->where('status', 'approved')->count();
            if ($approvedCount === $allApproval->count()) {
                $booking = Booking::find($approval->booking_id);
                $booking->status = 'approved';
                $booking->progress = 'ongoing';
                $booking->start_date = now();
                $booking->save();
            }

            $booking = Booking::find($approval->booking_id);
            if ($status === 'rejected') {
                $booking->status = 'rejected';
                $booking->save();
                $driver = Driver::find($booking->driver_id);
                $driver->status = 'available';
                $driver->save();
                $vehicle = Vehicle::find($booking->vehicle_id);
                $vehicle->status = 'available';
                $vehicle->save();
                UserActivity::logActivity(Auth::user(), 'Pemesanan ditolak', $booking);
            }else{
                UserActivity::logActivity(Auth::user(), 'Pemesanan disetujui', $booking);
            }
            $message = $status === 'approved'
                ? 'Anda berhasil menyetujui pemesanan!'
                : 'Anda berhasil menolak pemesanan!';
            return redirect()->route('approval.index')
                ->with('status', 'success')
                ->with('message', $message);
        }
        return redirect()->route('approval.index')
            ->with('status', 'error')
            ->with('message', 'Approval tidak ditemukan!');
    }
}
