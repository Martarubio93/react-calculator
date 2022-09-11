import OperatorsContext from './OperatorsContext';
import { useContext } from 'react';



const ResetBtn = () => {
    const {setDisplayNumbers, setDisplayOperator} = useContext(OperatorsContext)
   const handleReset = () => {
     setDisplayNumbers([])
     setDisplayOperator([])
    }

    return (
        <input
        type="reset"
        onClick={handleReset}
        >
        </input>
    )
}


export default ResetBtn