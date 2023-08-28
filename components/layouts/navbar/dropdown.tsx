import { Divider } from '@mui/material';
import 'flowbite';
import router from 'next/router';
interface Props {
  href: string,
  label: string,
}


const Dropdownmenu = ({href, label}:Props) => {
  
  const navigation = ( ) => {
    router.push(`${href}`); 
  }
    return ( <div className="z-30">

<button onClick={navigation} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" 
data-dropdown-offset-distance={0} 
className="focus:outline-none hover:font-medium 
rounded-lg text-sm px-5 py-2.5  text-center inline-flex mb-0 items-center dark:bg-blue-600 dark:hover:bg-blue-700 " type="button">{label} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>

<div id="dropdownHover" className="z-10 mt-0 hidden bg-blue-light transform translate-x-[-104.5px] translate-y-[180px] translate-z-0  divide-gray-100 shadow w-full ">
   <Divider/>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

    </div> );
}
 
export default Dropdownmenu;