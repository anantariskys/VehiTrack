import MainLayout from "@/Layouts/MainLayout";
import moment from "moment";
import { FC } from "react";
import Pagination from "@/Components/Pagination";
import { Usage, User } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import Button from "@/Components/Button";

interface Props {
    usages: {
        data: Usage[];
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

const Index: FC<Props> = ({ usages, auth }) => {
    const { props } = usePage();
    console.log(props);

    
    return (
        <MainLayout auth={auth} heading="Riwayat Pemakaian Kendaraan">
            <div className="w-fit">
                <Link href={route("usage.create")}>
                    <Button width="w-fit">Selesaikan Pemesanan</Button>
                </Link>
            </div>
            <div className="w-full overflow-x-scroll lg:text-sm text-xs">
                <table className="w-full">
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th className="px-2 py-2 text-left">
                                Nama Kendaraan
                            </th>
                            <th className="px-2 py-2 text-left">
                                Lokasi Booking
                            </th>
                            <th className="px-2 py-2 text-left">Durasi</th>
                            <th className="px-2 py-2 text-left">
                                Konsumsi BBM
                            </th>
                            <th className="px-2 py-2 text-left">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white w-full overflow-hidden">
                        {usages.data.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-2 py-2 text-center"
                                >
                                    Tidak ada riwayat
                                </td>
                            </tr>
                        ) : (
                            usages.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="even:bg-gray-100 hover:bg-gray-200"
                                >
                                    <td className="px-2 py-2">
                                        {item.vehicle.name}
                                    </td>
                                    <td className="px-2 py-2">
                                        Booking {item.booking.mine.name}
                                    </td>
                                    <td className="px-2 py-2 w-80">
                                        {item.duration}
                                    </td>
                                    <td className="px-2 py-2">
                                        {item.fuel_consumption} Liter
                                    </td>
                                    <td className="px-2 py-2">
                           
                                        {moment(item.booking.start_date).format(
                                            "DD-MM-YYYY"
                                        )}-
                                         {moment(item.booking.end_date).format(
                                            "DD-MM-YYYY"
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={usages.current_page}
                lastPage={usages.last_page}
                nextPageUrl={usages.next_page_url}
                prevPageUrl={usages.prev_page_url}
                links={usages.links}
            />
        </MainLayout>
    );
};

export default Index;
