import { useEffect, useState } from "react";
import { colRef, getDocs, colProductRef } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import {  query, where } from "firebase/firestore";
import ProductCard from "../reusableComponents/productCard";

type Props = {
    item: any;
  };

const SearchPage = ({item}:Props)=> {
    const [data, setData] = useState<any[]>([]); 
    useEffect(() => {
      const fetchByProducts = async () => {
        const menProductsQuery = query(collection(db, 'products'), where('category', '==', item));
        const menProductsSnapshot = await getDocs(menProductsQuery);
        const menProductsData = menProductsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
  
        setData(menProductsData);
      };
  
      fetchByProducts();
    }, [item]);
    console.log(data)
    return ( <>
    <div className="text-center">
        <h2>Search result for "{item}"</h2> 
        <div>
    {data.length === 0 ? (
        <p>no results found </p>
      ) : (
    <div className="flex gap-20 mt-10 items-center justify-center">  
       {data.map((item) => (
             <ProductCard  src={"/images/noimage.png"} name={item.item} price={0} />
                   ))}
                  </div>
                  )}
    </div>
    </div>
    </> );
}
 
export default SearchPage;

