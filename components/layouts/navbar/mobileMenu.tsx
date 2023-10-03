import { useState } from "react";
import { navlinks } from "./navlinks";
import Link from "next/link";
import { Favorites, Profile } from "./icons";
import Searchbar from "./search";
import ShoppingBag from "../../shoppingbag/shoppingbag";
const MobileMenu = () => {
    const [openNav, setOpenNav] = useState(false);
    const navList = (
        <ul className="md:flex ">
            {navlinks.map((item) => (
                <li className="mt-5" key={item.menuId} onClick={() => setOpenNav(false)} >
                    <Link href={`/categories/${item.menuId}`} >{item.menuId}</Link>
                </li>
            ))}
        </ul>
    );
    return ( <>
          <div className="md:hidden border-b p-3 pt-5">
            <div className="flex flex-row justify-between items-center h-full">
                <div> <button onClick={() => setOpenNav(!openNav)} className="z-20" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button></div>
                <div> <Link href={"/"}><h2>DIVE HAVEN</h2></Link></div>
                <div className="flex"> <Profile /> <Favorites /> <ShoppingBag/> </div>

            </div>
            <div
                className={`transition-opacity duration-300 opacity-30  ${openNav ? 'flex' : 'hidden'
                    }
                   transform bg-black absolute z-10 top-0 right-0  h-full w-full `}
            >
            </div>
            <div className={`transition-transform duration-500 ${openNav ? 'translate-x-0' : '-translate-x-full'
                }  absolute top-0 z-50 left-0 h-full w-4/5 bg-pink text-white`}
            >
                    <div className=" p-5 w-full "> 
                     <button onClick={() => setOpenNav(!openNav)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <Link href={"/"}><h2>DIVE HAVEN</h2></Link></div>
                    <div className="p-10 px-20">  <li className="list-none">Profile</li>
            {navList}</div>
                  
            </div>
<div className="w-4/5 m-auto mt-5 ">
            <Searchbar /> </div>
        </div>
    </> );
}
 
export default MobileMenu;