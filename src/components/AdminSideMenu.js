import { NavLink } from 'react-router-dom'
import './AdminSideMenu.css'
export default function AdminSideMenu(){
    return(
        <div className="container--adminSideMenu">
            <NavLink to=''>
                <i class="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i class="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i class="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i class="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='dashboard'>
                <i class="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
            </NavLink>
        </div>
    )
}