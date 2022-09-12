import "../styles/layout/Keypad.scss";
import OperatorsContext from "./OperatorsContext";
import ResetBtn from "./ResetBtn";
import React from "react";

const Keypad = () => {
  const {
    numbers,
    operators,
    handleDisplayOperator,
    displayOperator,
    number1,
    number2,
    setNumber1,
    setNumber2,
    setTotal,
    setDisplayTotal,
  } = React.useContext(OperatorsContext);

  const add = () => {
    let newNumber1 = 0;
    let newNumber2 = 0;
    for (let i = 0; i < number1.length; i++) {
      let currentNumber1 = number1[i];
      newNumber1 = newNumber1 * 10 + currentNumber1;
    }
    for (let i = 0; i < number2.length; i++) {
      let currentNumber2 = number2[i];
      newNumber2 = newNumber2 * 10 + currentNumber2;
    }
    return setTotal(newNumber1 + newNumber2);
  };

  const substr = () => {
    let newNumber1 = 0;
    let newNumber2 = 0;
    for (let i = 0; i < number1.length; i++) {
      let currentNumber1 = number1[i];
      newNumber1 = newNumber1 * 10 + currentNumber1;
    }
    for (let i = 0; i < number2.length; i++) {
      let currentNumber2 = number2[i];
      newNumber2 = newNumber2 * 10 + currentNumber2;
    }
    return setTotal(newNumber1 - newNumber2);
  };

  const mult = () => {
    let newNumber1 = 0;
    let newNumber2 = 0;
    for (let i = 0; i < number1.length; i++) {
      let currentNumber1 = number1[i];
      newNumber1 = newNumber1 * 10 + currentNumber1;
    }
    for (let i = 0; i < number2.length; i++) {
      let currentNumber2 = number2[i];
      newNumber2 = newNumber2 * 10 + currentNumber2;
    }
    return setTotal(newNumber1 * newNumber2);
  };

  const div = () => {
    let newNumber1 = 0;
    let newNumber2 = 0;
    for (let i = 0; i < number1.length; i++) {
      let currentNumber1 = number1[i];
      newNumber1 = newNumber1 * 10 + currentNumber1;
    }
    for (let i = 0; i < number2.length; i++) {
      let currentNumber2 = number2[i];
      newNumber2 = newNumber2 * 10 + currentNumber2;
    }
    return setTotal(newNumber1 / newNumber2);
  };

  const handleOperator = (ev) => {
    handleDisplayOperator(ev.currentTarget.value);
    checkOperator();
  };

  const checkOperator = () => {
    if (displayOperator.includes("+")) {
      add();
    } else if (displayOperator.includes("-")) {
      substr();
    } else if (displayOperator.includes("*")) {
      mult();
    } else if (displayOperator.includes("/")) {
        div(); 
    } else if (displayOperator.includes("=")) {
      setDisplayTotal(true);
    }
  };

  const checkIf = (e) => {
    if (displayOperator.length < 1) {
      setNumber1([...number1, +e.currentTarget.value]);
    } else setNumber2([...number2, +e.currentTarget.value]);
  };

  return (
    <div className="container">
      {numbers.map((num, index) => {
        return (
          <input
            className="container__btn"
            type="text"
            key={index}
            value={num}
            onClick={checkIf}
            readOnly
          />
        );
      })}
      {operators.map((oper) => {
        return (
          <input
            className="container__btn"
            key={oper}
            value={oper}
            onClick={handleOperator}
            readOnly
          />
        );
      })}
      <ResetBtn />
    </div>
  );
};

export default Keypad;
