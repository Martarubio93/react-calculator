import "../styles/layout/Screen.scss";
import "../styles/core/Reset.scss";
import React from "react";
import OperatorsContext from "./OperatorsContext";
import { useContext } from "react";

const Screen = () => {
  const { displayOperator, number1, number2, total } =
    useContext(OperatorsContext);

  return (
    <div className="screen">
      <div className={`screen__numbers ${total ? "hidden" : ""}`}>
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
        className={`screen__result ${
          displayOperator.includes("=") ? "" : "hidden"
        }`}
      >
        {total}
      </h2>
    </div>
  );
};

export default Screen;
