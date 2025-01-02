import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Components/Sidebar";
import { FlashProps, User } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePage } from "@inertiajs/react";
import { FC, ReactNode } from "react";
import Toast from "@/Components/Toast";

import { useState, useEffect } from "react";
import Modal from "@/Components/Modal";
// ...

const MainLayout: FC<{
    auth: { user: User };
    children: ReactNode;
    heading: string;
}> = ({ auth, children, heading }) => {
    const { flash } = usePage().props as unknown as { flash: FlashProps };
    const [toast, setToast] = useState<{ message: string; status: "success" | "error" | null } | null>(null);

    useEffect(() => {
        if (flash.message) {
            setToast({ message: flash.message, status: flash.status });
        }
    }, [flash]);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar auth={auth} />
            <main className="w-full overflow-hidden  lg:p-4 p-4 space-y-2 lg:space-y-4">
                <header className="flex bg-secondary shadow-lg p-2 lg:p-4 rounded-md justify-between items-center">
                    <h1 className="md:text-xl text-base lg:text-3xl font-semibold text-tertiary">
                        {heading}
                    </h1>
                    <div className="lg:block hidden">

                    <Dropdown >
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm gap-2 font-medium leading-4 transition duration-150 ease-in-out text-tertiary focus:outline-none"
                                    >
                                    <Icon
                                        icon="mdi:account-circle"
                                        className="text-2xl"
                                    />
                                    <div className="flex flex-col items-start">
                                        <small>{auth.user.role}</small>
                                        <p>{auth.user.name}</p>
                                    </div>
                                    <svg
                                        className="-me-0.5 ms-2 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                            />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                </header>
                {toast && (
                    <Toast
                    message={toast.message}
                    status={toast.status}
                    onClose={() => setToast(null)}
                    />
                )}
                <Modal/>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;

