import Button from "@/Components/Button";
import  { Link, usePage } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import StatusBadge from "@/Components/StatusBadge";
import MainLayout from "@/Layouts/MainLayout";
import { Service, User } from "@/types";
import { useForm } from "@inertiajs/react";
import { FC, useState } from "react";

const Index: FC<{ services: Service[]; auth: { user: User } }> = ({
    services,
    auth,
}) => {
    const { flash } = usePage().props as unknown as { flash: { message?: string } };
    const { post, processing } = useForm();
    const [actionId, setActionId] = useState<string>("");

    const handleServiceDone = (id: number) => {
        setActionId(`action-${id}`);
        post(route("service.done", id));
    };

    return (
        <MainLayout auth={auth} heading="Data Perbaikan Kendaraan">
            <div className="w-fit   mb-2 lg:mb-4">
                <Link href={route("service.create")}>
                    <Button width="w-fit">Tambah Perbaikan</Button>
                </Link>
            </div>
            <div className="w-full overflow-x-scroll lg:text-sm text-xs">
                <table className="w-full overflow-x-auto table-auto border-collapse">
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">Mobil</th>
                            <th className="px-4 py-2 text-left">Nama Service</th>
                            <th className="px-4 py-2 text-left">Harga</th>
                            <th className="px-4 py-2 text-left">Deskripsi</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {services.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-4 py-2 text-center"
                                >
                                    Tidak ada data
                                </td>
                            </tr>
                        ) : (
                            services.map((item) => (
                                <tr
                                    key={item.id}
                                    className="even:bg-gray-100 hover:bg-gray-200"
                                >
                                    <td className="px-4 py-2">
                                        <p>{item.vehicle.name}</p>
                                        <small>{item.vehicle.number_plate}</small>
                                    </td>
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">
                                        Rp.{item.price}
                                    </td>
                                    <td className="px-4 py-2">
                                        {item.description}
                                    </td>
                                    <td className="px-4 py-2">
                                        <StatusBadge item={item.status} />
                                    </td>
                                    <td className="px-4 py-2">
                                        {item.status === "ongoing" ? (
                                            <Button
                                                variant="primary"
                                                onClick={() =>
                                                    handleServiceDone(item.id)
                                                }
                                                disabled={processing && actionId === `action-${item.id}`}
                                            >
                                                {processing &&
                                                actionId === `action-${item.id}`
                                                    ? "Menyimpan..."
                                                    : "Selesai"}
                                            </Button>
                                        ) : (
                                            <small>Perbaikan selesai</small>
                                        )}
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
