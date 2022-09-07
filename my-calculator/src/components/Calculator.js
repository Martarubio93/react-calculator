//styles
import '../styles/layout/Calculator.scss'
//Components
import Screen from "./Screen";
import Keypad from "./Keypad";
import { useState } from 'react';


const Calculator = (props) => {
const [numbers, setNumbers] = useState([])

const handleShowNumber = (value) => {
  setNumbers([...numbers, value])
}
  return (
    <div className="calculatorContainer">
      <Screen items={props.items} numbers={numbers}/>
      <Keypad  items={props.items} numbers={numbers} handleShowNumber={handleShowNumber}/>
    </div>
  );
};

export default Calculator;
