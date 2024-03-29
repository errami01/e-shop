import { auth } from "../config/firbase"
import { getLocalCart, getLocalOnGoingCheckout, getLocalUserData, setLocalCart, setLocalOnGoingCheckout, setLocalUserData, storeObject } from "./utils"

// export async function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
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
    const idToken = await auth.currentUser.getIdToken(true)
    if(!localData){
        localData = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json?auth=${idToken}`)
        setLocalUserData(localData)
    }
    if(withAddress==="with address"){
        if(!localData.address){
            localData.address = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/usersAddresses/${id}.json?auth=${idToken}`)        
            setLocalUserData(localData)
        }
    }
    
    return localData
}
export async function getCart(){
    let localData = getLocalCart()
    
    if(!auth.currentUser) {
        if(localData?.length>0) {
            localStorage.setItem('offlineCart', JSON.stringify(localData))
            return localData
        }
        setLocalCart([])
        return []
    }
    if(auth.currentUser){
        const id = auth.currentUser.uid
        const idToken = await auth.currentUser.getIdToken(true)
        const fetchedCart = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/carts/${id}.json?auth=${idToken}`)
        if(!localData){
            setLocalCart(fetchedCart || [])
            return getLocalCart()
        }
        const offlineCart = JSON.parse(localStorage.getItem('offlineCart'))
        if(offlineCart && fetchedCart){
            const rslt = combineOfflineAndOnlineCarts(offlineCart, fetchedCart)
            await storeObject(rslt, 'carts',setLocalCart)
            localStorage.removeItem('offlineCart')
            return rslt
        }
        //if there is no cart in database and the offlineCart is not empty then 
        //send the offlineCart to database
        if(offlineCart){
            await storeObject(offlineCart, 'carts',setLocalCart)
            localStorage.removeItem('offlineCart')
            return offlineCart
        }
        //if the offlineCart is empty and the fetchedCart is not then
        //store the offlineCart in the localStorage
        if(fetchedCart){
            setLocalCart(fetchedCart)
            return fetchedCart
        }

    }
    return localData
}
export async function getOnGoingCheckout(){
    let localData = getLocalOnGoingCheckout()
    if(!localData && auth.currentUser){
        const id = auth.currentUser.uid
        const idToken = await auth.currentUser.getIdToken(true)
        localData = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/onGoingCheckouts/${id}.json?auth=${idToken}`)
        setLocalOnGoingCheckout(localData || [])
        return getLocalOnGoingCheckout()
    }
    return localData
}
function combineOfflineAndOnlineCarts(input, target){
    const rslt = [...target]
    rslt.sort((a,b)=> a.id - b.id)
    input.forEach(element=>{
        const targetIndex = rslt.findIndex((item)=>{
            return element.id <= item.id
        })
        if(targetIndex >= 0){
            if(element.id === rslt[targetIndex].id) {
                rslt[targetIndex].orderedQuantity = element.orderedQuantity + rslt[targetIndex].orderedQuantity
            }
            if(element.id < rslt[targetIndex].id){
                rslt.splice(targetIndex, 0, element)
            }
        }
        else{
            rslt.push(element)
        }
    })
     return rslt
}

export async function getClosedOrders(){
    const id = auth.currentUser.uid
    const idToken = await auth.currentUser.getIdToken(true)
    return await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/closedOrders/${id}.json?auth=${idToken}`)
}
