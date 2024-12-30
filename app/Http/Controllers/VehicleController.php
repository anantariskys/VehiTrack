<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
{
    public function index(){
        $vehicles =Vehicle::all();
        return Inertia::render('Vehicle/Index',[
            'vehicles' => $vehicles
        ]);
    }
    public function create(){
        return Inertia::render('Vehicle/Create');
    }
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'number_plate' => 'required|string|max:255|unique:vehicles,number_plate',
            'ownership' => 'required|in:company,rental',
            'type' => 'required|in:freight,passenger',
            'status' => 'required|in:available,unavailable,maintenance',
            'fuel_consumption' => 'required|numeric|min:0',
            'last_service_date' => 'nullable|date',
            'next_service_date' => 'nullable|date|after_or_equal:last_service_date',
        ]);


        $vehicle = Vehicle::create($validated);


        return redirect()->route('vehicle.index')->with('success', 'Vehicle created successfully.');
    }
}
