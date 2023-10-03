import { getSingleProduct } from "../utils/fetcher"
import { useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
import "./ProductDetails.css"
import { useRate as rate } from "../utils/useRate"
import QuantityControler from "../components/QuantityControler"
import Spinner from "../components/Spinner"
import Button from "../components/Button"
import { getLocalCart, setLocalCart, storeObject } from "../utils/utils"
import { myHistory } from "../utils/myHistory"
export function loader({params}){
    return defer({productPromise: getSingleProduct(params.id)})
}
export default function PrdoductDetails(){
    const loaderPromises = useLoaderData()
    const cartItems = getLocalCart()
    const awaitChild =(resolved)=>{
        const product= resolved
        const stars = rate(product.rating.rate)
        const inCart = cartItems.filter(item => item.id===product.id)[0]
        function handleAddToCart(){
            const newCart = [...cartItems, {...product, orderedQuantity: 1}]
            storeObject(newCart, 'carts', setLocalCart)
            myHistory.navigate('#', {replace: true})
        }
        return(
            <>
                <div className="img-section-prdctDetails">
                    <img alt='product-image' className="prdct-img-prdctDetails" src={product.image} />
                    <span className="price-productDetails">{Number.isInteger(product.price)? product.price+'.00':product.price}$</span>
                    {inCart? 
                            <QuantityControler 
                            itemId={product.id} 
                            quantity={inCart.orderedQuantity} 
                            className='quantity-cartItem'/> 
                        : 
                            <Button 
                            className="add-to-cart-btn--productsDetails" 
                            onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                    }
                    
                    <span className="rating-productDetails">({product.rating.count}) {stars} {product.rating.rate}</span>                  
                </div>
                <div className="details-productDetails">
                    <h5 className="title-productDetails">{product.title}</h5>
                    <div className="descr-productDetails">{product.description}</div>
                    
                </div>
            </>
        )
    }
    return(
        <div className="productDetails-container">
                    <Suspense fallback={<Spinner />}>
                        <Await resolve={loaderPromises.productPromise}>
                            {awaitChild}
                        </Await>
                    </Suspense>
                
        </div>
    )
}