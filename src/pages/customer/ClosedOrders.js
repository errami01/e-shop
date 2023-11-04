import { useLoaderData } from 'react-router-dom'
import EmptyCustPage from '../../components/EmptyCustPage'
import { getClosedOrders } from '../../utils/fetcher'
import ClosedOrder from '../../components/ClosedOrder'

export async function loader(){
    return await getClosedOrders()
} 
export default function ClosedOrders(){
    const loaderData = useLoaderData()
    const closedOrders = Object.values(loaderData).map((arr)=>{
        return <ClosedOrder items={arr}/>
    })
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