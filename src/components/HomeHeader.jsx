import { TbGridDots } from "react-icons/tb";

import ProfileIcon from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const HomeHeader = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                    Gmail
                </span>
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                    Images
                </span>
            </div>

            <div className="flex gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                    <TbGridDots size={20} color="#5f6368" />
                </span>
                <span className="h-10 w-10 relative flex justify-center items-center">
                    <img className="absolute" src={ProfileRing} />
                    <span className="h-8 w-8 rounded-full overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={ProfileIcon}
                        />
                    </span>
                </span>
            </div>
        </header>
    );
};

export default HomeHeader;
