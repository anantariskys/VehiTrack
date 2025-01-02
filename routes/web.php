<?php

use App\Exports\BookingExport;
use App\Http\Controllers\ApprovalController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\LogActivityController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\VehicleUsageController;
use App\Models\UserActivity;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::group(['prefix' => 'vehicle'], function () {
        Route::get('/', [VehicleController::class, 'index'])->name('vehicle.index');
        Route::get('/create', [VehicleController::class, 'create'])->name('vehicle.create');
        Route::post('/store', [VehicleController::class, 'store'])->name('vehicle.store');
        Route::get('/edit/{id}', [VehicleController::class, 'edit'])->name('vehicle.edit');
        Route::put('/store/{id}', [VehicleController::class, 'update'])->name('vehicle.update');
        Route::delete('/{id}', [VehicleController::class, 'destroy'])->name('vehicle.destroy');
    });
    Route::group(['prefix' => 'driver'], function () {
        Route::get('/', [DriverController::class, 'index'])->name('driver.index');
        Route::get('/create', [DriverController::class, 'create'])->name('driver.create');
        Route::post('/store', [DriverController::class, 'store'])->name('driver.store');
        Route::get('/edit/{id}', [DriverController::class, 'edit'])->name('driver.edit');
        Route::put('/store/{id}', [DriverController::class, 'update'])->name('driver.update');
        Route::delete('/{id}', [DriverController::class, 'destroy'])->name('driver.destroy');
    });
    Route::group(['prefix' => 'booking'], function () {
        Route::get('/', [BookingController::class, 'index'])->name('booking.index');
        Route::get('/create', [BookingController::class, 'create'])->name('booking.create');
        Route::post('/store', [BookingController::class, 'store'])->name('booking.store');
    });
    Route::group(['prefix' => 'service'], function () {
        Route::get('/', [ServiceController::class, 'index'])->name('service.index');
        Route::get('/create', [ServiceController::class, 'create'])->name('service.create');
        Route::post('/store', [ServiceController::class, 'store'])->name('service.store');
        Route::post('/{id}', [ServiceController::class, 'serviceDone'])->name('service.done');
    });
    Route::group(['prefix' => 'approval'], function () {
        Route::get('/', [ApprovalController::class, 'index'])->name('approval.index');
        Route::post('/{id}/{status}', [ApprovalController::class, 'approving'])->name('approval.approving');
    });
    Route::group(['prefix' => 'usage'], function () {
        Route::get('/', [VehicleUsageController::class, 'index'])->name('usage.index');
        Route::get("/create", [VehicleUsageController::class, 'create'])->name('usage.create');
        Route::post("/", [VehicleUsageController::class, 'store'])->name('usage.store');
    });
    Route::group(['prefix' => 'log'], function () {
        Route::get('/', [LogActivityController::class, 'index'])->name('log.index');
    });
    Route::get('export-bookings', function () {
        UserActivity::logActivity(Auth::user(), 'Export Bookings');
        return Excel::download(new BookingExport, 'bookings.xlsx');
    });
});

require __DIR__ . '/auth.php';
