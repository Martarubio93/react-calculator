import "../styles/layout/Screen.scss";
import "../styles/core/Reset.scss";
import React from "react";
import OperatorsContext from "./OperatorsContext";
import { useContext } from "react";

const Screen = () => {
  const {
    displayOperator,
    number1,
    number2,
    total,
    displayTotal,
    mostrarResult,
  } = useContext(OperatorsContext);

  return (
    <div className="screen">
      <div className="screen__numbers">
        <input className="screen__num" type="text" value={number1.join("")} />
        <input className="screen__num" value={displayOperator.join("")} />
        <input className="screen__num" type="text" value={number2.join("")} />

      </div>
      {console.log(displayTotal)}
      <h2 className="screen__result" > {total} </h2>
    </div>
  );
};

export default Screen;
