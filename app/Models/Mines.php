<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mines extends Model
{
    protected $table = 'mines';
    protected $primaryKey = 'id';
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
