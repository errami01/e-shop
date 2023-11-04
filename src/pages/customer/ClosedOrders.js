import { useLoaderData } from 'react-router-dom'
import EmptyCustPage from '../../components/EmptyCustPage'
import { getClosedOrders } from '../../utils/fetcher'
import ClosedOrder from '../../components/ClosedOrder'

export async function loader(){
    return await getClosedOrders()
} 
export default function ClosedOrders(){
    const loaderData = useLoaderData()
    const closedOrders = loaderData && Object.values(loaderData).map((arr, index)=>{
        return <ClosedOrder key={index} orders={arr}/>
    })
    return(
        <div className='container--closedOrders'>
            {
                loaderData?
                    closedOrders
                :
                    <EmptyCustPage
                    icon={<i className="fa-solid fa-cart-flatbed-suitcase"></i>}
                    notification='No history to display'
                    explanation='All your closed orders will be saved here.'
                    btnText='START SHOPPING'
                />
            }
        </div>
    )
}