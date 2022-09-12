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
  } = useContext(OperatorsContext);


  return (
    <div className="screen">
      <div className="screenNumbers">
    
          <input
            type="text"
            value={number1.join("")}
          />
          <input 
          value={displayOperator.join("")}
        />
          <input
            type="text"
            value={number2.join("")}
          />
        <h2>{displayTotal ? total : ""}</h2>

      </div>
 
 
    </div>
  );
};

export default Screen;
