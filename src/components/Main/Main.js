//Styles
import './Main.scss';
//Components
import Calculator from "../Calculator/Calculator";
import OperatorsContext from "../OperatorsContext";
//Hooks
import { useState } from "react";

const Main = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/", "="];
  const [displayOperator, setDisplayOperator] = useState([]);
  const [number1, setNumber1] = useState([]);
  const [number2, setNumber2] = useState([]);
  const [total, setTotal] = useState();
  const [saveTheNumber, setSaveTheNumber] = useState([]);
  const [saveTheOperator, setSaveTheOperator] = useState([])

  const handleDisplayOperator = (value) => {
    setDisplayOperator([value]);
  };
  const handleDisplayOperatorRepeat = (value) => {
    console.log('hello', displayOperator)
    setDisplayOperator([...displayOperator, value ])
  }
  return (
    <>

    
      <OperatorsContext.Provider
        value={{
          numbers,
          displayOperator,
          operators,
          setDisplayOperator,
          handleDisplayOperator,
          handleDisplayOperatorRepeat,
          number1,
          setNumber1,
          number2,
          setNumber2,
          total,
          setTotal,
          saveTheNumber,
          setSaveTheNumber,
          saveTheOperator,
          setSaveTheOperator,


        }}
      >
        <Calculator />
      </OperatorsContext.Provider>
    </>
  );
};

export default Main;
