import React from 'react';
//styles
import '../styles/layout/Calculator.scss'
//Components
import Screen from "./Screen";
import Keypad from "./Keypad";
import ResetBtn from './ResetBtn';



const Calculator = () => {

  return (
    <div className="calculatorContainer">
      <Screen/>
      <Keypad/>
      <ResetBtn/>
    </div>
  );
};

export default Calculator;
