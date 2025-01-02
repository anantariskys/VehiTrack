import { Booking, User } from "@/types";
import { FC } from "react";
import { useForm } from "@inertiajs/react";
import FormInput from "@/Components/FormInput";
import MainLayout from "@/Layouts/MainLayout";
import Button from "@/Components/Button";
import FormSelect from "@/Components/FormSelect";

const Create: FC<{
    auth: { user: User };
    errors: any;
    bookings: Booking[];
}> = ({ auth, errors, bookings }) => {
    const { data, setData, post, processing } = useForm({
        booking_id: "",
        fuel_consumption: 0,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
        post(route("usage.store"), { data });
    };

    return (
        <MainLayout auth={auth} heading="Selesaikan Booking">
            <div className="overflow-x-auto shadow-lg rounded border border-gray-200">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-2 lg:space-y-4 p-4"
                >
                    <FormSelect
                        id="booking_id"
                        label="Pemesanan yang ingin diselesaikan"
                        value={data.booking_id}
                        options={bookings.map((booking: Booking) => ({
                            id: booking.id,
                            name: `Pemesanan ${booking.mine.name} dengan driver ${booking.driver.name}`,
                        }))}
                        onChange={(e) => setData("booking_id", e.target.value)} 
                        error={errors.booking_id}
                    />

                    <FormInput
                        id="fuel_consumption"
                        label="Bahan bakar yang digunakan (dalam liter)"
                        value={data.fuel_consumption}
                        onChange={(e) => setData("fuel_consumption", e.target.value as unknown as number )}
                        error={errors.fuel_consumption} 
                        type="number"
                    />
                  
                    <Button type="submit" width="w-fit" disabled={processing}>
                        {processing ? "Menambahkan..." : "Selesaikan"}
                    </Button>
                </form>
            </div>
        </MainLayout>
    );
};

export default Create;
