import {FC} from 'react';

import './index.scss';

import {Counter} from "./components/Counter";

export const App: FC = () => {
    return (
        <div className="app">
            <p>hello world</p>
            <Counter/>
        </div>
    );
};