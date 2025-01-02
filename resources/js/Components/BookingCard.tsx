import React, { FC, ReactNode } from "react";
import Button from "./Button";
import { Approver, Booking } from "@/types";
import StatusBadge from "./StatusBadge";
import ApproverCard from "./ApproverCard";

interface BookingCardProps {
    item: Booking;
    index: number;
    children?: ReactNode;
}
const BookingCard: FC<BookingCardProps> = ({ item, index, children }) => {
    console.log(item);
    return (
        <div className="w-full  gap-2 flex flex-col justify-between p-4 bg-white shadow rounded">
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Pemesanan {item.mine.name}
                        </h2>
                        <p className="">
                            Administrator: {item.administrator.name}
                        </p>
                    </div>
                  <StatusBadge item={item.status}/>
                </div>
                <div className="text-sm">
                    {
                        item.start_date && <p>
                        Tanggal Mulai: {item.start_date}
                    </p>
                    }
     
                    {
                        item.end_date && <p>
                        Tanggal Selesai: {item.end_date}
                    </p>
                    }
                  
                </div>

             
            </div>
            <div>{children}</div>
        </div>
    );
};

export default BookingCard;
