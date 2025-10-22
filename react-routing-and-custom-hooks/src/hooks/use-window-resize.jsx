import { use, useLayoutEffect, useState } from "react"


function useWindowResize(){
    const [ windowSize , setWindowSize] = useState({
        width:0,
        height:0
    })

    function handelResize(){
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight,
        });
    }

    useLayoutEffect( () => {

        handelResize()
        window.addEventListener('resize',handelResize)

        return () => {
            window.removeEventListener('resize',handelResize);
        }


    },[]);

    return windowSize;
 }

export default useWindowResize;

