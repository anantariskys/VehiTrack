<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriverController extends Controller
{
    public function index()
    {
        $drivers = Driver::all();
        return Inertia::render('Driver/Index', [
            'drivers' => $drivers
        ]);
    }
    public function create()
    {
        return Inertia::render('Driver/Create');
    }
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);


        $vehicle = Driver::create($validated);
        return redirect()->route('driver.index')->with('success', 'Driver created successfully.');
    }
}
