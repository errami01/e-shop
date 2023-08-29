import { getLocalIdToken } from "./utils"

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
        const promiseData = await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/products.json?orderBy="category"&equalTo="${category}"`)
        if(!promiseData.ok){
            throw{
                message: "Failed to fetch Data",
                statusText: promiseData.statusText,
                statas: promiseData.status
            }
        }
        const data = await promiseData.json()
        sessionStorage.setItem(category, JSON.stringify(data))
        return data
    }
    return  localData
}
export async function getCategories(){
    const localData = JSON.parse(sessionStorage.getItem('categories'))
    if(!localData){
        const promiseData = await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/categories.json`)
        if(!promiseData.ok){
            throw{
                message: "Failed to fetch Data",
                statusText: promiseData.statusText,
                statas: promiseData.status
            }
        }
        const data = await promiseData.json()
        sessionStorage.setItem('categories', JSON.stringify(data))
        return data
    }
    return  localData
}
export async function getSingleProduct(id){
    // await sleep(3000)
    const localData = JSON.parse(sessionStorage.getItem('products')) || {}
    if(!localData[id]){
        const promiseData = await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/products.json?orderBy=%22id%22&equalTo=${id}`)
        if(!promiseData.ok){
            throw{
                message: "Failed to fetch Data",
                statusText: promiseData.statusText,
                statas: promiseData.status
            }
        }
        const data = await promiseData.json()
        localData[id] = Object.values(data)[0]
        sessionStorage.setItem('products', JSON.stringify(localData))
        return localData[id]
    }
    return localData[id]
}
export async function getUserData(id){
    // await sleep(3000)
    const localData = JSON.parse(localStorage.getItem('user'))
    const idToken = getLocalIdToken()
    if(!localData){
        const promiseData = await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json?auth=${idToken}`)
        if(!promiseData.ok){
            throw{
                message: "Failed to fetch Data",
                statusText: promiseData.statusText,
                statas: promiseData.status
            }
        }
        const data = await promiseData.json()
        localStorage.setItem('user', JSON.stringify(data))
        return data
    }
    return localData
}
