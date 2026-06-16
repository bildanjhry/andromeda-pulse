export default async function getProducts(count = 3) {
  try{
    const res = await fetch("/data/products.json")
    const data = await res.json()
    return data

  } catch(err){
    // will retry 3 times if error happend
    if(count >= 1) getProducts(count-1)
    return console.error(err.message)
  }
}