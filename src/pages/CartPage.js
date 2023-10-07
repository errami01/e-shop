import './CartPage.css'
import Cart from '../components/Cart'
import { useOutletContext } from 'react-router-dom'
export default function CartPage(){
  const {cart} = useOutletContext()
    return (
        <div className="container--cartPage">
          <Cart isPage cart={cart}/>
        </div>
    )
}