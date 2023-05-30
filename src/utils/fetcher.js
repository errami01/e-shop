export async function getData(param){
    // console.log(param)
    const data = await fetch(`https://fakestoreapi.com/products/${param || ''}`)
    // const products = await data.json()
    return await data.json()
}

export async function getProductsByCategory(category){
    const data = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    // const products = await data.json()
    return await data.json()
}
export async function loginUser(user, pass){
    const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            
            body:JSON.stringify({
                username: 'mor_2314',
                password: '83r5^_'
            })
        })
    if(!response.ok){
        throw{
            message: response.status
        }
    }
    
    return await response.json()
            
}
