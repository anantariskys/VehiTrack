import { FC } from "react";
import { useForm } from "@inertiajs/react";
import FormInput from "@/Components/FormInput";
import FormSelect from "@/Components/FormSelect";
import MainLayout from "@/Layouts/MainLayout";
import Button from "@/Components/Button";

type OptionType = {
    id: number;
    name: string;
}
type CheckboxType = {
    id: number;
    name: string;
    position : string;
}

interface Props {
    auth: any;
    errors: any;
    vehicles: OptionType[];
    drivers: OptionType[];
    mines: OptionType[];
    approvers: CheckboxType[];
}

const Create: FC<Props> = ({
    auth,
    errors,
    vehicles,
    drivers,
    approvers,
    mines
}) => {
    const { data, setData, post, processing } = useForm({
        mines_id: "",
        vehicle_id: "",
        driver_id: "",
        administrator_id: auth.user.id,
        approver: [] as string[],     
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("booking.store"), { data });
    };

   

    return (
        <MainLayout auth={auth} heading="Tambah Pemesanan">
            <div className="overflow-x-auto shadow-lg rounded border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-4 p-4">
                    <FormSelect
                        id="vehicle_id"
                        label="Pilih Kendaraan"
                        value={data.vehicle_id}
                        onChange={(e) => setData("vehicle_id", e.target.value)}
                        options={vehicles}
                        error={errors.vehicle_id}
                    />
                    <FormSelect
                        id="mines_id"
                        label="Pilih Tambang"
                        value={data.mines_id}
                        onChange={(e) => setData("mines_id", e.target.value)}
                        options={mines}
                        error={errors.mines_id}
                    />
                    
            
                    
                    <FormSelect
                        id="driver_id"
                        label="Pilih Driver"
                        value={data.driver_id}
                        onChange={(e) => setData("driver_id", e.target.value)}
                        options={drivers}
                        error={errors.driver_id}
                    />
                    
         

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Pilih Pihak yang Menyetujui (Minimal 2)</label>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">

                        {approvers.map((approver) => (
                            <div key={approver.id} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`approver_${approver.id}`}
                                    name="approver"
                                    value={approver.id.toString()}
                                    checked={data.approver.includes(approver.id.toString())}
                                    onChange={(e) => setData("approver", e.target.checked ? [...data.approver, approver.id.toString()] : data.approver.filter((id) => id !== approver.id.toString()))}
                                    className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-primary"
                                    />
                                <label htmlFor={`approver_${approver.id}`} className="ml-2 text-xs md:text-sm text-gray-600">
                                    {approver.name}-{approver.position}
                                </label>
                               
                            </div>
                        ))}
                        </div>
                        {errors.approver && <p className="mt-2 text-sm text-red-600">{errors.approver}</p>}
                    </div>

                    <Button type="submit" width="w-fit" disabled={processing}>
                        {processing ? "Menambahkan..." : "Tambah Pemesanan"}
                    </Button>
                </form>
            </div>
        </MainLayout>
    );
};

export default Create;
