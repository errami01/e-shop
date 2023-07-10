import './CartMenu.css'
import Cart from './Cart'
export default function CartMenu(props){
    const {isOpen} = props
    return(
        <div  className={`container--cartMenu ${!isOpen && 'closed--cartMenu'}`}>
            <Cart />
        </div>
    )
}