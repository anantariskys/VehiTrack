<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id('id')->primary()->autoIncrement();
            $table->string('name');
            $table->string('number_plate');
            $table->enum('ownership', ['company', 'rental'])->default('company');
            $table->enum('type', ['freight', 'passenger'])->default('freight');
            $table->enum('status', ['available', 'unavailable', 'maintenance'])->default('available');
            $table->decimal('fuel_consumption', 10, 2);
            $table->date('last_service_date')->nullable();
            $table->date('next_service_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void

    {
        Schema::dropIfExists('vehicles');
    }
};
