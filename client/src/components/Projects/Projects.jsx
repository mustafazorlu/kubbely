import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section className="production contain pb-48">
            <h3 className="text-3xl mb-16 font-medium">We Work With</h3>

            <div className="projects grid grid-flow-row lg:gap-8 gap-6 lg:grid-flow-col">
                <Link to={"https://www.elbarmobilya.com/"} className="brand">
                    <p>Elbar Mobilya</p>
                    <RiExternalLinkLine />
                </Link>
                <Link
                    to={"https://www.edremithastanetaksi.com/"}
                    className="brand"
                >
                    <p>Edremit Hastane Taksi</p>
                    <RiExternalLinkLine />
                </Link>
                <Link className="brand">
                    <p>Kochan Films</p>
                    <RiExternalLinkLine />
                </Link>
            </div>
        </section>
    );
};

export default Projects;
