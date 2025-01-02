import { User } from "@/types";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import { FC, useState } from "react";

const Sidebar: FC<{ auth: { user: User } }> = ({ auth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      href: "dashboard",
      icon: "material-symbols:dashboard-rounded",
      label: "Dashboard",
    },
    {
      href: "vehicle.index",
      icon: "mdi:truck",
      label: "Kendaraan",
    },
    {
      href: "driver.index",
      icon: "mdi:drivers-license",
      label: "Supir",
    },
    {
      href: "service.index",
      icon: "mdi:tools",
      label: "Perbaikan Kendaraan",
    },
    {
      href: "usage.index",
      icon: "mdi:clipboard-text-history",
      label: "Riwayat Pemakaian",
    },
    {
      href: "log.index",
      icon: "icon-park-outline:log",
      label: "Log Aktivitas",
    },
  ];

  if (auth.user.role === "administrator") {
    links.push({
      href: "booking.index",
      icon: "mdi:bookmark-border",
      label: "Pemesanan Kendaraan",
    });
  }

  if (auth.user.role === "approver") {
    links.push({
      href: "approval.index",
      icon: "material-symbols:approval-outline",
      label: "Penyetujuan Pemesanan",
    });
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-10 p-2 text-white bg-primary rounded-md"
      >
        <Icon icon="material-symbols:menu" className="text-2xl" />
      </button>

      <div
        className={`lg:max-w-72 lg:w-72 lg:sticky fixed top-0 right-0 bg-primary gap-4 text-tertiary flex flex-col px-4 py-8 justify-start items-center shadow-lg h-screen w-full transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        <h1 className="text-4xl font-bold">
          <span className="text-secondary">Vehi</span>Track
        </h1>
        <div className=" font-medium space-y-4">
          {links.map(({ href, icon, label }, index) => (
            <Link
              key={index}
              href={route(href)}
              className={`${
                route().current(`${href.split(".")[0]}*`) && "text-secondary"
              } flex h-fit items-center gap-1`}
            >
              <Icon className="text-2xl" icon={icon} />
              <p>{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
