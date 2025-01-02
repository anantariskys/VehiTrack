// pages/Create.tsx

import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Components/Sidebar";
import { User } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";
import { useForm } from "@inertiajs/react";
import FormInput from "@/Components/FormInput";
import FormSelect from "@/Components/FormSelect";
import MainLayout from "@/Layouts/MainLayout";

const Create: FC<{ auth: { user: User }; errors: any }> = ({
    auth,
    errors,
}) => {
    const { data, setData, post, processing } = useForm({
        name: "",
        number_plate: "",
        ownership: "company",
        type: "freight",
        fuel_cost: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("vehicle.store"), { data });
    };

    return (
        <MainLayout auth={auth} heading="Tambah Kendaraan">
            <div className="overflow-x-auto shadow-lg rounded border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-4 p-4">
                    <FormInput
                        id="name"
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />

                    <FormInput
                        id="number_plate"
                        label="Number Plate"
                        value={data.number_plate}
                        onChange={(e) =>
                            setData("number_plate", e.target.value)
                        }
                        error={errors.number_plate}
                    />

                    <FormSelect
                        id="ownership"
                        label="Ownership"
                        value={data.ownership}
                        onChange={(e) => setData("ownership", e.target.value)}
                        options={[{id:"company",name:"company"},{id:"rental",name:"rental"}]}
                        error={errors.ownership}
                    />

                    <FormSelect
                        id="type"
                        label="Type"
                        value={data.type}
                        onChange={(e) => setData("type", e.target.value)}
                        options={[{id:"freight",name:"freight"},{id:"passenger",name:"passenger"}]}
                        error={errors.type}
                    />

                   
                    <FormInput
                        id="fuel_cost"
                        label="Fuel Consumption"
                        value={data.fuel_cost}
                        onChange={(e) =>
                            setData("fuel_cost", e.target.value)
                        }
                        type="number"
                        error={errors.fuel_cost}
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
                        disabled={processing}
                    >
                        {processing ? "Menambahkan..." : "Tambah Kendaraan"}
                    </button>
                </form>
            </div>
        </MainLayout>
    );
};

export default Create;
