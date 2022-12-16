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

  const handleDisplayOperator = (value) => {
    setDisplayOperator([value]);
  };

  return (
    <>
      <OperatorsContext.Provider
        value={{
          numbers,
          displayOperator,
          operators,
          setDisplayOperator,
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
