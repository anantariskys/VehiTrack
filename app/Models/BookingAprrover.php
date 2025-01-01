<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingAprrover extends Model
{

    protected $table = 'booking_approvers';
    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function approver()
    {
        return $this->belongsTo(User::class, 'approver_id');
    }
}
