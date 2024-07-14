import React from "react";

const Header = () => {
    return (
        <div className="contain flex items-center gap-12 py-8">
            <div className="logo">
                <span className="text-2xl font-semibold flex items-center justify-center">
                    <img src="/images/tower.png" alt="" className="w-10" />
                    Kubbely.
                </span>
            </div>

            <div className="navigation flex-1">
                <ul className="flex gap-12 justify-end">
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
        </div>
    );
};

export default Header;
