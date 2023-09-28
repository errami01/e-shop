import { auth } from "../config/firbase"
import { getLocalIdToken, getLocalUserData, setLocalUserData } from "./utils"

export async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

// Firebase realtime database
export async function getProductsByCategory(category){
    const localData = JSON.parse(sessionStorage.getItem(category))
    if(!localData){
        const data = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/products.json?orderBy="category"&equalTo="${category}"`)
        sessionStorage.setItem(category, JSON.stringify(data))
        return data
    }
    return  localData
}
export async function getCategories(){
    const localData = JSON.parse(sessionStorage.getItem('categories'))
    if(!localData){
        const data = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/categories.json`)
        sessionStorage.setItem('categories', JSON.stringify(data))
        return data
    }
    return  localData
}
export async function getSingleProduct(id){
    // await sleep(3000)
    const localData = JSON.parse(sessionStorage.getItem('products')) || {}
    if(!localData[id]){
        const data = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/products.json?orderBy=%22id%22&equalTo=${id}`)
        localData[id] = Object.values(data)[0]
        sessionStorage.setItem('products', JSON.stringify(localData))
        return localData[id]
    }
    return localData[id]
}
export async function getUserData(withAddress){
    // await sleep(3000)
    const id = auth.currentUser.uid
    let localData = getLocalUserData()
    const idToken = getLocalIdToken()
    if(!localData){
        localData = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json?auth=${idToken}`)
        setLocalUserData(localData)
    }
    if(withAddress=="with address"){
        if(!localData.address){
            localData.address = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/usersAddresses/${id}.json?auth=${idToken}`)        
            console.log('address '+localData.address)
            setLocalUserData(localData)
        }
    }
    
    return localData
}
export async function myFetch(url){
    const promiseData = await fetch(url)
    if(!promiseData.ok){
        throw{
            message: "Failed to fetch Data",
            statusText: promiseData.statusText,
            statas: promiseData.status
        }
    }
    return promiseData.json()
}
