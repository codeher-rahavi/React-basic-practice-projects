import { useSelector } from "react-redux";


function CounterValue(){
    const state = useSelector(state => state)
    const {countValue} = state;
    console.log(state);
    
    return (
        <div>
            <p>Counter Value is {countValue}</p>
        </div>
    )
}

export default CounterValue;