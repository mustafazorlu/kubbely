import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdCode } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiSeoLine } from "react-icons/ri";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdOutlineMobileFriendly } from "react-icons/md";



const Production = () => {
    return (
        <section className="production contain pb-36">
            <h3 className="text-3xl mb-16 font-medium">Our Included Services</h3>
            <div className="production-items grid lg:grid-flow-col gap-10 grid-flow-row ">
                <div className="production-item border-2 flex flex-col gap-4 border-[#333] p-6 hover:bg-[#c8e3fc] transition cursor-pointer hover:-translate-y-8 hover:border-[#c8e3fc]">
                    <div className="production-icon"></div>
                    <div className="icon">
                        <MdOutlineDesignServices fontSize={32} />
                    </div>
                    <h4 className="font-semibold text-xl">UI/UX Design</h4>
                    <p className="font-light mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, consequatur id perspiciatis iure tempore
                        laboriosam. Repellat odit facilis doloribus aliquid!
                    </p>
                    <Link className="mb-6" to={"/learn"}>
                        Learn More
                    </Link>
                </div>
                <div className="production-item border-2 flex flex-col gap-4 border-[#333] p-6 hover:bg-[#c8e3fc] transition cursor-pointer hover:-translate-y-8 hover:border-[#c8e3fc]">
                    <div className="production-icon"></div>
                    <div className="icon">
                        <IoMdCode fontSize={32} />
                    </div>
                    <h4 className="font-semibold text-xl">Web Development</h4>
                    <p className="font-light mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, consequatur id perspiciatis iure tempore
                        laboriosam. Repellat odit facilis doloribus aliquid!
                    </p>
                    <Link className="mb-6" to={"/learn"}>
                        Learn More
                    </Link>
                </div>
                <div className="production-item border-2 flex flex-col gap-4 border-[#333] p-6 hover:bg-[#c8e3fc] transition cursor-pointer hover:-translate-y-8 hover:border-[#c8e3fc]">
                    <div className="production-icon"></div>
                    <div className="icon">
                        <MdOutlineMobileFriendly fontSize={32} />
                    </div>
                    <h4 className="font-semibold text-xl">App Development</h4>
                    <p className="font-light mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, consequatur id perspiciatis iure tempore
                        laboriosam. Repellat odit facilis doloribus aliquid!
                    </p>
                    <Link className="mb-6" to={"/learn"}>
                        Learn More
                    </Link>
                </div>
                <div className="production-item border-2 flex flex-col gap-4 border-[#333] p-6 hover:bg-[#c8e3fc] transition cursor-pointer hover:-translate-y-8 hover:border-[#c8e3fc]">
                    <div className="production-icon"></div>
                    <div className="icon">
                        <RiSeoLine fontSize={32} />
                    </div>
                    <h4 className="font-semibold text-xl">SEO</h4>
                    <p className="font-light mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, consequatur id perspiciatis iure tempore
                        laboriosam. Repellat odit facilis doloribus aliquid!
                    </p>
                    <Link className="mb-6" to={"/learn"}>
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Production;
