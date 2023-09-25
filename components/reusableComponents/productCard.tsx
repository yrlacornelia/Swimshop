import Image from "next/image";
import { useRouter } from "next/router";
import { useUserAuth } from "@/utils/services";
import { useEffect } from "react";

interface Props{
    src: string
    name: string,
    price: number
}
export const ProductCard = ({src, name, price}:Props) => {

  const {user}  = useUserAuth();
  const router = useRouter();
const likeProduct = () => {
if(user){
  console.log("hi")
}
}
    return ( <>  
    <div className=" flex flex-col  pb-10 ">
    
                <div className='relative'>
                    <div className="absolute right-2 top-2"><button   onClick={likeProduct}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg></button>
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