import {FC, useState} from "react";

import s from './Counter.module.scss'

export const Counter: FC = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <button className={s.button} onClick={increment}>increment</button>
            <div>{counter}</div>
        </div>
    );
};