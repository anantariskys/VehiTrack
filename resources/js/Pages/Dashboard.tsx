import Badge from "@/Components/Badge";
import Button from "@/Components/Button";
import MainLayout from "@/Layouts/MainLayout";
import { useNotificationModalStore } from "@/store/useNotificationModalStore";
import { Driver, User, Vehicle } from "@/types";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FC } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface Props {
    auth: { user: User };
    driverData: {
        totalDrivers: number;
        activeDrivers: number;
        bookingsDone: number;
        unavailableDrivers: number;
        drivers: any[];
    };
    vehicleData: {
        totalVehicle: number;
        availableVehicle: number;
        unavailableVehicle: number;
        maintenanceVehicle: number;
    };
    bookingData: {
        totalBooking: number;
        pendingBooking: number;
        approvedBooking: number;
        rejectedBooking: number;
        ongoingBooking: number;
        doneBooking: number;
    };
    allVehicle: Vehicle[];
    vehiclesUsage: any[];
}
const Dashboard: FC<Props> = ({ driverData, auth, vehicleData,bookingData,allVehicle,vehiclesUsage }) => {
    const { totalDrivers, activeDrivers, unavailableDrivers} =
        driverData;

    const { totalVehicle, availableVehicle, unavailableVehicle, maintenanceVehicle } =
        vehicleData;

    const { totalBooking, pendingBooking, approvedBooking, rejectedBooking,doneBooking,ongoingBooking } =
        bookingData;


console.log(vehiclesUsage,allVehicle);

        const chartData = vehiclesUsage.map((usage: any) => ({
            name: allVehicle.find((v: any) => v.id === usage.vehicle_id)?.name || 'Unknown',
            usage: usage.usage_count,
        }));


    return (
        <MainLayout auth={auth} heading="Dashboard">
            <div className="space-y-4">

                <div className="grid grid-cols-3 p-4  gap-2 grid-rows-1 bg-white shadow-md rounded-lg">
                    <div className="w-full">
                        <h3 className="text-2xl font-semibold">Statistik Driver</h3>
                        <div className="flex gap-2 flex-wrap">
                            <Badge color="primary">
                                Total Driver: {totalDrivers}
                            </Badge>
                            <Badge color="success">
                                Driver Aktif: {activeDrivers}
                            </Badge>
                            <Badge color="warning">
                                Driver Terassign: {unavailableDrivers}
                            </Badge>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="text-2xl font-semibold">Statistik Kendaraan</h3>
                        <div className="flex gap-2 flex-wrap">
                            <Badge color="primary">
                                Total Kendaraan: {totalVehicle}
                            </Badge>
                            <Badge color="success">
                                Kendaraan Tersedia: {availableVehicle}
                            </Badge>
                            <Badge color="warning">
                                 Kendaraan Tidak Tersedia: {unavailableVehicle}
                            </Badge>
                            <Badge color="danger">
                                 Kendaraan Dalam Perawatan: {maintenanceVehicle}
                            </Badge>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="text-2xl font-semibold">Statistik Pemesanan</h3>
                        <div className="flex gap-2 flex-wrap">
                            <Badge color="primary">
                                Total Pemesanan: {totalBooking}
                            </Badge>
                            <Badge color="tertiary">
                                Pending : {pendingBooking}
                            </Badge>
                            <Badge color="danger">
                                 Ditolak : {rejectedBooking}
                            </Badge>
                            <Badge color="success">
                                 Disetujui : {approvedBooking}
                            </Badge>
                            <Badge color="warning">
                                 Berjalan : {ongoingBooking}
                            </Badge>
                            <Badge color="success">
                                 Selesai : {doneBooking}
                            </Badge>
                        </div>
                    </div>
                    
                </div>
                <div>
                <h3 className="text-2xl font-semibold">Grafik Pemakaian Kendaraan</h3>

                {chartData.length === 0 ? (
                    <div className="text-center p-4 text-xl text-gray-500">
                        Saat ini tidak ada kendaraan yang sedang digunakan.
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="usage" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
             
            </div>
        </MainLayout>
    );
};

export default Dashboard;
