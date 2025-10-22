import { useEffect, useRef } from "react";


function Hooks() {

    const countValue = useRef(0);
    const divElementRef= useRef();

    function handleClick(){
        countValue.current ++;
        console.log(countValue.current);
        
    }
    useEffect(() => {
        const getDivReference = divElementRef.current;
        getDivReference.style.color = 'red';

        setTimeout(()=>{
                    getDivReference.style.color = 'green';

        },2000);
        console.log(getDivReference);
    },[])

    return (
        <div>
            <h1>Use ref, use callback and use memo hook</h1>
            <button onClick={handleClick}>Click me</button>
            <div ref={divElementRef}>Some random text</div>
        </div>
    )
}
export default Hooks;