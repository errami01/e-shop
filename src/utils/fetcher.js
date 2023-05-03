export async function getData(param){
    const data = await fetch(`https://fakestoreapi.com/products/${param || ''}`)
    // const products = await data.json()
    return await data.json()
}