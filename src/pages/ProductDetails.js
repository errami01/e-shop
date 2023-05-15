import { getData } from "../utils/fetcher"
import { useLoaderData } from "react-router-dom"
import "./ProductDetails.css"
import { useRate } from "../utils/useRate"
export function loader({params}){
    return getData(params.id)
}
export default function PrdoductDetails(){
    const product = useLoaderData()
    const stars = useRate(product.rating.rate)
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
                    <button className="addToCart-prdctDetails">Add to Cart</button>
                </div>
            {/* </div> */}
        </div>
    )
}