export async function getData(param){
    // console.log(param)
    const data = await fetch(`https://fakestoreapi.com/products/${param || ''}`)
    // const products = await data.json()
    return await data.json()
}

export async function getProductsByCategory(category){
    const localData = localStorage.getItem('categories')
    if(!localData){
        const promiseData = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        if(!promiseData.ok){
            throw{
                message: "Failed to fetch categories",
                statusText: data.statusText,
                statas: data.status
            }
        }
        const data = await promiseData.json()
        localStorage.setItem('categories', JSON.stringify(data))
        return data
    }
    return localData
    }
    
export async function loginUser(user, pass){
    const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            
            body:JSON.stringify({
                username: user,
                password: pass
            })
        })
    if(!response.ok){
        throw{
            message: response.status
        }
    }
    
    return await response.json()
            
}
export async function fetchData(param){
    if(!param){
        throw{
            message: 'I should set a parameter to fetchData()'
        }
    }
    const localData = localStorage.getItem(param)
    if(!localData){
        let path;
        if(param==='products'){
            path= ''
        }
        else if(param==='categories'){
            path = param
        }
        else{
            path = `category/${param}`
        }
        const promiseData = await fetch(`https://fakestoreapi.com/products/${path}`)
        if(!promiseData.ok){
            throw{
                message: "Failed to fetch categories",
                statusText: promiseData.statusText,
                statas: promiseData.status
            }
        }
        const data = await promiseData.json()
        localStorage.setItem('categories', JSON.stringify(data))
        return data
    }
    return localData
    

}