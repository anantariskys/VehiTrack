import Dropdown from "@/Components/Dropdown";
import Sidebar from "@/Components/Sidebar";
import { User } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC, ReactNode } from "react";

const MainLayout: FC<{
    auth: { user: User };
    children: ReactNode;
    heading: string;
}> = ({ auth, children, heading }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <main className="w-full p-4 space-y-4">
                <header className="flex bg-secondary shadow-lg p-4 rounded-md justify-between items-center">
                    <h1 className="text-3xl font-semibold text-tertiary">
                        {heading}
                    </h1>
                    <Dropdown>
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
                </header>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
