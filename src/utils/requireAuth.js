import { redirect } from "react-router-dom"

export function requireAuth(path){
    const param = path? `?redirectTo=${path}` :''
    if(!JSON.parse(localStorage.getItem('token'))) {
        throw redirect(`/login${param}`)
        
    }
}