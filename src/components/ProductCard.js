import './ProductCard.css'
import { useRate } from '../utils/useRate';
import { Link } from 'react-router-dom';
// import {nanoid} from 'nanoid'
export default function ProductCard(product){
    const {image, title, price, rating}= product
    const stars= useRate(rating.rate)
    // console.log(rating)
    return(
        <div className="product-container">
            <Link  to={`/${product.category}/${product.id}`}>
            <section className='product-image-section'>
                <img className="product-image" src={image} alt='product image'/>
            </section>
            <section className='name-and-rating'>
                <div className='price'>{Number.isInteger(price)? price+'.00':price}$</div>
                <div className="product-name">{title}</div>    
                <div className="product-rating">
                    <span className='count'>({rating.count})</span>
                    {stars}
                    <span className='rate'>{rating.rate}</span>
                </div>
            </section>
            </Link>
        </div>
    )
} 