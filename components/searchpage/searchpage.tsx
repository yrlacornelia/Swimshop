import { useEffect, useState } from "react";
import { colRef, getDocs, colProductRef } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import {  query, where } from "firebase/firestore";
import ProductCard from "../reusableComponents/productCard";
//fuse.js

type Props = {
    item: any;
  };

const SearchPage = ({item}:Props)=> {
    const [data, setData] = useState<any[]>([]); 
    useEffect(() => {
      const fetchByProducts = async () => {
  
        const categoryQuery = query(collection(db, 'products'), where('category', '==', item));
        const itemQuery = query(collection(db, 'products'), where('item', '==', item));
      
        const menProductsSnapshot = await Promise.all([getDocs(categoryQuery), getDocs(itemQuery)]);
      
        const menProductsData = menProductsSnapshot.flatMap((snapshot) =>
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))
        );
      
        setData(menProductsData);
      };
  
      fetchByProducts();
    }, [item]);
    console.log(data)
    return ( <>
    <div className="text-center mt-20">
      <p>Your result for </p>
        <h3> <b>"{item}"</b></h3> 
        <div>
    {data.length === 0 ? (
        <p>no results fkound </p>
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

