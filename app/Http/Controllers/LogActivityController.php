<?php

namespace App\Http\Controllers;

use App\Models\UserActivity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogActivityController extends Controller
{
    public function index(Request $request)
    {
        $logs = UserActivity::with('user')
                            ->orderBy('created_at', 'desc')
                            ->paginate(7); 

        return Inertia::render('LogActivity/Index', [
            'logs' => $logs,
        ]);
    }
}
