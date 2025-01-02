import { useModalStore } from "@/store/useModalStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import ApproverCard from "./ApproverCard";
import StatusBadge from "./StatusBadge";

const DetailBookingModal = () => {
    const { data, onClose } = useModalStore();
    return (
        <div
     
            className="h-screen z-50  w-screen fixed  top-0 left-0 bg-black/10 flex justify-center items-center"
        >
            <div className="container flex justify-center items-center">
                <div className="md:w-3/5 container p-4 bg-white shadow rounded-lg">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Detail Pemesanan
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <Icon icon="mdi:close" />
                        </button>
                    </div>
                    <div>
                        <p>Nama driver : {data?.driver.name}</p>
                        {
                            data&&     <p>Status pemesanan : <StatusBadge item={data.status}/></p>
                       
                        }
                        <p>Tanggal mulai : {data?.start_date}</p>
                        {
                            data?.end_date &&<p>Tanggal selesai : {data?.end_date}</p>
                        }
                        {
                            data?.progress &&<p>Progress : <StatusBadge item={data.progress}/></p>
                        }
                 
                        <div className="flex justify-between gap-4 text-sm">
                            <div>
                                <h3 className="font-semibold">
                                    Detail Kendaraan
                                </h3>
                                <ul className="list-disc  list-inside">
                                    <li>
                                        Nama Kendaraan : {data?.vehicle.name}
                                    </li>
                                    <li>Plat : {data?.vehicle.number_plate}</li>
                                    <li>Type : {data?.vehicle.type}</li>
                                    <li>Pemilik : {data?.vehicle.ownership}</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Detail Tambang
                                </h3>
                                <ul className="list-disc  list-inside">
                                    <li>
                                        Nama Tambang : {data?.mine.name}
                                    </li>
                                    <li>Lokasi Tambang : {data?.mine.region}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Pihak yang menyetujui :</p>
                        <div className="flex lg:flex-row lg:h-fit h-40 overflow-y-auto  flex-col gap-2">
                            {data?.approvers.map((approver, index) => (
                                <ApproverCard
                                    width="w-fit"
                                    approver={approver}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailBookingModal;
