import {useTranslation} from "react-i18next";

import {Button, ThemeButton} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classNames/classNames";

import s from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'eng' : 'ru')
    }

    return <Button
        className={classNames(s.langSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}>
        {t('Язык')}
    </Button>
};
