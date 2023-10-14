import { MouseEvent } from "react";
import { WhiteBtn } from "../reusableComponents/buttons";
import Image from "next/image";
const SalesPitch = () => {
    return ( <>
    <div className='flex bg-pink md:justify-between flex-wrap h-80 '>
  <div className=' text-white text-center  m-auto order-3 md:w-1/3 pb-5 mt-10 md:mt-auto md:h-auto w-full'> 
<h1>Fashion is in the air </h1>
<p>30% discount on selected items.</p>
<WhiteBtn label="SHOP NOW" onclick={function (event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
            throw new Error("Function not implemented.");
          } } />
</div>
{/* <div className='w-1/2 md:w-1/3 md:order-1'><Image className='order-1 ' alt='model' src={"/images/model5.jpg"} width={600} height={300}/> 
</div>
<div className='w-1/2 md:w-1/3 md:order-3'><Image className='order-2' alt='model' src={"/images/model2.jpg"} width={500} height={300} />
</div> */}
</div>
    </> );
}
 
export default SalesPitch;