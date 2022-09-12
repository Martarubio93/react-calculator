import "../styles/layout/Screen.scss";
import React from "react";
import OperatorsContext from "./OperatorsContext";
import { useContext } from "react";

const Screen = () => {
  const {
    displayNumbers,
    displayOperator,
    number1,
    setNumber1,
    number2,
    setNumber2,
    total,
  } = useContext(OperatorsContext);


  return (
    <div className="screen">
      <div className="screenNumbers">
        <div>
          <input
            type="text"
            value={number1.join("")}
          />
          <input 
          value={displayOperator}
          
        />
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(+e.target.value)}
          />
        </div>

      </div>
 
      <h2>{total}</h2>
    </div>
  );
};

export default Screen;
