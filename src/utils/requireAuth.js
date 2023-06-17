import { redirect } from "react-router-dom"

export function requireAuth(){
    if(!JSON.parse(localStorage.getItem('token'))) {
        throw redirect("/login")
        
    }
}