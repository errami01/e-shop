import { getSingleProduct } from "../utils/fetcher"
import { useLoaderData, defer, Await, useOutletContext, Form } from "react-router-dom"
import { Suspense, useRef } from "react"
import "./ProductDetails.css"
import { useRate as rate } from "../utils/useRate"
import QuantityControler from "../components/QuantityControler"
import Spinner from "../components/Spinner"
import Button from "../components/Button"
import { setLocalCart, storeObject } from "../utils/utils"

export function loader({params}){
    return defer({productPromise: getSingleProduct(params.id)})
}
export async function action({request}){
    const formData = await request.formData()
    const newCart= JSON.parse(formData.get('add-to-cart'))
    try{
        
        return await storeObject(newCart, 'carts', setLocalCart)
    }
    catch(e){
        return e
    }
}
export default function PrdoductDetails(){
    const loaderPromises = useLoaderData()
    const {cart} = useOutletContext()
    const isClicked = useRef(false)
    const cartItems = cart
    async function handleAddToCart(){
        isClicked.current = true
    }
    const awaitChild =(resolved)=>{
        const product= resolved
        const stars = rate(product.rating.rate)
        const inCart = cartItems.filter(item => item.id===product.id)[0]
        isClicked.current = isClicked.current && !inCart
        return(
            <>
                <div className="img-section-prdctDetails">
                    <img alt='product-image' className="prdct-img-prdctDetails" src={product.image} />
                    <span className="price-productDetails">{Number.isInteger(product.price)? product.price+'.00':product.price}$</span>
                    {inCart? 
                            <QuantityControler 
                            cart = {cart}
                            itemId={product.id} 
                            quantity={inCart.orderedQuantity} 
                            className='quantity-cartItem'/> 
                        :
                            <Form method="POST">
                                    <Button 
                                        name="add-to-cart"
                                        className="add-to-cart-btn--productsDetails" 
                                        value={JSON.stringify([...cartItems, {...product, orderedQuantity: 1}])}
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                            </Form>
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