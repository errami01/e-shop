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
export function ongoingOrder(){
    const setOngoingOrder = (ongoingOrder)=>{
        if(!ongoingOrder){
            localStorage.removeItem('ongoingOrder')
        }
        else localStorage.setItem('ongoingOrder',JSON.stringify(ongoingOrder))
    }
    const ongoingOrder = JSON.parse(localStorage.getItem('ongoingOrder'))
    return [ongoingOrder, setOngoingOrder]
}