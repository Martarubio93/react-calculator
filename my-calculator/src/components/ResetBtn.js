import OperatorsContext from "./OperatorsContext";
import '../styles/layout/ResetBtn.scss';
import { useContext } from "react";

const ResetBtn = () => {
  const {
    setDisplayOperator,
    setNumber1,
    setNumber2,
    setTotal,
    setDisplayTotal,
  } = useContext(OperatorsContext);
  
  const handleReset = () => {
    setDisplayTotal(false);
    setTotal(false);
    setDisplayOperator([]);
    setNumber1([]);
    setNumber2([]);
  };

  return <input className="resetBtn" type="reset" onClick={handleReset}></input>;
};

export default ResetBtn;
