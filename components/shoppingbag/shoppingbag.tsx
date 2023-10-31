import Divider from "@mui/material/Divider";
import { MouseEvent, useState } from "react";
import MiniCard from "./miniProductcars";
import { PinkBtn } from "../reusableComponents/buttons";

const ShoppingBag = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        <button className="flex flex-col items-center gap-1" onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
    <h5 className="hidden md:block ">Bag</h5>
    </button> 
   
        {/* Sidebar */}
        <div
          className={`${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transform transition-transform duration-300 ease-in-out fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-40`}
        >
          <div className="pt-4 px-4 flex flex-col justify-between">
            <div className="flex justify-between mb-5">
     <h5>CART</h5>   <button onClick={toggleMenu}><h5>X</h5></button>  
     </div>
     <Divider/>
     <div className="h-96">
  <MiniCard src={""} name={"tshirt"} price={60} />
     </div> 
     <Divider className="mb-5"/>
     <div className="flex justify-between px-5 ">
   
      <h5>SUMMA</h5>
      <h5>1399,00 KR</h5>
     </div>
     <div className=" px-5"> <PinkBtn label="TILL KASSAN" onclick={function (event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
              throw new Error("Function not implemented.");
            } }/>
            </div>
    
          </div>
        </div>
  
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    );
}
 
export default ShoppingBag;