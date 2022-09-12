import OperatorsContext from "./OperatorsContext";
import { useContext } from "react";

const ResetBtn = () => {
  const {
    setDisplayNumbers,
    setDisplayOperator,
    setNumber1,
    setNumber2,
    setTotal,
  } = useContext(OperatorsContext);
  
  const handleReset = () => {
    setDisplayNumbers([]);
    setDisplayOperator([]);
    setNumber1([]);
    setNumber2([]);
    setTotal([]);
  };

  return <input type="reset" onClick={handleReset}></input>;
};

export default ResetBtn;
