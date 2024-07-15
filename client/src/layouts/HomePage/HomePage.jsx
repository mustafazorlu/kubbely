import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Production from "../../components/Production/Production";
import Projects from "../../components/Projects/Projects";
import Information from "../../components/Information/Information";

const HomePage = () => {
    return (
        <>
            <Header />
            <Main />
            <Production />
            <Information />
            <Projects />
        </>
    );
};

export default HomePage;
