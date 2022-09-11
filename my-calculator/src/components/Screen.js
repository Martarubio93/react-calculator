import "../styles/layout/Screen.scss";
import React from "react";
import OperatorsContext from "./OperatorsContext";
import { useContext } from "react";

const Screen = () => {
  const { displayNumbers, displayOperator, number1, setNumber1, number2, setNumber2, total} = useContext(OperatorsContext);
  return (
    <div className="screen">
      <div
        className="screenNumbers"
      >
                 <div>
      <input type="number" placeholder="0" value={number1} onChange={e => setNumber1(+e.target.value)}/>
      <input type="number" placeholder="0" value={number2} onChange={e => setNumber2(+e.target.value)}/>
    </div>
        {displayNumbers}
      </div>
      <div
        className="screenOperator"
      >
        {displayOperator}

      </div>
      <h2>{total}</h2>
     
    </div>
  );
};

export default Screen;
