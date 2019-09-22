import React from 'react';
import './AgathasAss.scss'
export const AgathasAss = props =>{
const {width }  = props;
    return(<div className={'AgathasAss-container'} style={{width: `${width*10}%`}}>
        Ass
    </div>)
}