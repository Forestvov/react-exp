import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(s.navbar, {}, [className])}>
        <div className={s.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={s.mainLink}>
                главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                о сайте
            </AppLink>
        </div>
    </div>
);
