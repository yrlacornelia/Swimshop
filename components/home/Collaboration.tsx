import Image from "next/image";
import WhiteBtn from "../reusableComponents/whiteBtn";
const Collaboration = () => {
    return ( 
    <div className="bg-blue-dark  items-center gap-5 w-full  flex md:flex-row flex-col p-4">
    <div className="w-4/5  md:w-1/4 flex bg-white flex-col items-center order-2  ">  <Image alt="image" src={"/images/noimage.png"} width={350} height={100} className="object-contain w-full "/><h2 className="p-2">Women</h2> </div>
    <div className="w-4/5 md:w-1/4 flex bg-white flex-col items-center order-2  ">  <Image alt="image" src={"/images/noimage.png"} width={350} height={100} className="object-contain w-full "/><h2 className="p-2">Women</h2> </div>
    <div className="w-4/5 md:w-1/4 flex bg-white flex-col items-center order-2  ">  <Image alt="image" src={"/images/noimage.png"} width={350} height={100} className="object-contain w-full "/><h2 className="p-2">Women</h2> </div>
    
    <div className="md:w-1/4 order-1 p-3 md:order-4 text-white mt-5 text-center">
    <h2>SOC</h2>
    <h4>Introducing SOC</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus suspendisse neque adipiscing non facilisis.</p>
    <WhiteBtn />
</div>
    </div> );
}
 
export default Collaboration;