<?php

namespace App\Http\Controllers;

use App\Models\UserActivity;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'fuel_cost' => 'required|numeric|min:0',

        ]);


        $vehicle = Vehicle::create($validated);

        if($vehicle){
            UserActivity::logActivity(Auth::user(), 'Vehicle created', $vehicle);
        }
        return redirect()->route('vehicle.index')->with('success', 'Berhasil menambahkan kendaraan');
    }

    public function edit($id)
    {
        $vehicle = Vehicle::find($id);
        return Inertia::render('Vehicle/Edit', [
            'vehicle' => $vehicle
        ]);
    }
    public function update(Request $request, $id)
    {
        $vehicle = Vehicle::find($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'number_plate' => 'required|string|max:255',
            'ownership' => 'required|in:company,rental',
            'type' => 'required|in:freight,passenger',
            'fuel_cost' => 'required|numeric|min:0',
        ]);

        $vehicle->update($request->all());
        UserActivity::logActivity(Auth::user(), 'Vehicle updated', $vehicle);
        return redirect()->route('vehicle.index')->with('status', 'success')->with('message', 'Kendaraan berhasil diubah');
    }
    public function destroy($id)
    {
        $vehicle = Vehicle::find($id);
        if($vehicle->status === 'unavailable'){
            return redirect()->route('vehicle.index')->with('status', 'error')->with('message', 'Kendaraan sedang tidak tersedia, tidak bisa dihapus');
        }
        if($vehicle->status === 'maintenance'){
            return redirect()->route('vehicle.index')->with('status', 'error')->with('message', 'Kendaraan sedang dalam perbaikan, tidak bisa dihapus');
        }
        $vehicle->delete();
        UserActivity::logActivity(Auth::user(), 'Vehicle deleted', $vehicle);
        return redirect()->route('vehicle.index')->with('status', 'success')->with('message', 'Kendaraan berhasil dihapus');
    }
}
