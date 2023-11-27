import Image from "next/image";
import { useRouter } from "next/router";
import { useUserAuth } from "@/utils/services";
import { useEffect } from "react";
import { Like } from "../layouts/navbar/icons";
import { collection, addDoc, DocumentReference, doc, setDoc, DocumentData, CollectionReference } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import {  query, where } from "firebase/firestore";

interface Props{
    src: string
    name: string,
    price: number,
    id: number
}
export const ProductCard = ({id, src, name, price}:Props) => {
    const handleLikeClick = async (productId: number) => {
      const userId = '1';
      try {
        const userDocRef: DocumentReference<DocumentData> = doc(db, 'users', userId);
        const likedProductsCollectionRef: CollectionReference<DocumentData> = collection(userDocRef, 'likedProducts');
        
        const productIdString = productId.toString();
    
        const productDocRef: DocumentReference<DocumentData> = doc(likedProductsCollectionRef, productIdString);
    
        await setDoc(productDocRef, { liked: true });
    
        console.log('Product liked successfully!');
      } catch (error) {
        console.error('Error liking product:', error);
        // Handle errors here
      }
    };
    
  
function test(id:number) {
  console.log(id)
}

    return ( <>  
    <div className=" flex flex-col  pb-10 ">
       <button onClick={() => handleLikeClick(id)}>hi</button>
                <div className='relative'>
                    <div className="absolute right-2 top-2">
                 
                      <Like />
</div>
                  <Image
                    src={src}
                    alt={"slider image "}
                    height={200}
                    width={200}
                    // 200 nån annanstans
                    className="w-full object-contain"
                  />
                </div>
                <div className="text-left ">
                  <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                  <p ><b>{name}</b></p>
                  <p >{price}</p>
                </div>
              </div>
              </> );
}
 
export default ProductCard;