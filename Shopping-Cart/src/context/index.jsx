//create the context
//provide the context
//wrap the context in the root component 
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const ShoppingCartContext = createContext(null);


function ShoppingCartProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    async function fetchListOfProducts() {
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json()
        //console.log(result);
        if (result && result?.products) {
            setListOfProducts(result?.products);
            setLoading(false);
        }
    }

    function handleAddToCart(getProductDetails) {
        console.log(getProductDetails);

        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(cartItems => cartItems.id == getProductDetails.id);
        console.log(findIndexOfCurrentItem);


        if (findIndexOfCurrentItem === -1) {
            cpyExistingCartItems.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price
            })
        }
        else {
            console.log('its coming here');
            cpyExistingCartItems[findIndexOfCurrentItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentItem],
                quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
                totalPrice: (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1 )* cpyExistingCartItems[findIndexOfCurrentItem].price
            }



        }

        console.log('cpyExistingCartItems', cpyExistingCartItems);
        setCartItems(cpyExistingCartItems);
        localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
        navigate('/cart');
    }

    //console.log('cpyexisting cart items',cpyExistingCartItems);
    //console.log('find index of current item',findIndexOfCurrentItem);

    function handleRemoveFromCart(getProductDetails, isfullyRemovedFromCart) {
        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(item => item.id === getProductDetails.id);

        if (isfullyRemovedFromCart) {
            cpyExistingCartItems.splice(findIndexOfCurrentItem, 1)
        }
        else {
            cpyExistingCartItems[findIndexOfCurrentItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentItem],
                quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity - 1,
                totalPrice: (cpyExistingCartItems[findIndexOfCurrentItem].quantity - 1) * cpyExistingCartItems[findIndexOfCurrentItem].price
            };
        }

        localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItems));
        setCartItems(cpyExistingCartItems);
    }

    useEffect(() => {
        fetchListOfProducts()
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])

    }, [])
    // console.log(cartItems);

    return <ShoppingCartContext.Provider
        value={{
            loading,
            listOfProducts,
            setProductDetails,
            setLoading,
            productDetails,
            handleAddToCart,
            cartItems,
            handleRemoveFromCart,
        }}>
        {children}
    </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;