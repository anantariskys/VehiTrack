import Button from "@/Components/Button";
import StatusBadge from "@/Components/StatusBadge";
import MainLayout from "@/Layouts/MainLayout";
import { useNotificationModalStore } from "@/store/useNotificationModalStore";
import { Vehicle } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { FC } from "react";

const Index: FC<{ vehicles: Vehicle[]; auth: { user: any } }> = ({
    vehicles,
    auth,
}) => { 
    const {delete:del} = useForm()
    const {openModal} = useNotificationModalStore()

    const handleDelete = (id: number) => {
        del(route("vehicle.destroy", id))
    }
    return (
        <MainLayout auth={auth} heading="Data Kendaraan">
            <div className="w-fit">
                <Link className="" href={route("vehicle.create")}>
                    <Button width="w-fit">Tambah Kendaraan</Button>
                </Link>
            </div>
            <div className="overflow-x-auto shadow-lg rounded border lg:text-sm text-xs border-gray-200">
                <table className="min-w-full table-auto">
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">ID</th>
                            <th className="px-4 py-2 text-left">Nama Kendaraan</th>
                            <th className="px-4 py-2 text-left">Terakhir Servis</th>
                            <th className="px-4 py-2 text-left">Tipe</th>
                            <th className="px-4 py-2 text-left">Kepemilikan</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Kapasitas BBM</th>
                            <th className="px-4 py-2 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {vehicles.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="text-center py-4 text-gray-500"
                                >
                                    Tidak ada data kendaraan.
                                </td>
                            </tr>
                        ) : (
                            vehicles.map((vehicle) => (
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
                                        {vehicle.last_service_date?vehicle.last_service_date:"-" }
                                    </td>
                                    <td className="px-4 py-2">
                                        {vehicle.type}
                                    </td>
                                    <td className="px-4 py-2">
                                        {vehicle.ownership}
                                    </td>
                                    <td className="px-4 py-2">
                                        <StatusBadge item={vehicle.status} />
                                    </td>
                                    <td className="px-4 py-2">
                                        {vehicle.fuel_cost} liter
                                    </td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <Link href={route("vehicle.edit", vehicle.id)}>
                                        <Button width="w-fit">Edit</Button>
                                        </Link>
                                        <Button variant="secondary" onClick={() => openModal("Yakin ingin menghapus kendaraan ini ?", ()=>handleDelete(vehicle.id))} width="w-fit">Hapus</Button>
                                    </td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    );
};

export default Index;
