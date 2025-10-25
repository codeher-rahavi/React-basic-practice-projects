import  { useActions } from "../store/use-counter";



function ManageCounter() {
    const { handleIncrementCount } = useActions();

    return (
        <button
            onClick={handleIncrementCount}
            className="mb-8 bg-black text-white text-[18px] font-bold">
            Handle Counter Value
        </button>
    )
}

export default ManageCounter;