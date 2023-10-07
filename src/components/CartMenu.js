import './CartMenu.css'
import Cart from './Cart'
export default function CartMenu(props){
    const {isOpen, cart} = props
    return(
        <div  
            className={`container--cartMenu ${!isOpen && 'closed--cartMenu'}`}
            onClick = {(e)=>{
                //Close cart menu only if go-to-cart button is clicked and stop propagation for all other
                //child elements
                if(e.target.id != 'go-to-cart-btn') e.stopPropagation()
            }
            }
        >
            <Cart cart={cart} withoutDeliveryDate/>
        </div>
    )
}