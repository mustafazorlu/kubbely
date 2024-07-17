import React from "react";
import Button from "../../utils/Button";
import { motion } from "framer-motion";

const Main = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="contain pt-16 pb-24 flex flex-col lg:flex-row"
        >
            <div className="main-content w-full lg:w-1/2 order-2 lg:order-1">
                <h1 className="font-medium text-7xl mb-10 leading-tight">
                    Collaborate with team, & achieve{" "}
                    <span className="bg-[#38A1FF] text-white px-2">
                        best work.
                    </span>
                </h1>
                <p className="w-3/4 mb-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto neque quasi temporibus ipsum, assumenda debitis
                    voluptatem repellat nobis nisi, alias aut, error provident
                    vitae quibusdam eius sint omnis? Molestias, quaerat!
                </p>
                <Button text={"Get Started"} />
            </div>
            <div className="lg:w-1/2 w-full mb-12 lg:mb-0 flex justify-center items-center order-1 lg:order-2">
                <img
                    className="w-[75%]"
                    src="/images/team-coding.webp"
                    alt=""
                />
            </div>
        </motion.main>
    );
};

export default Main;
