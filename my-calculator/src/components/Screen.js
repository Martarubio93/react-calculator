import '../styles/layout/Screen.scss'
import React from 'react';
import OperatorsContext from './OperatorsContext';
import { useContext } from 'react';

const Screen = () => {
const {numbers, operators}  = useContext(OperatorsContext)
    return <>
    <div className="screenNumbers">
            {numbers}
    </div>
    <div className='screenOperatos'>{operators}</div>
    </> 
}



export default Screen