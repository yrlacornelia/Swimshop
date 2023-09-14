import Image from "next/image";
interface Props{
    src: string
    name: string,
    price: number
}
export const ProductCard = ({src, name, price}:Props) => {
    return ( <>  
    <div className=" flex flex-col  pb-10 ">
                <div className=''>
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