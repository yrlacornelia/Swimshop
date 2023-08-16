import { useEffect, useState } from "react";
import { navlinks } from "./navlinks";
import Link from "next/link";
import Searchbar from "./inputfield";
import MobileMenu from "./mobileMenu";
import { Favorites, Profile, Shoppingbag } from "./icons";

const Navbar = () => {

    const navList = (
        <ul className="flex gap-10 mb-5 ">
            {navlinks.map((item) => (
                <li key={item.name} className="hover:font-semibold border-black">
                    <Link href={item.href}>{item.name}</Link>
                </li>
            ))}
        </ul>
    );

    return (<>
        <MobileMenu />
        <div className="hidden md:flex flex-col bg-blue-light pt-10 px-5">
            <div className="flex justify-between ">
                <div className="flex items-center  w-1/3" >
                    <Searchbar /></div>
                <div className="w-1/3 justify-center flex">
                    <h2> DIVE HAVEN</h2>

                </div>
                <div className=" w-1/3 items-center flex justify-end gap-5 text-sm">
                    <div className="flex flex-col items-center"> <Profile />
                        <p>Profile</p>
                    </div>
                    <div className="flex flex-col items-center"> <Favorites />
                        <p>Favorites</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Shoppingbag />
                        <p>Bag</p>
                    </div>

                </div>
            </div>
            <div className=" mt-4 justify-center flex items-center"><div>{navList}</div></div>

        </div>
    </>);
}

export default Navbar;