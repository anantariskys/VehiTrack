// pages/Create.tsx

import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Components/Sidebar";
import { User, Vehicle } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";
import { useForm } from "@inertiajs/react";
import FormInput from "@/Components/FormInput";
import FormSelect from "@/Components/FormSelect";
import MainLayout from "@/Layouts/MainLayout";
import Button from "@/Components/Button";

const Create: FC<{
    auth: { user: User };
    errors: any;
    vehicles: Vehicle[];
}> = ({ auth, vehicles, errors }) => {
    const { data, setData, post, processing } = useForm({
        name: "",
        description: "",
        price: "",
        vehicle_id: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("service.store"), { data });
    };

    return (
        <MainLayout auth={auth} heading="Tambah Perbaikan">
            <div className="overflow-x-auto shadow-lg rounded border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-4 p-4">
                    <FormInput
                        id="name"
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <FormSelect
                        id="vehicle_id"
                        label="Pilih Kendaraan"
                        value={data.vehicle_id}
                        onChange={(e) => setData("vehicle_id", e.target.value)}
                        error={errors.vehicle_id}
                        options={vehicles}
                    />
                    <FormInput
                        id="description"
                        label="Dekripsi (opsional)"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        error={errors.description}
                    />
                    <FormInput
                        id="price"
                        label="Price"
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        error={errors.price}
                    />
                    <Button type="submit" width="w-fit" disabled={processing}>
                        {processing ? "Menambahkan..." : "Tambah Perbaikan"}
                    </Button>
                </form>
            </div>
        </MainLayout>
    );
};

export default Create;
