import {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

import "./styles/index.scss";

import {useTheme} from "app/providers/ThemeProvider";

import {classNames} from "shared/lib/classNames/classNames";


export const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>главная</Link>
            <br/>
            <Link to={"/about"}>о сайте</Link>
            <Suspense fallback={<div>load</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
