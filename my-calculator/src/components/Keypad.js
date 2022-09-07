import '../styles/layout/Keypad.scss';




const Keypad = (props) => {

    const handleNumber = (ev) => {
        console.log(props.handleShowNumber(ev.currentTarget.value))
       
        
    };

    return (
   <div className="numbersContainer">
       { props.items.map((item) => {
            return (
                <input
                className="numbersContainer__number"
                type="button"
                value={item}
                onClick={handleNumber}
                />
            )
        })}
   </div>
    )
 
}

export default Keypad