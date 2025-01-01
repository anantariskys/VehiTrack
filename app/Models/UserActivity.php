<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserActivity extends Model
{
    protected $fillable = ['user_id', 'action', 'details'];

    public static function logActivity($user, $action, $details = null)
    {
        self::create([
            'user_id' => $user->id,
            'action' => $action,
            'details' => json_encode($details),
        ]);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
