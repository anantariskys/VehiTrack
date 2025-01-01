<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\UserActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        if($vehicle){
            UserActivity::logActivity(Auth::user(), 'Driver created', $vehicle);
        }
        return redirect()->route('driver.index')->with('status', 'success')
        ->with('message', 'Driver berhasil ditambahkan');
    }

    public function edit($id)
    {
        $driver = Driver::find($id);
        return Inertia::render('Driver/Edit', [
            'driver' => $driver
        ]);
    }

    public function update(Request $request, $id)
    {
        $driver = Driver::find($id);
        $driver->update($request->all());
        UserActivity::logActivity(Auth::user(), 'Driver updated', $driver);
        return redirect()->route('driver.index')->with('status', 'success')
        ->with('message', 'Driver berhasil diubah');
    }

    public function destroy($id)
    {
        $driver = Driver::find($id);

        if($driver->status == 'assigned'){
            return redirect()->route('driver.index')->with('status', 'error')
            ->with('message', 'Driver masih bertugas, tidak bisa dihapus');
        }
        $driver->delete();
        UserActivity::logActivity(Auth::user(), 'Driver deleted', $driver);
        return redirect()->route('driver.index')->with('status', 'success')
        ->with('message', 'Driver berhasil dihapus');
    }
}


