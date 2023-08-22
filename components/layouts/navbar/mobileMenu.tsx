import { useState } from "react";
import { navlinks } from "./navlinks";
import Link from "next/link";
import { Favorites, Shoppingbag } from "./icons";
import Searchbar from "./inputfield";
const MobileMenu = () => {
    const [openNav, setOpenNav] = useState(false);
    const navList = (
        <ul className="md:flex ">
            {navlinks.map((item) => (
                <li key={item.name} onClick={() => setOpenNav(false)} >
                    <Link href={item.href}>{item.name}</Link>
                </li>
            ))}
        </ul>
    );
    return ( <>
          <div className="md:hidden bg-blue-light p-3 pt-5">
            <div className="flex flex-row justify-between items-center h-full">
                <div> <button onClick={() => setOpenNav(!openNav)} className="z-20" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button></div>
                <div> <h2>DIVE HAVEN</h2></div>
                <div className="flex"> <Shoppingbag /> <Favorites /> </div>

            </div>
            <div
                className={`transition-opacity duration-300 opacity-30  ${openNav ? 'flex' : 'hidden'
                    }
                   transform bg-black absolute z-10 top-0 right-0  h-full w-full `}
            >
            </div>
            <div className={`transition-transform duration-500 ${openNav ? 'translate-x-0' : '-translate-x-full'
                }  absolute top-0 z-20 left-0 h-full w-4/5 bg-white`}
            >
                <div >
                    <div>               <button onClick={() => setOpenNav(!openNav)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button></div>
                    <li className="list-none">Profile</li>
            {navList}
                </div>
            </div>
<div className="w-4/5 m-auto mt-5">
            <Searchbar /> </div>
        </div>
    </> );
}
 
export default MobileMenu;