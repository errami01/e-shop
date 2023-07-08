import { getData, fetchSingleProduct } from "../utils/fetcher"
import { useLoaderData } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import "./ProductDetails.css"
import { useRate } from "../utils/useRate"
import QuantityControler from "../components/QuantityControler"
export function loader({params}){
    return fetchSingleProduct(params.id)
}
export default function PrdoductDetails(){
    const product = useLoaderData()
    const stars = useRate(product.rating.rate)
    const cart = useContext(CartContext)
    const {cartItems, setCartItems} = cart;
    const inCart = cartItems.filter(item => item.id===product.id)[0]
    function handleAddToCart(){
        setCartItems(prev=> [...prev, {...product, orderedQuantity: 1}])
    }
    
    return(
        <div className="productDetails-container">
            {/* <div className="grid-productDetails"> */}
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
            {/* </div> */}
        </div>
    )
}