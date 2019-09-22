import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Socket} from './sockets'
import {AgathasAss} from "./components/AgathasAss/AgathasAss";
import {Roullette} from "./components/Roulette/Roulette";

export const App = () => {
    const [data, setData] = useState(0);

    useEffect(() => {
        Socket.connect(setData);
        const timer = setInterval(() => {
            Socket.send("F2AGATHAF")
        }, 1000);
        return () => clearInterval(timer);
    }, [setData]);
    let asses = [];
    console.log(data);
    for (let i = 0; i < data.count; i++) {
        asses.push(<AgathasAss width={i}/>)
    }
    return (
        <div>
<Roullette/>


        </div>
    );
}

export default App;
