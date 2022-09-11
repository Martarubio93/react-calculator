import "../styles/layout/Keypad.scss";
import OperatorsContext from "./OperatorsContext";
import ButtonNumbers from "./ButtonNumbers";
import React from "react";

const Keypad = () => {
  const {
    numbers,
    operators,
    handleDisplayOperator,
    displayOperator,
    number1,
    number2,
    setTotal,
  } = React.useContext(OperatorsContext);

  const add = () => {
    setTotal(number1 + number2);
  };

  const substr = () => {
    setTotal(number1 - number2)
  }


  const handleOperator = (ev) => {
    handleDisplayOperator(ev.currentTarget.value);
    checkOperator();
  };

  const checkOperator = () => {
    displayOperator.forEach((item) => {
      if (item === "+") {
        add();
      }else if (item === "-"){
        substr()
      }   
    });
  };

  return (
    <div className="container">
      {numbers.map((num, index) => {
        return <ButtonNumbers key={index} num={num} />;
      })}
      {operators.map((oper) => {
        return (
          <input
            className="container__btn"
            key={oper}
            value={oper}
            onClick={handleOperator}
          />
        );
      })}
    </div>
  );
};

export default Keypad;
