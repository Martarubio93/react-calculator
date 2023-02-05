import "./Screen.scss";
import "../../styles/core/Reset.scss";
import React from "react";
import OperatorsContext from "../OperatorsContext";
import { useContext } from "react";
import { useState, useEffect } from "react";

const Screen = () => {
  const {
    displayOperator,
    setDisplayOperator,
    number1,
    setNumber1,
    number2,
    setNumber2,
    total,
    setTotal,
    saveTheNumber,
    setSaveTheNumber,
    setSaveTheOperator,
  } = useContext(OperatorsContext);
  const regex = /\d+/;

  useEffect(() => {
    if (total || total === 0) {
      setSaveTheNumber(total);
      startAgain();
    }
  }, [total, displayOperator]);

  const startAgain = () => {
    if (displayOperator != "=") {
      console.log("diferente a =", displayOperator);
      setTotal(false);
      setNumber2([]);
      setNumber1([saveTheNumber]);
      setDisplayOperator(displayOperator);
    } else {
      console.log("is =");
    }
  };
  return (
    <div className="screen">
      <div
        className={`screen__numbers ${total || total === 0 ? "hidden" : ""}`}
      >
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
      <h2 className="screen__result">{total}</h2>
    </div>
  );
};

export default Screen;
