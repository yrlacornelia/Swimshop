import { fetchByProducts, fetchingPost } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";

import { colRef, getDocs, colProductRef } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import {  query, where } from "firebase/firestore";
import ProductCard from "../reusableComponents/productCard";

type Props = {
  item: any;
  dropdown: any;
};

const SubCategory = ({item, dropdown}:Props) => {
  const [data, setData] = useState<any[]>([]); 
console.log(dropdown)
  useEffect(() => {
    const fetchByProducts = async () => {
      const menProductsQuery = query(
        collection(db, 'products'),
        where('category', '==', item),
        where('item', '==', dropdown)
      );
      const menProductsSnapshot = await getDocs(menProductsQuery);

      const menProductsData = menProductsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      setData(menProductsData);
    };

    fetchByProducts();
  
  }, [item, dropdown]);
console.log(data)

    return ( <div className="mt-10">
        <div className="w-2/3 m-auto">   
        <p>Lorem ipsum dolor sit amet consectetur. Et nisl ullamcorper amet ultricies sit pretium consequat pretium. Et felis sit morbi elit vel tellus tortor. Consectetur curabitur fermentum venenatis consequat ut sit. Sapien ut vestibulum ultrices nunc tincidunt urna ipsum sit. Nec amet sodales euismod ipsum neque tristique pellentesque nunc. Fames adipiscing ultrices ac iaculis condimentum feugiat iaculis ut.</p>
</div>
<div className="w-full mt-20 px-10">
    <div className=" flex justify-between">
        <p>67 ITEMS</p>
        <p>sort by senast inkommet </p>
    </div>
    <div>
    <div className="flex gap-20 mt-10 items-center justify-center">  
    {data.map((item) => (
          <ProductCard  src={"/images/noimage.png"} name={item.item} price={0} />
        ))}

              
                  </div>
    </div>
</div>
     
    </div> );
}
 
export default SubCategory;