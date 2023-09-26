import { redirect } from "react-router-dom"
import { auth } from "../config/firbase"

export function requireAuth(request){
    let path
    if(request){
        const url = new URL(request.url)
        path = url.pathname
    }
    const param = path? `?redirectTo=${path}` :''
    if(!auth.currentUser) {
        throw redirect(`/login${param}`)
    }
}