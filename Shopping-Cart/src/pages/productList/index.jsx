import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/productTile";


function ProductListPage() {
    const { loading,listOfProducts } = useContext(ShoppingCartContext);
    console.log(listOfProducts);

    if(loading){
        return <h1>Loading data ! please wait</h1>
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20" >
            <div className="px-4 mx-auto sm:px-6 lg-py-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl" >
                        Our Featured Products
                    </h2>
                </div>


                <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 md:gap-5 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
                    {
                        listOfProducts && listOfProducts.length > 0 ?
                            listOfProducts.map(singleProductTile => <ProductTile singleProductTile={singleProductTile} />)
                            :
                            <h3>Product Not Found</h3>

                    }
                </div>
            </div>
        </section>
    )

}

export default ProductListPage;