import { useCallback, useState } from "react";
import Counter from "./counter";



function UseCallBackExample() {
    const [countOne, setcountOne] = useState(0);
    const [countTwo, setcountTwo] = useState(0);

    const memorizeSetCountOneFunc = useCallback(() => setcountOne(countOne +1),[countOne]);
    const memorizeSetCounttwoFunc = useCallback(() => setcountTwo(countTwo + 1),[countTwo]);

    return (
        <div>
            <h1>Use Callback</h1>
            <Counter countValue={countOne} 
            onClick={memorizeSetCountOneFunc} />
            <Counter countValue={countTwo}
             onClick={memorizeSetCounttwoFunc} />

        </div>
    );
}
export default UseCallBackExample;