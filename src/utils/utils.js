import { onAuthStateChanged } from "firebase/auth";
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
export async function storeObject(data, path ,storeInLocalStorage){
    if(storeInLocalStorage) storeInLocalStorage(data)
    if(path){
        const user =auth.currentUser
        const idToken = await user.getIdToken()
        const response = await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/${path}/${user.uid}.json?auth=${idToken}`,{
        method: 'PUT',
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
export function confirmUserState(){
    return new Promise((res, rej)=>{
        onAuthStateChanged(auth, (user)=>{
            if(user) res(user.uid)
            else {
                rej('No user found')
            }
        })
    })
}