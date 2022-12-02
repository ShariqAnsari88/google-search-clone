import { Link } from "react-router-dom";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";

const menu = [
    { name: "All", icon: <GoSearch /> },
    { name: "Images", icon: <BsImage size={14} /> },
    { name: "News", icon: <BiNews /> },
    { name: "Videos", icon: <RiVideoLine /> },
    { name: "Shopping", icon: <SlTag size={14} /> },
];

const SearchResultHeader = () => {
    const [selectedMenu, setSelectedMenu] = useState("All");
    return (
        <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow">
                    <Link to="/">
                        <img
                            className="hidden md:block w-[92px] mr-10"
                            src={Logo}
                            alt="Logo"
                        />
                    </Link>
                    <SearchInput from="searchResult" />
                </div>
                <div className="hidden md:block">
                    <ProfileIcon />
                </div>
            </div>

            <div className="flex ml-[-12px] mt-3">
                {menu.map((menu, index) => (
                    <span
                        key={index}
                        className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
                            selectedMenu === menu.name ? "text-[#1a73e8]" : ""
                        }`}
                    >
                        <span className="hidden md:block mr-2">
                            {menu.icon}
                        </span>
                        <span className="text-sm">{menu.name}</span>
                        {selectedMenu === menu.name && (
                            <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SearchResultHeader;
