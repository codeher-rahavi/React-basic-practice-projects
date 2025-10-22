import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartTile({ singleCartItem }) {
    console.log(singleCartItem);
    

    const {handleRemoveFromCart,handleAddToCart} = useContext(ShoppingCartContext);

    return (

        <Fragment>
            <div className="grid grid-cols-3 items-start gap-5">
                <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-20 shrink-0  p-1 rounded-sm">
                        <img
                            src={singleCartItem?.thumbnail}
                            className="w-full h-full object-contain shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-xl bg-gray-200"
                        />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-900">{singleCartItem?.title}</h3>
                        <button onClick={() => handleRemoveFromCart(singleCartItem , true)} className="text-sm px-4 py-3 bg-black text-white font-extrabold">
                            REMOVE
                         </button>
                    </div>
                </div>
                <div className="ml-auto ">
                    <h3 className="text-lg font-bold text-gray-900">{singleCartItem?.totalPrice.toFixed(2)}</h3>
                    <p className="mt-4 text-md font-semibold">Quantity : {singleCartItem?.quantity}</p>
                    <div className="mt-5 space-x-2">
                        <button 
                            onClick={() => handleRemoveFromCart(singleCartItem , false)} 
                            className="border border-[#000] disabled:opacity-65"
                            disabled = {singleCartItem?.quantity === 1} >
                        -
                        </button>
                        <button 
                            onClick={() => handleAddToCart(singleCartItem)}
                            className="border border-[#000]">
                        +
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-500"/>
        </Fragment>
    )


}
export default CartTile;