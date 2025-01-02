<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{

    protected $guarded = ['id'];
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
    
    public function administrator()
    {
        return $this->belongsTo(User::class, 'administrator_id');
    }
    public function approver()
    {
        return $this->belongsToMany(User::class, 'booking_approvers', 'booking_id', 'approver_id');
    }

    public function mine()
    {
        return $this->belongsTo(Mines::class,'mines_id');
    }

    public function approvers()
    {
        return $this->belongsToMany(User::class, 'booking_approvers', 'booking_id', 'approver_id')
                    ->withPivot('status', 'created_at', 'updated_at')
                    ->withTimestamps();
    }   
    

}
