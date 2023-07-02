import { useState } from "react";

export function useUserState(initialState){
    const [local, setLocal] = useState(initialState)
    function setUserState(data){
        if(!data) {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
        else localStorage.setItem('user', JSON.stringify(data))
        setLocal(JSON.parse(localStorage.getItem('user')))
    }
    return [local, setUserState ]
}