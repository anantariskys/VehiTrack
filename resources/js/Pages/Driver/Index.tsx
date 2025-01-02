import Button from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Components/Sidebar";
import MainLayout from "@/Layouts/MainLayout";
import { useNotificationModalStore } from "@/store/useNotificationModalStore";
import { Driver, User, Vehicle } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FC } from "react";

const Index: FC<{
    drivers: Driver[];
    auth: { user: any };
}> = ({ drivers, auth }) => {
const {openModal} = useNotificationModalStore();

const {delete: del} = useForm()

const handleDelete = (id: number) => {
   del(route("driver.destroy", id))
};

    return (
        <MainLayout auth={auth} heading="Data Supir">
            <div className="w-fit">
                <Link className="" href={route("driver.create")}>
                    <Button width="w-fit">Tambah Supir</Button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 grid-rows-1 gap-2 lg:gap-4">
                {drivers.length === 0 && (
                    <p className="col-span-4">tidak ada data</p>
                )}
                {drivers.map((item) => (
                    <div className="w-full p-4 space-y-2 bg-white shadow rounded">
                        <div className="flex items-center justify-between">
                            <p className="lg:text-base text-sm">{item.name}</p>
                            <small
                                className={`${
                                    item.status == "assigned"
                                        ? "bg-secondary"
                                        : "bg-primary"
                                } text-tertiary py-1 px-3  rounded-lg`}
                            >
                                {item.status}
                            </small>
                        </div>
                        <div className="flex gap-2">
                            <Link
                                href={route("driver.edit", item.id)}
                                className="w-fit"
                            >
                                <Button width="w-fit" variant="primary">
                                    Edit
                                </Button>
                            </Link>
                            <Button onClick={() => openModal("Yakin ingin menghapus driver??", () => handleDelete(item.id))} width="w-fit" variant="secondary">
                                Hapus
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default Index;
