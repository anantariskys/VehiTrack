import BookingCard from "@/Components/BookingCard";
import Button from "@/Components/Button";
import DetailBookingModal from "@/Components/DetailBookingModal";
import MainLayout from "@/Layouts/MainLayout";
import { useModalStore } from "@/store/useModalStore";
import { useNotificationModalStore } from "@/store/useNotificationModalStore";
import { Booking, FlashProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { FC, useEffect, useState } from "react";

const Index: FC<{ bookings: Booking[]; auth: { user: any } }> = ({
    bookings,
    auth,
}) => {
    const { post, processing } = useForm();
    const { onOpen, isOpen } = useModalStore();
    const { isModalOpen, openModal } = useNotificationModalStore();
    const [processingId, setProcessingId] = useState<string | null>(null);

    const handleApprove = (id: number) => {
        setProcessingId(`approve-${id}`);
        post(route("approval.approving", [id, "approved"]), {
            onFinish: () => setProcessingId(null),
        });
    };

    const handleReject = (id: number) => {
        setProcessingId(`reject-${id}`);
        post(route("approval.approving", [id, "rejected"]), {
            onFinish: () => setProcessingId(null),
        });
    };

    return (
        <MainLayout auth={auth} heading="Pemesanan Yang Perlu Persetujuan Anda">
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
                {bookings.map((item, index) => {
                    const approver = item.approvers.find(
                        (approver) => approver.email === auth.user.email
                    );
                    return (
                        <BookingCard key={index} item={item} index={index}>
                            {" "}
                            {isOpen && <DetailBookingModal />}
                            <div className="flex gap-1">
                                {approver?.pivot.status === "pending" ? (
                                    <>
                                        <Button
                                            variant="primary"
                                            onClick={() =>
                                                openModal(
                                                    "Anda yakin menyetujui pemesanan ini?",
                                                    () => handleApprove(item.id)
                                                )
                                            }
                                            disabled={
                                                processingId ===
                                                    `approve-${item.id}` ||
                                                processing
                                            }
                                        >
                                            {processingId ===
                                            `approve-${item.id}`
                                                ? "Memproses..."
                                                : "Setuju"}
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            onClick={() =>
                                                openModal(
                                                    "Anda yakin menolak pemesanan ini?",
                                                    () => handleReject(item.id)
                                                )
                                            }
                                            disabled={
                                                processingId ===
                                                    `reject-${item.id}` ||
                                                processing
                                            }
                                        >
                                            {processingId ===
                                            `reject-${item.id}`
                                                ? "Memproses..."
                                                : "Tolak"}
                                        </Button>
                                    </>
                                ) : approver?.pivot.status === "approved" ? (
                                    <Button width="w-fit">Anda setuju</Button>
                                ) : (
                                    <Button width="w-fit" variant="secondary">
                                        Anda menolak
                                    </Button>
                                )}
                                <Button
                                    variant="tertiary"
                                    disabled={processing}
                                    width="w-fit"
                                    onClick={() => onOpen(item)}
                                >
                                    Detail
                                </Button>
                            </div>
                        </BookingCard>
                    );
                })}
            </div>
        </MainLayout>
    );
};

export default Index;
