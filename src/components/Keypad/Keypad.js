import './Keypad.scss';
import OperatorsContext from '../OperatorsContext';
import ResetBtn from '../ResetBtn/ResetBtn';
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
  } = React.useContext(OperatorsContext);

  const action = () => {
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
    if (displayOperator.includes("+")) {
      return setTotal(newNumber1 + newNumber2);
    } else if (displayOperator.includes("-")) {
      return setTotal(newNumber1 - newNumber2);
    } else if (displayOperator.includes("*")) {
      return setTotal(newNumber1 * newNumber2);
    } else if (displayOperator.includes("/")) {
      return setTotal(newNumber1 / newNumber2);
    }
    
  };

  const handleOperator = (ev) => {
    handleDisplayOperator(ev.currentTarget.value);
    action();
  };

  const checkIf = (e) => {
    if (displayOperator.length < 1 && number1.length < 10) {
      setNumber1([...number1, +e.currentTarget.value]);
    } else if (displayOperator.length === 1 && number2.length < 10) {
      setNumber2([...number2, +e.currentTarget.value]);
    }
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
      {operators.map((oper, index) => {
        return (
          <input
            className="container__btn"
            key={index}
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
