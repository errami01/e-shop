export async function loginUser(user, pass){
    let 
    response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            
            body:JSON.stringify({
                username: user,
                password: pass
            })
        })
    // console.log(response)
    if(!response.ok){
        throw{
            message: "No user with those credentials found",
            statusText: response.statusText,
            status: response.status
        }
    }
    const token = await response.json()
    localStorage.setItem('token', JSON.stringify(token.token))
    return token
            
}
export async function fetchData(param){
    if(!param){
        throw{
            message: 'I should set a parameter to fetchData()'
        }
    }
    const localData = JSON.parse(localStorage.getItem(param))
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
                message: "Failed to fetch ",
                statusText: promiseData.statusText,
                statas: promiseData.status
            }
        }
        const data = await promiseData.json()
        localStorage.setItem(param, JSON.stringify(data))
        return data
    }
    return localData
}
export async function fetchSingleProduct(id){
    const index = id - 1
    const localData = JSON.parse(localStorage.getItem('products'))
    if(!localData){
        const promiseData = await fetch(`https://fakestoreapi.com/products`)
        if(!promiseData.ok){
            throw{
                message: "Failed to fetch Data",
                statusText: promiseData.statusText,
                statas: promiseData.status
            }
        }
        const data = await promiseData.json()
        localStorage.setItem('products', JSON.stringify(data))
        return data[index]
    }
    return localData[index]
}

export async function fetchSingleUser(id){
    const localData = JSON.parse(localStorage.getItem('user'))
    if(!localData){
        const promiseData = await fetch(`https://fakestoreapi.com/users/${id}`)
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