import { useState } from "react";
import { navlinks } from "./navlinks";
import Link from "next/link";

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
          <div className="md:hidden bg-blue-light">
            <div className="flex flex-row justify-between">
                <div> <button onClick={() => setOpenNav(!openNav)} className="z-20" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button></div>
                <div> <p>logo</p></div>
                <div className="flex"> <p>heart</p> <p>bag</p></div>

            </div>
            <div
                className={`transition-opacity duration-300 ${openNav ? 'opacity-30' : 'opacity-0'
                    } transform bg-black absolute top-0 right-0  h-full w-4/5 `}
            >
            </div>
            <div className={`transition-transform duration-500 ${openNav ? 'translate-x-0' : '-translate-x-full'
                }  absolute top-0 left-0 h-full w-4/5 bg-white`}
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
        </div>
    </> );
}
 
export default MobileMenu;