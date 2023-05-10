import './Product.css'
export default function Product(product){
    const {image, title, rating}= product
    // console.log(rating)
    return(
        <div className="product-container">
            <section className='product-image-section'>
                <img className="product-image" src={image} />
            </section>
            <section className='name-and-rating'>
                <div className="product-name">{title}</div>    
                <div className="product-rating">
                    <span className='rate'>{rating.rate}</span>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className='count'>({rating.count})</span>
                </div>
            </section>

        </div>
    )
} 