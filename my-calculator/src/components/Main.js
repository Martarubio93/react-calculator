//Styles
import "../styles/layout/Main.scss";
import "./Calculator";
import Calculator from "./Calculator";
import OperatorsContext from "./OperatorsContext";
//Hooks
import { useState } from "react";

const Main = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", ".", "/", "="];
  const [numbers, setNumbers] = useState([]);

  const handleShowNumber = (value) => {
    setNumbers([...numbers, value]);
  };

  return (
    <OperatorsContext.Provider
      value={{ items, numbers, operators, setNumbers, handleShowNumber }}>
      <Calculator />
    </OperatorsContext.Provider>
  );
};

export default Main;
