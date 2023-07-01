
import EmptyCustPage from "../../components/EmptyCustPage"
export default function CustMailbox(){
    return(
        <div className="custMailbox-container customer-page-container">
            <h1 className="title--customerLayout">Inbox</h1>
            <EmptyCustPage 
                icon={<i className="fas fa-envelope-open"></i>}
                notification='You have no message'
                explanation='Any messages we send you will be posted here. Stay connected'
            />
        </div>
    )
}