import React from "react";
//styles
import "../styles/layout/Calculator.scss";
//Components
import Screen from "./Screen";
import Keypad from "./Keypad";

const Calculator = () => {
  return (
    <div className="calculatorContainer">
      <Screen />
      <Keypad />
    </div>
  );
};

export default Calculator;
