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
        status: "available",
        fuel_consumption: "",
        last_service_date: "",
        next_service_date: "",
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
                        options={["company", "rental"]}
                        error={errors.ownership}
                    />

                    <FormSelect
                        id="type"
                        label="Type"
                        value={data.type}
                        onChange={(e) => setData("type", e.target.value)}
                        options={["freight", "passenger"]}
                        error={errors.type}
                    />

                    <FormSelect
                        id="status"
                        label="Status"
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        options={["available", "unavailable", "maintenance"]}
                        error={errors.status}
                    />

                    <FormInput
                        id="fuel_consumption"
                        label="Fuel Consumption"
                        value={data.fuel_consumption}
                        onChange={(e) =>
                            setData("fuel_consumption", e.target.value)
                        }
                        type="number"
                        error={errors.fuel_consumption}
                    />

                    <FormInput
                        id="last_service_date"
                        label="Last Service Date"
                        value={data.last_service_date}
                        onChange={(e) =>
                            setData("last_service_date", e.target.value)
                        }
                        type="date"
                    />

                    <FormInput
                        id="next_service_date"
                        label="Next Service Date"
                        value={data.next_service_date}
                        onChange={(e) =>
                            setData("next_service_date", e.target.value)
                        }
                        type="date"
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
