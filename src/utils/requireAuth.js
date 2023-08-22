import { redirect } from "react-router-dom"

export function requireAuth(request){
    let path
    if(request){
        const url = new URL(request.url)
        path = url.pathname
    }
    const param = path? `?redirectTo=${path}` :''
    if(!JSON.parse(localStorage.getItem('user'))) {
        throw redirect(`/login${param}`)
    }
}