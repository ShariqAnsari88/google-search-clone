import React from "react";

const menu = ["About", "Advertising", "Business", "How Search works"];
const settingMenu = ["Privacy", "Terms", "Settings"];

const Footer = () => {
    return (
        <footer className="bg-[#f2f2f2]">
            <div className="flex py-[15px] px-[30px] border-b border-[#dadce0]">
                <span className="text-[#70757a] text-[15px] leading-none">
                    India
                </span>
            </div>
            <div className="flex justify-between px-[15px] border-b border-[#dadce0]">
                <div className="flex">
                    {menu.map((menu, index) => (
                        <span
                            key={index}
                            className="text-[#70757a] text-[15px] leading-none p-[14px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>
                <div className="flex">
                    {settingMenu.map((menu, index) => (
                        <span
                            key={index}
                            className="text-[#70757a] text-[15px] leading-none p-[14px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
