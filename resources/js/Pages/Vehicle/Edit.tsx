import { User, Vehicle } from "@/types";
import { FC } from "react";
import { useForm } from "@inertiajs/react";
import FormInput from "@/Components/FormInput";
import FormSelect from "@/Components/FormSelect";
import MainLayout from "@/Layouts/MainLayout";

const ownershipOptions = [
    { id: "company", name: "Company" },
    { id: "rental", name: "Rental" },
];

const typeOptions = [
    { id: "freight", name: "Freight" },
    { id: "passenger", name: "Passenger" },
];

const Edit: FC<{ auth: { user: User }; errors: any; vehicle: Vehicle }> = ({
    auth,
    errors,
    vehicle,
}) => {
    const { data, setData, put, processing } = useForm({
        name: vehicle.name,
        number_plate: vehicle.number_plate,
        ownership: vehicle.ownership,
        type: vehicle.type,
        fuel_consumption: vehicle.fuel_consumption,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("vehicle.update", vehicle.id), { data });
    };

    return (
        <MainLayout auth={auth} heading="Edit Kendaraan">
            <div className="overflow-x-auto shadow-lg rounded border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-4 p-4">
                    <FormInput
                        id="name"
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                        type="text"
                    />

                    <FormInput
                        id="number_plate"
                        label="Number Plate"
                        value={data.number_plate}
                        onChange={(e) =>
                            setData("number_plate", e.target.value)
                        }
                        error={errors.number_plate}
                        type="text"
                    />

                    <FormSelect
                        id="ownership"
                        label="Ownership"
                        value={data.ownership}
                        onChange={(e) =>
                            setData(
                                "ownership",
                                e.target.value as "company" | "rental"
                            )
                        }
                        options={ownershipOptions}
                        error={errors.ownership}
                    />

                    <FormSelect
                        id="type"
                        label="Type"
                        value={data.type}
                        onChange={(e) =>
                            setData(
                                "type",
                                e.target.value as "freight" | "passenger"
                            )
                        }
                        options={typeOptions}
                        error={errors.type}
                    />

                    <FormInput
                        id="fuel_consumption"
                        label="Fuel Consumption"
                        value={data.fuel_consumption}
                        onChange={(e) =>
                            setData("fuel_consumption", Number(e.target.value))
                        }
                        type="number"
                        error={errors.fuel_consumption}
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
                        disabled={processing}
                    >
                        {processing ? "Memproses..." : "Simpan Perubahan"}
                    </button>
                </form>
            </div>
        </MainLayout>
    );
};

export default Edit;
