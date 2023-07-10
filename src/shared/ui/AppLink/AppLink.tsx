import { classNames } from 'shared/lib/classNames/classNames';

import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link to={to} className={classNames(s.appLink, {}, [className, s[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
