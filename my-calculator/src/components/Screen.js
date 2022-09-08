import '../styles/layout/Screen.scss'
import React from 'react';
import OperatorsContext from './OperatorsContext';

const Screen = (props) => {
const items = React.useContext(OperatorsContext)

    return <div className="screen">
            {props.numbers}
    </div>
}



export default Screen