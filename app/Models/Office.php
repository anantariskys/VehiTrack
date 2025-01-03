<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    protected $table = 'offices';
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
