import BookingCard from "@/Components/BookingCard";
import Button from "@/Components/Button";
import DetailBookingModal from "@/Components/DetailBookingModal";
import MainLayout from "@/Layouts/MainLayout";
import { useModalStore } from "@/store/useModalStore";
import { Booking } from "@/types";
import { Link } from "@inertiajs/react";
import { FC } from "react";

const Index: FC<{ bookings: Booking[]; auth: { user: any } }> = ({
    bookings,
    auth,
}) => {
    const { isOpen, onOpen } = useModalStore();
    return (
        <>
            <MainLayout auth={auth} heading="Data Pemesanan">
                <div className="flex lg:justify-between gap-2 flex-col lg:flex-row lg:items-center ">
                    <div className="w-fit">
                        <Link href={route("booking.create")}>
                            <Button width="w-fit">Tambah Pemesanan</Button>
                        </Link>
                    </div>
                    <div className="w-fit">
                        <a href={'/export-bookings'}>
                            <Button width="w-fit" variant="secondary">
                                Ekspor Laporan Pemesanan
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  grid-rows-1 gap-4">
                    {bookings.length === 0 && (
                        <p className="text-center col-span-3">tidak ada data</p>
                    )}
                    {bookings.map((item, index) => (
                        <BookingCard key={index} item={item} index={index}>
                            {isOpen && <DetailBookingModal key={item.id} />}
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => onOpen(item)}
                                    width="w-fit"
                                    variant="tertiary"
                                >
                                    Lihat Detail
                                </Button>
                            </div>
                        </BookingCard>
                    ))}
                </div>
            </MainLayout>
        </>
    );
};

export default Index;
