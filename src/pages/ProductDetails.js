import { getSingleProduct } from "../utils/fetcher"
import { useLoaderData, defer, Await } from "react-router-dom"
import { useContext, Suspense } from "react"
import { CartContext } from "../contexts/CartContext"
import "./ProductDetails.css"
import { useRate as rate } from "../utils/useRate"
import QuantityControler from "../components/QuantityControler"
import Spinner from "../components/Spinner"
export function loader({params}){
    return defer({singleProduct: getSingleProduct(params.id)})
}
export default function PrdoductDetails(){
    const productPromise = useLoaderData()
    const cart = useContext(CartContext)
    const awaitChild =(product)=>{
        const stars = rate(product.rating.rate)
        const {cartItems, setCartItems} = cart;
        const inCart = cartItems.filter(item => item.id===product.id)[0]
        function handleAddToCart(){
            setCartItems(prev=> [...prev, {...product, orderedQuantity: 1}])
        }
        return(
            <>
                <div className="img-section-prdctDetails">
                    <img className="prdct-img-prdctDetails" src={product.image} />
                </div>
                <div className="details-productDetails">
                    <h5 className="title-productDetails">{product.title}</h5>
                    <span className="price-productDetails">{Number.isInteger(product.price)? product.price+'.00':product.price}$</span>
                    <div className="descr-productDetails">{product.description}</div>
                    <span className="rating-productDetails">({product.rating.count}) {stars} {product.rating.rate}</span>
                    {inCart? <QuantityControler itemId={product.id} quantity={inCart.orderedQuantity} className='quantity-cartItem'/> : <button 
                        className="addToCart-prdctDetails"
                        onClick={handleAddToCart}
                        >Add to Cart</button> }
                </div>
            </>
        )
    }
    return(
        <div className="productDetails-container">
                    <Suspense fallback={<Spinner />}>
                        <Await resolve={productPromise.singleProduct}>
                            {awaitChild}
                        </Await>
                    </Suspense>
                
        </div>
    )
}