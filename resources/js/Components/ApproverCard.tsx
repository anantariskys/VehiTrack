import { Approver } from "@/types";
import  { FC } from "react";

interface Props {
    approver: {
        name: string;
    position: string;
    role: string;
    email: string;
    pivot: {
        status: "pending" | "approved" | "rejected";
    };
    
    };
    index: number
    width?: "w-full"|"w-fit"
}
const ApproverCard:FC<Props> = ({approver, index,width ='w-full'}) => {
    return (
        <div
            key={index}
            className={`flex gap-2 text-sm p-2 rounded-md text-primary border-primary border justify-between items-center md:${width} `}
        >
            <div>
                <p className="font-semibold">{approver.name}</p>
                <p className="text-xs">{approver.position}</p>
            </div>
            <div
                className={`size-4 rounded-full ${
                    approver.pivot.status === "approved"
                        ? "bg-green-500"
                        : approver.pivot.status === "pending"
                        ? "bg-gray-400"
                        : "bg-red-500"
                }`}
            ></div>
        </div>
    );
};

export default ApproverCard;
