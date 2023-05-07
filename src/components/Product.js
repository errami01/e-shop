import './Product.css'
export default function Product(product){
    const {image, title, rating}= product
    // console.log(rating)
    return(
        <div className="product-container">
            <img src={image} width='200'/>
            <h5 className="product-name">{title}</h5>
            <div className="product-rating">
                <span className='rate'>{rating.rate}</span>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span className='count'>({rating.count})</span>
            </div>

        </div>
    )
} 