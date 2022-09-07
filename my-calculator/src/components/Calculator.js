import Screen from './Screen'

const Calculator = (props) => {
    return (
props.numbers.map((num) => {
    return (
        <input
        value={num}
        />
    )
})
    )
}

export default Calculator;