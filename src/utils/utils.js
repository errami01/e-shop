import { auth } from "../config/firbase";
const userData = 'user'
export function setLocalIdToken(id){
    localStorage.setItem('idToken', JSON.stringify(id))
}
export function getLocalIdToken(){
    return JSON.parse(localStorage.getItem('idToken'))
}
export function setLocalUserData(data){
    localStorage.setItem(userData, JSON.stringify(data))
}
export function getLocalUserData(){
    return JSON.parse(localStorage.getItem(userData))
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
        await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/${path}/${user.uid}.json?auth=${idToken}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
    }
    
}