
import "./CustAccount.css"
import { requireAuth } from "../../utils/requireAuth"
import { getUserData } from "../../utils/fetcher"
import { useLoaderData } from "react-router-dom"

export async function loader(){
    requireAuth()
    return await getUserData()
}
export default function CustAccount(){
    const userData = useLoaderData()
    const {firstname, lastname, email, phone, address} = userData
    return(
        <div className="myAccount-container customer-page-container">
            <h1 className="title--customerLayout">Your Account</h1>
            <div className="grid--myAccount">
                <div className="info--myAccount">
                    <header className="section-header--myAccount">
                        PERSONAL INFORMATIONS
                    </header>
                    <div className="details-section--myAccount">
                        <ul>
                            <li>{firstname} {lastname}</li>
                            <li>{email}</li>
                            <li>{phone}</li>
                        </ul>
                    </div>
                </div>
                <div className="info--myAccount">
                    <header className="section-header--myAccount">
                        ADDRESSES
                    </header>
                    <div className="details-section--myAccount">
                        <ul>
                            <li>{address?.number} {address?.street}</li>
                            <li>{address?.zipcode}</li>
                            <li>{address?.city}</li>
                        </ul>
                    </div>
                </div>
                <div className="info--myAccount">
                    <header className="section-header--myAccount">
                        COMMUNICATIONS PREFERENCES
                    </header>
                    <div className="details-section--myAccount">
                        <ul>
                            <li>You are not currently subscribed to any of our newsletters.</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}