import React, {useEffect, useState} from 'react';
import './App.css';
import {Socket} from './sockets'
import {Roullette} from "./components/Roulette/Roulette";

export const App = () => {
    const [data, setData] = useState(-1);

    useEffect(() => {
        Socket.connect(setData);
        const timer = setInterval(() => {
            Socket.send("F2AGATHAF")
        }, 10000);
        return () => clearInterval(timer);
    }, [setData]);


    return (
        <>
<Roullette value={data}/>
        </>
    );
}

export default App;
