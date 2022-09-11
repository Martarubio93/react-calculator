//Styles
import "../styles/layout/Main.scss";
import "./Calculator";
import Calculator from "./Calculator";
import OperatorsContext from "./OperatorsContext";
//Hooks
import { useState } from "react";

const Main = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", ".", "/", "="];
  const [displayNumbers, setDisplayNumbers] = useState([]);
  const [displayOperator, setDisplayOperator] = useState([]);
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState();

  const handleDisplayNumber = (value) => {
    setDisplayNumbers([...displayNumbers, value]);
  };
  const handleDisplayOperator = (value) => {
    setDisplayOperator([...displayOperator, value]);
  };

  return (
    <>
      <OperatorsContext.Provider
        value={{
          numbers,
          displayNumbers,
          displayOperator,
          operators,
          setDisplayNumbers,
          setDisplayOperator,
          handleDisplayNumber,
          handleDisplayOperator,
          number1,
          setNumber1,
          number2,
          setNumber2,
          total,
          setTotal,
        }}
      >
        <Calculator />
      </OperatorsContext.Provider>
    </>
  );
};

export default Main;
