import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
    return (
        <div className="max-w-72 bg-primary gap-4 text-tertiary flex flex-col px-4 py-8 justify-start items-center shadow-lg h-screen w-full">
            <h1 className="text-4xl font-bold">
                <span className="text-secondary">Vehi</span>Track
            </h1>

            <nav className="text-xl font-medium space-y-4">
                <Link href={route("dashboard")} className={`${route().current("dashboard")&&"text-secondary"} flex h-fit justify-between items-center gap-1  `}>
                    <Icon className="text-2xl"  icon={"material-symbols:dashboard-rounded"} />
                    <p>Dashboard</p>
                </Link>
                <Link href={route("dashboard")} className="flex h-fit items-center gap-1  ">
                    <Icon className="text-2xl"  icon={"fluent:vehicle-truck-profile-16-regular"} />
                    <p>Kendaraan</p>
                </Link>
                <Link href={route("dashboard")} className="flex h-fit items-center gap-1  ">
                    <Icon className="text-2xl"  icon={"mdi:drivers-license"} />
                    <p>Driver</p>
                </Link>
                <Link href={route("dashboard")} className="flex h-fit items-center gap-1  ">
                    <Icon className="text-2xl"  icon={"lets-icons:order-fill"} />
                    <p>Booking</p>
                </Link>
                <Link href={route("dashboard")} className="flex h-fit items-center gap-1  ">
                    <Icon className="text-2xl"  icon={"mdi:fuel"} />
                    <p>Fuel</p>
                </Link>
            
            </nav>
        </div>
    );
};

export default Sidebar;
