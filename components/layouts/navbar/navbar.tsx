import { useEffect, useState } from "react";
import { navlinks } from "./navlinks";
import Link from "next/link";
import Searchbar from "./inputfield";
import MobileMenu from "./mobileMenu";
import { Favorites, Profile, Shoppingbag } from "./icons";
import BasicPopover from "./dropdown";
import { getProducts, fetchingPost } from "@/utils/data";
import Dropdownmenu from "./dropdown";
import Dropdown from "../footer/collapse";

const Navbar = () => {
    // const [data, setData] = useState<any>([]);

    // useEffect(() => {
    //   fetchingPost().then((fetchedData) => {
    //     setData(fetchedData);
    //   });
    // }, []);
  
   const capitalize = (label:string) => {
    const str2 = label.charAt(0).toUpperCase() + label.slice(1);
    return str2
   }

    return (<>
        <MobileMenu /> 
        <div className="hidden md:flex flex-col bg-blue-light pt-10 px-5">
           
            <div className="flex justify-between ">
                <div className="flex items-center  w-1/3" >
                    <Searchbar /></div>
                <div className="w-1/3 justify-center flex">
                <Link href={"/"}><h2>DIVE HAVEN</h2></Link>

                </div>
                <div className=" w-1/3 items-center flex justify-end gap-5 text-sm">
                    <div className="flex flex-col items-center"> <Profile />
                     
                    </div>
                    <div className="flex flex-col items-center"> <Favorites />
                       
                    </div>
                    <div className="flex flex-col items-center">
                        <Shoppingbag />
                       
                    </div>

                </div>
            </div>
            
            <div className=" mt-4 justify-center flex flex-row items-center">
            {/* <ul className="flex gap-10 mb-5">
  {navlinks.map((item) => (
    <BasicPopover
      item={item}
      menuId={item.menuId} // Use the correct href property
      dropdown={item.dropdownLinks}
      label={capitalize(item.menuId)}
    />
  ))}

</ul>
 */}
<Dropdownmenu />
             </div>
        </div>
    </>);
}

export default Navbar;