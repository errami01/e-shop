import './ProductDetails.css'
import './ProductDetailsSkeleton.css'
import Button from '../components/Button'
export default function ProductDetailsSkeleton(){
    return(
        <div className="productDetails-container">
            <div className="img-section-prdctDetails" style={{padding: 20}}>
                <div className='img-section-inner-container--prdct-details'>
                    <div className="image--product-details-skel skeleton" ></div>
                    <span className="skeleton-text skeleton"></span>
                    <Button
                        className="add-to-cart-btn--productsDetails skeleton"
                        disabled
                    >
                        <></>
                    </Button>
                    <span className="skeleton-text skeleton"></span>
                </div>
            </div>
            <div className="details-productDetails">
                <h5 className="title-productDetails skeleton-text skeleton" style={{height:25}}></h5>
                <h5 className="title-productDetails skeleton-text skeleton" style={{height:25}}></h5>
                <div className="">
                    <p className="skeleton-text skeleton"></p>
                    <p className="skeleton-text skeleton"></p>
                    <p className="skeleton-text skeleton"></p>
                    <p className="skeleton-text skeleton"></p>
                    <p className="skeleton-text skeleton"></p>
                    <p className="skeleton-text skeleton" style={{width: "75%"}}></p>
                    <span></span>
                    <span></span>
                </div>   
            </div>
        </div>
    )
}