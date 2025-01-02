import { FC } from "react";
import { Link } from "@inertiajs/react";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
  links: Array<{
    url: string | null;
    label: string;
    active: boolean;
  }>;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  lastPage,
  nextPageUrl,
  prevPageUrl,
  links,
}) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">
          Halaman {currentPage} dari {lastPage}
        </span>
      </div>
      <div className="flex space-x-2">

        {prevPageUrl && (
          <Link
            href={prevPageUrl}
            className="px-3 py-1 text-sm text-white bg-primary rounded-md hover:bg-primary-dark"
          >
            Sebelumnya
          </Link>
        )}


        {links.map((link, index) => {
          if (index !== 0 && index !== links.length - 1) { 
            return (
              <Link
                key={index}
                href={link.url || "#"}
                className={`px-3 py-1 text-sm rounded-md ${
                  link.active
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {link.label}
              </Link>
            );
          }
          return null;
        })}

        {nextPageUrl && (
          <Link
            href={nextPageUrl}
            className="px-3 py-1 text-sm text-white bg-primary rounded-md hover:bg-primary-dark"
          >
            Berikutnya
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
