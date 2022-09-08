import OperatorsContext from './OperatorsContext';
import { useContext } from 'react';



const ResetBtn = () => {
    const {setNumbers} = useContext(OperatorsContext)
   const handleReset = () => {
     setNumbers([])
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