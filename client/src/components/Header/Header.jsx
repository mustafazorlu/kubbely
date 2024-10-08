import { useState } from "react";
import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="contain flex items-center gap-12 py-8 justify-between relative"
        >
            <div className="logo">
                <span className="text-2xl font-semibold flex items-center justify-center">
                    <img src="/images/tower.png" alt="" className="w-10" />
                    Kubbely.
                </span>
            </div>

            {/* desktop menu */}
            <div
                className={`navigation lg:bg-transparent hidden lg:block flex-1`}
            >
                <ul className="flex gap-12 lg:justify-end lg:flex-row items-center">
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

            {/* mobile menu */}
            <AnimatePresence>
                {toggleMenu && (
                    <motion.div
                        initial={{ opacity: 0, scale:0 }}
                        animate={{ opacity: 1, scale:1 }}
                        exit={{ opacity: 0, scale:0 }}
                        className={`navigation lg:relative absolute top-full lg:hidden p-6 lg:p-0 w-[calc(100%_-_2rem)] lg:w-auto bg-[#C8E3FC] lg:bg-transparent flex-1`}
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
                    </motion.div>
                )}
            </AnimatePresence>
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
        </motion.header>
    );
};

export default Header;
