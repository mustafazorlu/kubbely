import React from "react";

const Button = ({text}) => {
    return <button className={`bg-black font-medium text-white py-4 px-6 border-2 border-black hover:bg-transparent transition hover:text-black`}>{text}</button>;
};

export default Button;
