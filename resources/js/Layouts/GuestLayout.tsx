import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen  lg:flex-row flex-col items-center bg-primary  sm:justify-center sm:pt-0">
            <aside
                className="max-w-[50%] w-full bg-gradient-to-r from-secondary/50 to-secondary hidden lg:flex items-center justify-center flex-col  h-screen text-tertiary overflow-hidden rounded-tr-[30%] relative"
                style={{
                    backgroundColor: "#e63946",
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/gplay.png")`,
                }}
            >
                <h1 className="text-7xl font-bold ">VehiTrack</h1>
                <p className="text-lg">
                    Manajemen Kendaraan Lebih Mudah Bersama Vehitrack.
                </p>
            </aside>
            <main
                className=" bg-secondary conta  w-full"
                style={{
                    backgroundColor: "#e63946",
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/gplay.png")`,
                }}
            >
                <div className="lg:bg-primary container bg h-screen flex flex-col gap-2 md:gap-4 text-tertiary justify-center items-center rounded-tr lg:rounded-tr-[40%]">
                    <h2 className="text-4xl font-semibold text-tertiary">
                        Login
                    </h2>
                    <h1 className="text-2xl font-bold lg:hidden block "> Welcome to VehiTrack</h1>
                    <p className="text-sm lg:hidden block">
                        Manajemen Kendaraan Lebih Mudah Bersama Vehitrack.
                    </p>
                    <div className="w-full bg-white overflow-hidden  rounded-md bg px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
