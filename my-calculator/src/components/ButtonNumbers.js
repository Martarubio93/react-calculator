import OperatorsContext from "./OperatorsContext";
import React from "react";

const ButtonNumbers = (props) => {
  const { setNumber1, setNumber2, number1} =
    React.useContext(OperatorsContext);


  return (
    <input
      className="container__btn"
      type="text"
      key={props.num}
      value={props.num}
      onClick={(e) => setNumber1([...number1, +e.currentTarget.value])}
    />
 
  );
};

export default ButtonNumbers;
