import { useState } from "react";
import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className="contain flex items-center gap-12 py-8 justify-between relative">
            <div className="logo">
                <span className="text-2xl font-semibold flex items-center justify-center">
                    <img src="/images/tower.png" alt="" className="w-10" />
                    Kubbely.
                </span>
            </div>

            <div
                className={`navigation lg:relative absolute top-full p-6 lg:p-0 w-[calc(100%_-_2rem)] lg:w-auto bg-[#C8E3FC] lg:bg-transparent flex-1 hidden ${
                    toggleMenu === true ? "!block" : ""
                } md:block`}
            >
                <ul className="flex gap-12 lg:justify-end flex-col lg:flex-row items-center">
                    <li className="text-base border-b-2 border-transparent hover:border-b-2 hover:border-black transition cursor-pointer">
                        Home
                    </li>
                    <li className="text-base border-b-2 border-transparent hover:border-b-2 hover:border-black transition cursor-pointer">
                        Resources
                    </li>
                    <li className="text-base border-b-2 border-transparent hover:border-b-2 hover:border-black transition cursor-pointer">
                        Enterprise
                    </li>
                    <li className="text-base border-b-2 border-transparent hover:border-b-2 hover:border-black transition cursor-pointer">
                        Contact
                    </li>
                </ul>
            </div>
            <div className="hamburger lg:hidden">
                <button
                    className="transition"
                    onClick={() => setToggleMenu((currentItem) => !currentItem)}
                >
                    {!toggleMenu ? (
                        <LiaBarsSolid fontSize={32} />
                    ) : (
                        <LiaTimesSolid fontSize={32} />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
