import React from "react";

const Header = () => {
    return (
        <div className="contain flex items-center gap-12 py-8">
            <div className="logo">
                <span className="text-2xl font-semibold">Kubbely</span>
            </div>

            <div className="navigation flex-1">
                <ul className="flex gap-12 justify-end">
                    <li className="text-base border-b-2 border-black font-medium">Home</li>
                    <li className="text-base">Resources</li>
                    <li className="text-base">Enterprise</li>
                    <li className="text-base">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
