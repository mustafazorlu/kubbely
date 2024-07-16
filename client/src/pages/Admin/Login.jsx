import React from "react";
import Button from "../../utils/Button";

const Login = () => {
    return (
        <section className="login flex w-full h-[100vh] justify-center items-center">
            <form className="form bg-[#C8E3FC] p-16 pb-20 flex flex-col items-center w-[500px]">
                <h2 className="p-8 text-center text-4xl font-medium">Log In</h2>
                <div className="input-area mb-6 w-full">
                    <label className="block mb-2 text-lg">Email</label>
                    <input
                        type="text"
                        className="p-4 border-2 border-[#333] outline-none w-full"
                        placeholder="Email"
                    />
                </div>
                <div className="input-area mb-6 w-full">
                    <label className="block mb-2 text-lg">Password</label>
                    <input
                        type="text"
                        className="p-4 border-2 border-[#333] outline-none w-full"
                        placeholder="Password"
                    />
                </div>
                <Button text={"Log In"} />
            </form>
        </section>
    );
};

export default Login;
