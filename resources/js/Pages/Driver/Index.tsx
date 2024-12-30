import Button from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Components/Sidebar";
import MainLayout from "@/Layouts/MainLayout";
import { User, Vehicle } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, usePage } from "@inertiajs/react";
import { FC } from "react";


const Index: FC<{ drivers: { name: string,status:"assigned"|"available" }[]; auth: { user: any } }> = ({
    drivers,
    auth,
}) => {


    
    return (
        <MainLayout auth={auth} heading="Data Supir">
            <div>
                <Link className="" href={route("driver.create")}>
                    <Button width="w-fit">Tambah Supir</Button>
                </Link>
            </div>
            <div className="container grid grid-cols-3 grid-rows-1 gap-4">
                {drivers.map((item) => (
                    <div className="w-full p-4 bg-white shadow rounded">
                        <div className="flex items-center justify-between">
                        <p>{item.name}</p>
                        <small className=  {`${item.status=="assigned"?"bg-secondary":"bg-primary"} text-tertiary py-1 px-3  rounded-lg`}>{item.status}</small>

                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default Index;
