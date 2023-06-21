import {FC, Suspense, useContext, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";

import "./styles/index.scss";

import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

import {useTheme} from "./theme/useTheme";

export const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>главная</Link>
            <br/>
            <Link to={"/about"}>о сайте</Link>
            <Suspense fallback={<div>load</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
