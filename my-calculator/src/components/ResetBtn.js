const ResetBtn = (props) => {
   const handleReset = () => {
     props.setNumbers([])
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