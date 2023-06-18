
import "./MyAccount.css"
import { useOutletContext } from "react-router-dom"

export function loader({request}){
    console.log(request)
    return null
}
export default function MyAccount(){
    const {userData} = useOutletContext()
    const {name, email, phone, address} = userData
    console.log(userData)
    return(
        <div className="myAccount-container">
            <h1 className="title--myAccount">Your Account</h1>
            <div className="grid--myAccount">
                <div className="info--myAccount">
                    <header className="section-header--myAccount">
                        PERSONAL INFORMATIONS
                    </header>
                    <div className="details-section--myAccount">
                        <ul>
                            <li>{name.firstname} {name.lastname}</li>
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
                            <li>{address.number} {address.street}</li>
                            <li>{address.zipcode}</li>
                            <li>{address.city}</li>
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