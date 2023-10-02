import Image from "next/image";
import WhiteBtn from "../reusableComponents/whiteBtn";
const Collaboration = () => {
    return ( 
    <div className="bg-pink  items-center gap-5 w-full  flex md:flex-row flex-col p-4">
    <div className="w-4/5  md:w-1/5 flex bg-white flex-col items-center order-2  ">  <Image alt="image" src={"/images/noimage.png"} width={350} height={100} className="object-contain w-full "/><h3 className="p-2">Women</h3> </div>
    <div className="w-4/5 md:w-1/5 flex bg-white flex-col items-center order-2  ">  <Image alt="image" src={"/images/noimage.png"} width={350} height={100} className="object-contain w-full "/><h3 className="p-2">Men</h3> </div>
    <div className="w-4/5 md:w-1/5 flex bg-white flex-col items-center order-2  ">  <Image alt="image" src={"/images/noimage.png"} width={350} height={100} className="object-contain w-full "/><h3 className="p-2">Kids</h3> </div>
    
    <div className="md:w-1/3 order-1 p-3 md:order-4  text-white mt-5 text-center">
        <div className="w-2/3  m-auto ">
    <h1 className="font-bold">SOC</h1>
    <h2>Introducing SOC</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus suspendisse neque adipiscing non facilisis.</p>
    <WhiteBtn label="SHOP NOW" />
    </div>
</div>
    </div> );
}
 
export default Collaboration;