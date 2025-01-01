<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use App\Models\UserActivity;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::with('vehicle')->get();
        return Inertia::render('Service/Index', [
            'services' => $services
        ]);
    }
    public function create()
    {
        $vehicles = Vehicle::select('id', 'name')->where('status', 'available')->get();
        return Inertia::render('Service/Create', [
            'vehicles' => $vehicles
        ]);
    }
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'vehicle_id' => 'required',
            "description" => "required"
        ]);


        $vehicle = Vehicle::find($validated['vehicle_id']);
        $vehicle->status = 'maintenance';
        $vehicle->save();
        $service = Service::create($validated);
        if($service){
            UserActivity::logActivity(Auth::user(), "Menambahkan perbaikan untuk kendaraan " . $vehicle->name, $service);
        }
        return redirect()->route('service.index')->with('status', 'success')
            ->with('message', 'Perbaikan berhasil ditambahkan');
    }

    public function serviceDone($id){

     
        $service = Service::find($id);

        $service->status = 'done';
        $service->save();

        $vehicle = Vehicle::find($service->vehicle_id);
        $vehicle->status = 'available';
        $vehicle->save();
        UserActivity::logActivity(Auth::user(), "Menyelesaikan perbaikan untuk kendaraan " . $vehicle->name, $service);
        return redirect()->route('service.index')->with('status', 'success')
            ->with('message', 'Perbaikan berhasil diselesaikan');
    }
}
