//Styles
import '../styles/layout/Main.scss';
import './Calculator';
import Calculator from './Calculator';

const Main = () => {
const items = [1, 2, 3, "+", 4, 5, 6,"-", 7, 8, 9,"*",".", 0,"/","=" ];
    return (
       <Calculator items={items} />
    )
}


export default Main