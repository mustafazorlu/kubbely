import React from "react";
import Button from "../../utils/Button";

const Main = () => {
    return (
        <main className="contain pt-16 pb-24 flex">
            <div className="main-content w-1/2">
                <h1 className="font-medium text-7xl mb-10">
                    Collaborate with team, & achieve best work.
                </h1>
                <p className="w-3/4 mb-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto neque quasi temporibus ipsum, assumenda debitis
                    voluptatem repellat nobis nisi, alias aut, error provident
                    vitae quibusdam eius sint omnis? Molestias, quaerat!
                </p>
                <Button />
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img className="w-[75%]" src="/images/team-coding.webp" alt="" />
            </div>
        </main>
    );
};

export default Main;
