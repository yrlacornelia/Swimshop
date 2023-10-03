import Image from "next/image";
import { useRouter } from "next/router";
import { useUserAuth } from "@/utils/services";
import { useEffect } from "react";
import { Like } from "../layouts/navbar/icons";

interface Props{
    src: string
    name: string,
    price: number
}
export const ProductCard = ({src, name, price}:Props) => {

  const {user}  = useUserAuth();
  const router = useRouter();
// const likeProduct = () => {
// if(user){
//   console.log("hi")
// }
// }
    return ( <>  
    <div className=" flex flex-col  pb-10 ">
    
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