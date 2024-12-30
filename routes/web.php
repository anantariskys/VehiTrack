<?php

use App\Http\Controllers\DriverController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard-lama', function () {
    return Inertia::render('DashboardLama');
})->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');    
})->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::group(['prefix' => 'vehicle'], function () {
        Route::get('/',[VehicleController::class,'index'])->name('vehicle.index');
        Route::get('/create',[VehicleController::class,'create'])->name('vehicle.create');
        Route::post('/store',[VehicleController::class,'store'])->name('vehicle.store');
    });
    Route::group(['prefix' => 'driver'], function () {
        Route::get('/',[DriverController::class,'index'])->name('driver.index');
        Route::get('/create',[DriverController::class,'create'])->name('driver.create');
        Route::post('/store',[DriverController::class,'store'])->name('driver.store');
    });
});

require __DIR__.'/auth.php';
