import { useEffect } from "react";
import useCounter, { useActions } from "../store/use-counter";


function Products() {

    const productList = useCounter((state) => state.listOfProducts);

    const { fetchListOfProducts } = useActions()

    useEffect(() => {
        fetchListOfProducts()
    }, [])

    console.log(productList);
    return (
        <div>
            <h1>List of Products</h1>
            <ul className="flex flex-wrap">
                {
                    productList && productList?.length > 0 ?
                        productList.map(singleProductItem => <div key={singleProductItem?.id}>
                            <p>{singleProductItem?.title}</p>
                            <img
                                src={singleProductItem?.thumbnail} />
                        </div>)
                        :
                        <h1>Products Not Found</h1>
                }
            </ul>
        </div>
    )
}
export default Products;