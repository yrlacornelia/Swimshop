import { fetchByProducts, fetchingPost } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";

import { colRef, getDocs, colProductRef } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import {  query, where } from "firebase/firestore";

type Props = {
  item: any;
};

const Category = ({item}:Props) => {
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
console.log("HI")
    return ( <div className="mt-10">
        <div className="w-2/3 m-auto">   
        <h3 className="text-center mb-2">{item}</h3>
        <div>
      <h1>Categories:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.item}</p> 
          </li>
        ))}
      </ul>
    </div>
        <p>Lorem ipsum dolor sit amet consectetur. Et nisl ullamcorper amet ultricies sit pretium consequat pretium. Et felis sit morbi elit vel tellus tortor. Consectetur curabitur fermentum venenatis consequat ut sit. Sapien ut vestibulum ultrices nunc tincidunt urna ipsum sit. Nec amet sodales euismod ipsum neque tristique pellentesque nunc. Fames adipiscing ultrices ac iaculis condimentum feugiat iaculis ut.</p>
</div>
<div className="w-full mt-20 px-10">
    <div className=" flex justify-between">
        <p>67 ITEMS</p>
        <p>sort by senast inkommet </p>
    </div>
    <div>
    <div className="flex gap-20 mt-10 items-center justify-center">  
    <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                        src={"/images/noimage.png"}
                        alt={"slider image "}
                        height={200}
                        width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div> 
        <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                        src={"/images/noimage.png"}
                        alt={"slider image "}
                        height={200}
                        width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div>
                  <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                      src={"/images/noimage.png"}
                      alt={"slider image "}
                      height={200}
                      width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div>
                  <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                             src={"/images/noimage.png"}
                             alt={"slider image "}
                             height={200}
                             width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div>
                  </div>
    </div>
</div>
     
    </div> );
}
 
export default Category;