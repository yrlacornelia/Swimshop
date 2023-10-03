import Image from "next/image";
import { useRouter } from "next/router";
import { useUserAuth } from "@/utils/services";
import { useEffect } from "react";
import { Divider } from "@mui/material";
interface Props{
    src: string
    name: string,
    price: number
}
const MiniCard = ({src, name, price}:Props) => {
    return (<>
       <div className=" flex items-end justify-between  py-5 ">
    <div className=" flex items-end  object-bottom  ">
    <div className='relative'>

      <Image
        src={src}
        alt={"slider image "}
        height={100}
        width={70}
        // 200 nån annanstans
        className="object-contain border "
      />
    </div>
    <div className="text-left pl-5 ">
      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
      <p ><b>{name}</b></p>
      <p >{price}</p>
    </div>
    </div>
    <div className="">x</div>
  </div>
  <Divider />
    </>  );
}
 
export default MiniCard;