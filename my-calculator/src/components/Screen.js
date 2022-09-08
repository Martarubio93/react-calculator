import '../styles/layout/Screen.scss'
import React from 'react';
import OperatorsContext from './OperatorsContext';
import { useContext } from 'react';

const Screen = () => {
const {numbers}  = useContext(OperatorsContext)
    return <div className="screen">
            {numbers}
    </div>
}



export default Screen