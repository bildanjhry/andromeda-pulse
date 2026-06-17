export default async function getDashboardMenu(count = 3) {
  try{
    const res = await fetch("/data/dashboard-menu.json")
    const data = await res.json()
    return data

  } catch(err){
    // will retry 3 times if error happend
    if(count >= 1) getDashboardMenu(count-1)
    return console.error(err.message)
  }
}