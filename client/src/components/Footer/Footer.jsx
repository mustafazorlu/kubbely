import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="contain flex flex-col gap-16 bg-[] p-8 pb-0">
            <div className="flex justify-between">
                <div className="logo">
                    <span className="text-2xl font-semibold flex items-center justify-center">
                        <img src="/images/tower.png" alt="" className="w-10" />
                        Kubbely.
                    </span>
                </div>
                <div className="">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link className="font-light hover:font-medium transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="font-light hover:font-medium">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <div className="mb-8">
                        <h6 className="mb-4">Contact Us</h6>
                        <input
                            type="text"
                            className="w-full outline-none p-4"
                            placeholder="Email address.."
                        />
                    </div>
                    <div className="flex gap-4 justify-end">
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
            <div className="privacy flex justify-between py-8 text-sm text-[#666] border-t-2">
                <span>
                    Created by Kubbely &nbsp; - &nbsp; © 2024 All Rights
                    Reserved
                </span>
                <div className="flex gap-16">
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
