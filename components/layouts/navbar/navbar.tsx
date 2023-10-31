import { useEffect, useState } from "react";
import { navlinks } from "./navlinks";
import Link from "next/link";
import Searchbar from "../../searchpage/search";
import MobileMenu from "./mobileMenu";
import { Favorites, Profile } from "./icons";
import BasicPopover from "./dropdown";
import { getProducts, fetchingPost } from "@/utils/data";
import Dropdownmenu from "./dropdown";
import Dropdown from "../footer/collapse";
import ShoppingBag from "../../shoppingbag/shoppingbag";

const Navbar = () => {


    const capitalize = (label: string) => {
        const str2 = label.charAt(0).toUpperCase() + label.slice(1);
        return str2
    }

    return (<>
        <MobileMenu />
        <div className="hidden md:flex flex-col border-b pt-10 px-14">

            <div className="flex justify-between ">
                <div className="flex  w-1/3" >
                    <Searchbar /></div>
                <div className="w-1/3 justify-center flex flex-col align-center items-center">
                    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40 80C17.9087 80 0 62.0913 0 40C0 17.9087 17.9087 0 40 0C62.0913 0 80 17.9087 80 40C80 62.0913 62.0913 80 40 80ZM39.7826 19.4652C51.5626 19.4652 55.613 27.3535 58.9122 33.0248C63.607 41.0943 64.0996 46.57 74.5161 50.7935C75.6522 45.313 75.6522 45.9 75.6522 39.7826C75.6522 19.9726 59.5926 3.91304 39.7826 3.91304C19.9726 3.91304 3.91304 19.9726 3.91304 39.7826C3.91304 44.8304 3.21609 45.6926 5.0213 50.7935C14.1322 47.7991 18.3943 38.1013 20.0952 33.7743C22.4978 27.663 28.0026 19.4652 39.7826 19.4652ZM40 30.1674C32.553 30.1674 26.4465 44.09 24.8135 47.4196C23.1804 50.7496 17.603 58.4826 9.89783 60.4204C16.3248 70.08 27.3104 76.4456 39.7826 76.4456C52.1513 76.4456 63.0574 70.1857 69.5061 60.6609C63.0574 55.9748 59.6622 54.0022 54.9274 47.4196C51.017 41.983 47.447 30.1674 40 30.1674Z" fill="black" />
                    </svg>

                    <Link href={"/"}><h2>DIVE HAVEN</h2></Link>

                </div>
                <div className=" w-1/3  flex justify-end gap-8 text-sm">
                    <div className="flex flex-col items-center"> 
                    <Profile />
                    </div>
                    <div className="flex flex-col items-center"> 
                    <Favorites />
                    </div>
                    <div className="flex flex-col items-center">
     {/* here */}
     <ShoppingBag/>

                    </div>

                </div>
            </div>

            <div className=" mt-4 justify-center flex flex-row items-center">
                <Dropdownmenu />
            </div>
        </div>
    </>);
}

export default Navbar;