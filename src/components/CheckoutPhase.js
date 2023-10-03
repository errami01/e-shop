import { NavLink } from "react-router-dom"

export default function CheckoutPhase(props){
    const {to, children, ...rest} = props
    return(
        to ? 
                <NavLink 
                to={to}
                {...rest}
                >
                    {children}
                </NavLink> 
            : 
                <li className="phase-li--checkoutLayout">
                    {children}
                </li>
    )
}