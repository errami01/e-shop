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
