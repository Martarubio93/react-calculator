import '../styles/layout/Keypad.scss';
import OperatorsContext from './OperatorsContext';
import React from 'react';




const Keypad = () => {
    const {items, handleShowNumber} = React.useContext(OperatorsContext)

    const handleNumber = (ev) => {
        handleShowNumber(ev.currentTarget.value)
           
    };

    return (
   <div className="numbersContainer">
       { items.map((item) => {
            return (
                <input
                className="numbersContainer__number"
                type="button"
                key={item}
                value={item}
                onClick={handleNumber}
                />
            )
        })}
   </div>
    )
 
}

export default Keypad