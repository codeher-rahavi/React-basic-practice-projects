import { useEffect, useState } from "react";
import ProductItem from "./components/productItem";
import "./style.css";


const initialState = true;
function ProductList({name,city,listOfProducts}) {
    
    const [flag , setFlag] = useState(initialState);
    const[count,setCount] = useState(0);
    const [changeStyle,setChangeStyle] = useState(false);
    
    const changeBtn = () =>{
        setFlag(!flag)
    }

    function handleIncreaseCount(){
        setCount(count+1);
    }

    useEffect(() =>{
        setFlag(!flag);
        console.log("run only once page load");

        return () =>{
            console.log("component is unmounted -> some side effects here also ")
        }
    },[])//this will run only once on page load

    useEffect(()=>{
        if(count===10){
            setChangeStyle(true);
        }
    },[count]);

    console.log(changeStyle);

    
    return <div>
                <h3 className="title">
                    Ecommerce Project
                </h3>
                {/* <ProductItem/> */}
                {
                    flag? <h4>{name} and {city} </h4>:<h4>Hello World</h4>
                }
                <button className="btn" onClick={changeBtn}> Change</button>
                <button style={{backgroundColor : changeStyle? 'black':'white', color: changeStyle? 'white':'black'}} onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count is {count}</p>
                
                <ul>
                    {
                        listOfProducts.map((item,index) => 
                        <ProductItem  singleProductitem = {item} key={index}/>
                    )}
                </ul>
            </div>
}

export default ProductList;