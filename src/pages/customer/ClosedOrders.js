import EmptyCustPage from '../../components/EmptyCustPage'
export default function ClosedOrders(){
    return(
        <div className='container--closedOrders'>
            <EmptyCustPage
                notification='No history to display'
                explanation='All your closed orders will be saved here.'
                btnText='START SHOPPING'
            />
        </div>
    )
}