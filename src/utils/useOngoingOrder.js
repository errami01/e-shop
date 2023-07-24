import { useState } from "react";

export default function useOngoingOrder(initialState){
    const [ongoingOrder, setOngoingOrder] = useState(initialState)
    const setOngoingOrderState=(ongoingOrder)=>{
        if(!ongoingOrder){
            localStorage.removeItem('ongoingOrder')
        }
        else localStorage.setItem('ongoingOrder',JSON.stringify(ongoingOrder))
        setOngoingOrder(JSON.parse(localStorage.getItem('ongoingOrder')))
    }
    return [ongoingOrder, setOngoingOrderState]
}
export function setOngoingOrder(newOngoingOrder){
    let ongoingOrder
    if(!newOngoingOrder){
        localStorage.removeItem('ongoingOrder')
        ongoingOrder = null
        return ongoingOrder
    }
    console.log(newOngoingOrder instanceof Function)
    newOngoingOrder = newOngoingOrder instanceof Function ? newOngoingOrder(JSON.parse(localStorage.getItem('ongoingOrder'))) : newOngoingOrder
    localStorage.setItem('ongoingOrder',JSON.stringify(newOngoingOrder))
    ongoingOrder = JSON.parse(localStorage.getItem('ongoingOrder'))
    return ongoingOrder
}