import OperatorsContext from "./OperatorsContext";
import React from "react";

const ButtonNumbers = (props) => {
  const { numbers, operators, handleDisplayNumber, handleDisplayOperator } =
    React.useContext(OperatorsContext);

  const handleNumber = (ev) => {
    handleDisplayNumber(ev.currentTarget.value);
  };

  
  return (
    <input
      className="container__btn"
      type="button"
      key={props.num}
      value={props.num}
      onClick={handleNumber}
    />
  );
};

export default ButtonNumbers;
