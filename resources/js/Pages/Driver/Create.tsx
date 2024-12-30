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
import Button from "@/Components/Button";

const Create: FC<{ auth: { user: User }; errors: any }> = ({
    auth,
    errors,
}) => {
    const { data, setData, post, processing } = useForm({
        name: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("driver.store"), { data });
    };

    return (
        <MainLayout auth={auth} heading="Tambah Driver">
            <div className="overflow-x-auto shadow-lg rounded border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-4 p-4">
                    <FormInput
                        id="name"
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <Button type="submit" width="w-fit" disabled={processing}>
                        {processing ? "Menambahkan..." : "Tambah Driver"}
                    </Button>
                </form>
            </div>
        </MainLayout>
    );
};

export default Create;
