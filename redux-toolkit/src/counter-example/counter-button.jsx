import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";


function CounterButton() {

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(handleIncreaseCountAction({
            id:1,
            name : 'rahavi'

        }));
    }


    return (
        <button
            onClick={handleClick}
            className="bg-black text-white font-bold">
            Increase Count
        </button>
    )
}

export default CounterButton;