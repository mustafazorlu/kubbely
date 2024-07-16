import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-16 bg-[#c8e3fc] py-8 pt-16 pb-0">
            <div className="flex justify-between contain flex-col lg:flex-row gap-12 lg:gap-0">
                <div className="logo flex flex-col">
                    <span className="text-2xl mb-8 font-semibold flex items-center">
                        <img src="/images/tower.png" alt="" className="w-10" />
                        Kubbely.
                    </span>
                </div>
                <div className="px-4 lg:px-0">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link className="font-light hover:font-medium transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Enterprise
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="px-4 lg:px-0">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link className="font-light hover:font-medium">
                                UI / UX
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Web Design
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                App Development
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                SEO
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <div className="mb-8 px-4 lg:px-0">
                        <h6 className="mb-4">Contact Us</h6>
                        <input
                            type="text"
                            className="w-full outline-none p-4 border-2 border-[#333]"
                            placeholder="Email address.."
                        />
                    </div>
                    <div className="flex gap-4 lg:justify-end px-4 lg:px-0">
                        <div className="social-media-icon self-start p-4 bg-black text-white hover:-translate-y-2 transition cursor-pointer">
                            <FaInstagram fontSize={20} />
                        </div>
                        <div className="social-media-icon self-start p-4 bg-black text-white hover:-translate-y-2 transition cursor-pointer">
                            <FaTwitter fontSize={20} />
                        </div>
                        <div className="social-media-icon self-start p-4 bg-black text-white hover:-translate-y-2 transition cursor-pointer">
                            <FaDribbble fontSize={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="privacy contain flex flex-col lg:flex-row gap-8 justify-between py-8  text-sm text-[#666] border-t-2 border-[#d4e9fca4]">
                <span className="px-4 lg:px-0">
                    Created by Kubbely &nbsp; - &nbsp; © 2024 All Rights
                    Reserved
                </span>
                <div className="flex lg:gap-16 gap-8 px-4 lg:px-0">
                    <span>
                        <Link className="hover:text-black transition">
                            Privacy
                        </Link>
                    </span>
                    <span>
                        <Link className="hover:text-black transition">
                            Terms
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
