import React from "react";

import { quickLinks, settingMenu } from "../utils/constants";

const Footer = () => {
    return (
        <footer className="bg-[#f2f2f2]">
            <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
                <span className="text-[#70757a] text-[15px] leading-none">
                    India
                </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] border-b border-[#dadce0]">
                <div className="flex justify-center">
                    {quickLinks.map((menu, index) => (
                        <span
                            key={index}
                            className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center">
                    {settingMenu.map((menu, index) => (
                        <span
                            key={index}
                            className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
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
