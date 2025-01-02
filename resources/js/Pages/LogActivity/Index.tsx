import Button from "@/Components/Button";
import StatusBadge from "@/Components/StatusBadge";
import MainLayout from "@/Layouts/MainLayout";
import { Log, User } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import moment from "moment";
import { FC } from "react";
import Pagination from "@/Components/Pagination";

interface Props {
  logs: {
    data: Log[];
    current_page: number;
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
    next_page_url: string | null;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
  auth: { user: User };
}

const Index: FC<Props> = ({ logs, auth }) => {
  const { props } = usePage();
  console.log(props);

  return (
    <MainLayout auth={auth} heading="Log Aktivitas">
      <div className="w-full overflow-x-scroll lg:text-sm text-xs">
        <table className="w-full">
          <thead className="bg-secondary text-white">
            <tr>
              <th className="px-2 py-2 text-left">Pengguna</th>
              <th className="px-2 py-2 text-left">Aksi</th>
              <th className="px-2 py-2 text-left">Detail</th>
              <th className="px-2 py-2 text-left">Tanggal</th>
            </tr>
          </thead>
          <tbody className="bg-white w-full overflow-hidden">
            {logs.data.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-2 py-2 text-center">
                  Tidak ada aktivitas.
                </td>
              </tr>
            ) : (
              logs.data.map((log) => (
                <tr key={log.id} className="even:bg-gray-100 hover:bg-gray-200">
                  <td className="px-2 py-2">{log.user.name}</td>
                  <td className="px-2 py-2">{log.action}</td>
                  <td className="px-2 py-2 w-80">
                    {log.details !== "null" ? log.details : "-"}
                  </td>
                  <td className="px-2 py-2">
                    {moment(log.created_at).format("DD-MM-YYYY HH:mm:ss")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={logs.current_page}
        lastPage={logs.last_page}
        nextPageUrl={logs.next_page_url}
        prevPageUrl={logs.prev_page_url}
        links={logs.links}
      />
    </MainLayout>
  );
};

export default Index;
