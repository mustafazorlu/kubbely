import React from "react";

const Information = () => {
    return (
        <section className="information contain flex pb-16 pt-16 flex-col lg:flex-row">
            <h4 className="text-6xl font-medium lg:w-1/2 w-full mb-8 lg:mb-0 leading-tight">
                Digital <span className="bg-[#38A1FF] text-white px-2">Solutions</span> for Modern Problems: Customized
                Software to Meet Your Needs
            </h4>
            <div className="lg:w-1/2 w-full flex items-center justify-center">
                <img src="/images/binary.png" alt="" width={500} />
            </div>
        </section>
    );
};

export default Information;
