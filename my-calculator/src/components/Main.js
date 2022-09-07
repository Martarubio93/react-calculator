import './Calculator'
import Calculator from './Calculator';

const Main = () => {
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ["+", "-", "/", "*", "%"];
    return (
        <main>
       <Calculator numbers={numbers} operators={operators}/>
        </main>
    )
}


export default Main