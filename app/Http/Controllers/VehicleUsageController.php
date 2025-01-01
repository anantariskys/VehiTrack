<?php

namespace App\Http\Controllers;

use App\Models\VehicleUsage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleUsageController extends Controller
{
    public function index()
    {
        $usages = VehicleUsage::with(['vehicle','booking'])
        ->orderBy('created_at', 'desc')
        ->paginate(7); 
        return Inertia::render('Usage/Index',[
            'usages' => $usages]);
    }
}
