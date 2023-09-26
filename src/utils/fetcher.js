import { getLocalIdToken, getLocalUserData, setLocalUserData } from "./utils"
import { requireAuth } from "./requireAuth"

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
export async function getUserData(id){
    // await sleep(3000)
    if(!id) requireAuth()
    const localData = getLocalUserData()
    const idToken = getLocalIdToken()
    if(!localData){
        const data = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json?auth=${idToken}`)
        setLocalUserData(data)
        return data
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
