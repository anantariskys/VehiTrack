<?php

namespace App\Exports;

use App\Models\Booking;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class BookingExport implements FromCollection, WithHeadings
{
    /**
     * Mengambil data dari model Booking.
     *
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Booking::with(['vehicle', 'driver', 'administrator']) 
            ->get()
            ->map(function ($booking) {
                return [
                    'ID Pemesanan' => $booking->id,
                    'Status' => $booking->status,
                    'Progress' => $booking->progress,
                    'Tanggal Mulai' => $booking->start_date,
                    'Tanggal Selesai' => $booking->end_date,
                    'Nama Kendaraan' => $booking->vehicle->name, 
                    'Nomor Kendaraan' => $booking->vehicle->number_plate,
                    'Nama Pengemudi' => $booking->driver->name, 
                    'Nama Administrator' => $booking->administrator->name, 
                ];
            });
    }

    /**
     * Menentukan judul kolom pada file Excel.
     *
     * @return array
     */
    public function headings(): array
    {
        return [
            'ID Pemesanan',
            'Status',
            'Progress',
            'Tanggal Mulai',
            'Tanggal Selesai',
            'Nama Kendaraan',
            'Nomor Kendaraan',
            'Nama Pengemudi',
            'Nama Administrator',
        ];
    }

    /**
     * Format tanggal untuk kolom tanggal.
     *
     * @return string
     */
    public function dateFormat(): string
    {
        return 'yyyy-mm-dd'; 
    }
}
