import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/google-logo.png";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event?.key === "Enter" && searchQuery?.length > 0) {
            navigate(`/${searchQuery}`);
        }
    };

    return (
        <div className="h-[100vh] flex flex-col">
            <header className="bg-green-100 h-16">header</header>
            <main className="grow flex justify-center">
                <div className="flex flex-col items-center mt-44">
                    <img className="w-[272px] mb-8" src={Logo} alt="Logo" />

                    <div
                        id="searchBox"
                        className="h-[46px] w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
                    >
                        <AiOutlineSearch size={18} color="#9aa0a6" />
                        <input
                            type="text"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            value={searchQuery}
                            className="grow outline-0 text-black/[0.87]"
                        />
                        <div className="flex gap-3">
                            <img
                                className="h-6 w-6 cursor-pointer"
                                src={MicIcon}
                                alt=""
                            />
                            <img
                                className="h-6 w-6 cursor-pointer"
                                src={ImageIcon}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Google Search
                        </button>
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            I'm Feeling Lucky
                        </button>
                    </div>
                </div>
            </main>
            <footer className="h-24 bg-[#f2f2f2]">footer</footer>
        </div>
    );
};

export default Home;
