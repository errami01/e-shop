
import "./MyAccount.css"
import { useOutletContext } from "react-router-dom"

export function loader({request}){
    console.log(request)
    return null
}
export default function MyAccount(){
    const {userData} = useOutletContext()
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
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="info--myAccount">
                    <header className="section-header--myAccount">
                        ADDRESSES
                    </header>
                    <div className="details-section--myAccount">
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="info--myAccount">
                    <header className="section-header--myAccount">
                        COMMUNICATIONS PREFERENCES
                    </header>
                    <div className="details-section--myAccount">
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}