import React from "react";
//styles
import styles from './Calculator.scss';
//Components
import Screen from '../Screen/Screen'
import Keypad from '../Keypad/Keypad';
/**
 * A basic Container Wrapper component
 * @param {Props} props The props object.
 * @param {string} props.calculatorContainer The content as string.
 */

const Calculator = () => {
  return (
    <div className={[styles.calculatorContainer]}>
      <Screen />
      <Keypad />
    </div>
  );
};

export default Calculator;
