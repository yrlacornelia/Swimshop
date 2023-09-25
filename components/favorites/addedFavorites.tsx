import { query } from "firebase/firestore";
import { useEffect, useState } from "react";

const AddedFavorites = () => {
    const [data, setData] = useState<any[]>([]); 
    //in database if user
    //  fetch if right user 
    // match like 


    // useEffect(() => {
    //   const fetchByProducts = async () => {
    //     const menProductsQuery = query(collection(db, 'products'), where('category', '==', item));
    //     const menProductsSnapshot = await getDocs(menProductsQuery);
    //     const menProductsData = menProductsSnapshot.docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id
    //     }));
  
    //     setData(menProductsData);
    //   };
  
    //   fetchByProducts();
    // }, [item]);

    return ( <></> );
}
 
export default AddedFavorites;