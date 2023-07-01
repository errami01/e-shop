import EmptyOrders from '../../components/EmptyOrders'
export default function ClosedOrders(){
    return(
        <div className='container--closedOrders'>
            <EmptyOrders
                notification='No history to display'
                explanation='All your closed orders will be saved here.'
                btnText='START SHOPPING'
            />
        </div>
    )
}