import React from "react";
//styles
import styles from './Calculator.scss';
//Components
import Screen from '../Screen/Screen'
import Keypad from '../Keypad/Keypad';


const Calculator = () => {
  return (
    <div className="calculatorContainer">
      <Screen />
      <Keypad />
    </div>
  );
};

export default Calculator;
