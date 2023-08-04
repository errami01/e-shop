import { NavLink } from 'react-router-dom'
import './AdminSideMenu.css'
export default function AdminSideMenu(){
    return(
        <div className="container--adminSideMenu">
            <NavLink to=''>
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
        </div>
    )
}