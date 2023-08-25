import { colRef, getDocs, colProductRef } from "@/firebaseConfig"
export const testingg = () => {
getDocs(colProductRef)
   .then((snapshot) => {
   let arr:any = []
   snapshot.docs.forEach((doc) => {
     arr.push({...doc.data(), id: doc.id})
   })
console.log(arr)
   
   })
   .catch(err => {
     console.log(err.message)
   })
}
export const getProducts = () => {
        getDocs(colRef)
        .then((snapshot) => {
        let arr:any = []
        snapshot.docs.forEach((doc) => {
          arr.push({...doc.data(), id: doc.id})
        })
        console.log(arr)
        
        })
        .catch(err => {
          console.log(err.message)
        })

 }

 export const getCategories = () => {
      let arr:any = []
   const hi = getDocs(colProductRef)
    .then((snapshot) => {
  
    snapshot.docs.forEach((doc) => {
      arr.push({...doc.data(), id: doc.id})
    })
return arr[0]
    
    })
    .catch(err => {
      console.log(err.message)
    })
    return arr

}

const filterCategories = () => {
const test = getCategories()
console.log(test)
}