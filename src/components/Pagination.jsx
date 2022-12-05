import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";

const pagination = [
    { page: 1, startIndex: 1 },
    { page: 2, startIndex: 11 },
    { page: 3, startIndex: 21 },
    { page: 4, startIndex: 31 },
    { page: 5, startIndex: 41 },
    { page: 6, startIndex: 51 },
    { page: 7, startIndex: 61 },
    { page: 8, startIndex: 71 },
    { page: 9, startIndex: 81 },
    { page: 10, startIndex: 91 },
];

const Pagination = ({ queries }) => {
    const { query } = useParams();
    const [page, setPage] = useState(pagination[0].startIndex);
    const navigate = useNavigate();

    useEffect(() => {
        setPage(pagination[0].startIndex);
    }, [query]);

    const paginationClickHandler = (startIndex) => {
        setPage(startIndex);
        navigate(`/${query}/${startIndex}`);
    };

    return (
        <div className="flex flex-col items-center py-14 max-w-[700px]">
            <div className="relative text-[#4285f4]">
                {queries.previousPage && (
                    <div
                        className="absolute left-[-30px] md:left-[-40px] top-[10px]"
                        onClick={() =>
                            paginationClickHandler(
                                queries.previousPage[0].startIndex
                            )
                        }
                    >
                        <FiChevronLeft size={20} className="cursor-pointer" />
                        <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
                            Prev
                        </span>
                    </div>
                )}
                <img className="w-[250px] md:w-[300px]" src={Logo} />
                {queries.nextPage && (
                    <div
                        className="absolute right-[-30px] md:right-[-40px] top-[10px]"
                        onClick={() =>
                            paginationClickHandler(
                                queries.nextPage[0].startIndex
                            )
                        }
                    >
                        <FiChevronRight size={20} className="cursor-pointer" />
                        <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
                            Next
                        </span>
                    </div>
                )}
            </div>
            <div className="flex gap-3 text-[#4285f4] text-sm">
                {pagination.map((p) => (
                    <span
                        key={p.page}
                        onClick={() => paginationClickHandler(p.startIndex)}
                        className={`cursor-pointer ${
                            page === p.startIndex ? "text-black" : ""
                        }`}
                    >
                        {p.page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
