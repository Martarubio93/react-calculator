import OperatorsContext from '../OperatorsContext';
import './ResetBtn.scss';
import { useContext } from "react";

const ResetBtn = () => {
  const { setDisplayOperator, setNumber1, setNumber2, setTotal } =
    useContext(OperatorsContext);

  const handleReset = () => {
    setTotal(false);
    setDisplayOperator([]);
    setNumber1([]);
    setNumber2([]);
  };

  return (
    <input className="resetBtn" type="reset" onClick={handleReset}></input>
  );
};

export default ResetBtn;
