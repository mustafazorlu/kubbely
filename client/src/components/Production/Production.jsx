import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdCode } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const Production = () => {
    return (
        <section className="production contain">
            <h3>Our Included Services</h3>
            <div className="production-items grid grid-flow-col gap-10">
                <div className="production-item border border-[#333] p-6">
                    <div className="production-icon"></div>
                    <div className="icon">
                        <MdOutlineDesignServices fontSize={32} />
                    </div>
                    <h4>UI/UX Design</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vel, illo!
                    </p>
                    <Link to={"/learn"}>Learn More</Link>
                </div>

                <div className="production-item border border-[#333] p-6">
                    <div className="production-icon"></div>
                    <div>
                        <IoMdCode fontSize={32} />
                    </div>

                    <h4>Web Development</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vel, illo!
                    </p>
                    <Link />
                    <Link to={"/learn"}>Learn More</Link>
                </div>
                <div className="production-item border border-[#333] p-6">
                    <div className="production-icon"></div>
                    <div className="icon">
                        <FaMobileScreenButton fontSize={32} />
                    </div>
                    <h4>UI/UX Design</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vel, illo!
                    </p>
                    <Link />
                    <Link to={"/learn"}>Learn More</Link>
                </div>
                <div className="production-item border border-[#333] p-6">
                    <div className="production-icon"></div>
                    <div className="icon">
                        <MdOutlineSupportAgent fontSize={32} />
                    </div>
                    <h4>UI/UX Design</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vel, illo!
                    </p>
                    <Link />
                    <Link to={"/learn"}>Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default Production;
