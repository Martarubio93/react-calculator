import "./Screen.scss";
import "../../styles/core/Reset.scss";
import React from "react";
import OperatorsContext from "../OperatorsContext";
import { useContext } from "react";

const Screen = () => {
  const {
    displayOperator,
    setDisplayOperator,
    number1,
    setNumber1,
    number2,
    setNumber2,
    total,
    saveTheNumber,
    setSaveTheNumber,
    setSaveTheOperator,
  } = useContext(OperatorsContext);
  const regex = /\d+/;

 /*const removeOperator = () => {
  setSaveTheNumber(total)
  if (displayOperator.includes("=")){
      setDisplayOperator([]);
      setNumber1([total])
      setNumber2([])

  }else {
      setNumber1([total])
      setNumber2([])

  }
  };*/

  /*        {regex.test(total) && removeOperator()} */

  
  return (
    <div className="screen">
      <div className={`screen__numbers ${total || total === 0 ? "hidden" : ""}`}>
        <input
          className="screen__num"
          type="text"
          value={number1.join("")}
          readOnly
        />
        <input
          className="screen__num"
          type="text"
          value={displayOperator.join("")}
          readOnly
        />
        <input
          className="screen__num"
          type="text"
          value={number2.join("")}
          readOnly
        />
      </div>
      <h2
        className="screen__result">
        {total}



      </h2>
    </div>
  );
};

export default Screen;
