import { auth } from "../config/firbase";
const userData = 'user'
export function setLocalIdToken(id){
    localStorage.setItem('idToken', JSON.stringify(id))
}
export function getLocalIdToken(){
    return JSON.parse(localStorage.getItem('idToken'))
}
export function setLocalUserData(data){
    const toStore = data instanceof Function ? data(getLocalUserData()) : data
    localStorage.setItem(userData, JSON.stringify(toStore))
}
export function getLocalUserData(){
    return JSON.parse(localStorage.getItem(userData))
}
export function removeLocalUserData(){
    localStorage.removeItem(userData)
}
export function setLocalCart(data){
    const toStore = data instanceof Function ? data(getLocalCart()) : data
    localStorage.setItem('cart', JSON.stringify(toStore))
}
export function getLocalCart(){
    return JSON.parse(localStorage.getItem('cart'))
}
export function removeLocalCart(){
    localStorage.removeItem('cart')
}
export function setLocalOnGoingCheckout(data){
    const toStore = data instanceof Function ? data(getLocalOnGoingCheckout()) : data
    localStorage.setItem('onGoingCheckout', JSON.stringify(toStore))
}
export function getLocalOnGoingCheckout(){
    return JSON.parse(localStorage.getItem('onGoingCheckout'))
}
export function setFormDataToObject(formData){
    const formDataObject = {}
    for (const key of formData.keys()) {
        formDataObject[key] = formData.get(key)
      }
    return formDataObject
}
export function setLocalUserAddresse(address){
    localStorage.setItem('userAddress', JSON.stringify(address))
}
export async function storeObject(data, path ,storeInLocalStorage, methode='PUT'){
    if(path && auth.currentUser){
        const user =auth.currentUser
        const idToken = await user.getIdToken(true)
        const response = await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/${path}/${user.uid}.json?auth=${idToken}`,{
        method: methode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        if(!response.ok){
            throw{
                message : response.statusText,
                status: response.status
            }
        }
    }
    
}
export function countCartItems(cart){
    return cart.reduce((acc, curr)=> acc + curr.orderedQuantity,0)
 }