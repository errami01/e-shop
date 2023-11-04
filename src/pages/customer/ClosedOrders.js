import EmptyCustPage from '../../components/EmptyCustPage'
import { getClosedOrders } from '../../utils/fetcher'

export async function loader(){
    return await getClosedOrders()
} 
export default function ClosedOrders(){
    return(
        <div className='container--closedOrders'>
            <EmptyCustPage
                icon={<i className="fa-solid fa-cart-flatbed-suitcase"></i>}
                notification='No history to display'
                explanation='All your closed orders will be saved here.'
                btnText='START SHOPPING'
            />
        </div>
    )
}