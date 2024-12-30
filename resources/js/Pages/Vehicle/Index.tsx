import Button from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Components/Sidebar";
import MainLayout from "@/Layouts/MainLayout";
import { User, Vehicle } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, usePage } from "@inertiajs/react";
import { FC } from "react";

const Index: FC<{ vehicles: Vehicle[]; auth: { user: any } }> = ({
    vehicles,
    auth,
}) => {
    return (
        <MainLayout auth={auth} heading="Data Kendaraan">
                <div>
                <Link className="" href={route("vehicle.create")}>
                    <Button width="w-fit">Tambah Kendaraan</Button>
                </Link>
                </div>
                <div className="overflow-x-auto shadow-lg rounded border border-gray-200">
                    <table className="min-w-full table-auto">
                        <thead className="bg-secondary text-white">
                            <tr>
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">
                                    Nama Kendaraan
                                </th>
                                <th className="px-4 py-2 text-left">
                                    Nomor Kendaraan
                                </th>
                                <th className="px-4 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white ">
                            {vehicles.map((vehicle) => (
                                <tr
                                    key={vehicle.id}
                                    className="even:bg-gray-100 hover:bg-gray-200"
                                >
                                    <td className="px-4 py-2">{vehicle.id}</td>
                                    <td className="px-4 py-2">
                                        <p>{vehicle.name}</p>
                                        <small>{vehicle.number_plate}</small>
                                    </td>
                                    <td className="px-4 py-2">
                                        {vehicle.number_plate}
                                    </td>
                                    <td className="px-4 py-2">
                                        {vehicle.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </MainLayout>
    );
};

export default Index;
