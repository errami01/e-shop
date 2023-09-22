import { useState } from "react";

// export default function useOngoingOrder(initialState){
//     const [ongoingOrder, setOngoingOrder] = useState(initialState)
//     const setOngoingOrderState=(ongoingOrder)=>{
//         if(!ongoingOrder){
//             localStorage.removeItem('ongoingOrder')
//         }
//         else localStorage.setItem('ongoingOrder',JSON.stringify(ongoingOrder))
//         setOngoingOrder(JSON.parse(localStorage.getItem('ongoingOrder')))
//     }
//     return [ongoingOrder, setOngoingOrderState]
// }
export function setOngoingOrder(newOngoingOrder){
    const initialValue = localStorage.getItem('ongoingOrder')
    let ongoingOrder
    if(!initialValue) {
        localStorage.setItem('ongoingOrder',JSON.stringify(newOngoingOrder))
        ongoingOrder = newOngoingOrder
    }    
    else ongoingOrder = JSON.parse(initialValue)                        
    
    function updateOngoingOrder(updatedOngoingOrder){
        if (!updatedOngoingOrder) {
            localStorage.removeItem('ongoingOrder');
            ongoingOrder = null
            return 
        }
        updatedOngoingOrder = updatedOngoingOrder instanceof Function ? updatedOngoingOrder(JSON.parse(localStorage.getItem('ongoingOrder'))) : updatedOngoingOrder
        localStorage.setItem('ongoingOrder',JSON.stringify(updatedOngoingOrder))
        ongoingOrder = JSON.parse(localStorage.getItem('ongoingOrder'))
        return 
    }
    return [ongoingOrder, updateOngoingOrder]
}