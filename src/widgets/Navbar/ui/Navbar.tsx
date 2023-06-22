import {classNames} from "shared/lib/classNames/classNames";

import s from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={s.mainLink}>
                    главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    о сайте
                </AppLink>
            </div>
        </div>
    );
};

