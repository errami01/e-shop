import EmptyCustPage from '../../components/EmptyCustPage'
export default function OpenOrders(){
    return(
        <div className="container--open-orders">
            <EmptyCustPage 
                notification='You have not placed any orders!'
                explanation='All your orders will be saved here so you can check their status at any time.'
                btnText='CONTINUE SHOPPING'
            />
        </div>
    )
}