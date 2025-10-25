import useCounter from "../store/use-counter";


function CounterValue(){

    const stateValue = useCounter(state => state);
    const {count} = stateValue;
    return (
        <div>Counter Value is {count}</div>
    )
}

export default CounterValue;