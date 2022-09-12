import OperatorsContext from "./OperatorsContext";
import React from "react";

const ButtonNumbers = (props) => {
  const { setNumber1, setNumber2, number1, number2, displayOperator} =
    React.useContext(OperatorsContext);
    
const checkIf = (e) => {
  if (displayOperator.length < 1) {
    setNumber1([...number1, +e.currentTarget.value])

  }else setNumber2([...number2,+e.currentTarget.value ])
}

  return (
    <input
      className="container__btn"
      type="text"
      key={props.num}
      value={props.num}
      onClick={checkIf}
    />
 
  );
};

export default ButtonNumbers;
