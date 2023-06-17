import { useState } from "react";

export function useUserState(){
    const [local, setLocal] = useState()
    function setUserState(data){
        if(!data) localStorage.removeItem('user') 
        else localStorage.setItem('user', JSON.stringify(data))
        setLocal(JSON.parse(localStorage.getItem('user')))
    }
    return [local, setUserState ]
}