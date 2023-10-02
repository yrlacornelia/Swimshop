import { Divider } from '@mui/material';
import 'flowbite';
import router from 'next/router';
import { navlinks } from './navlinks';

const Dropdownmenu = () => {
  const navigation = (menuId:any) => {
    router.push(`/categories/${menuId}`);
  };
  function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalize = (label:string) => {
    const str2 = label.toUpperCase() ;
    return str2
   }
  return (
    <div className="z-30 flex h-14 mt-5">
      {navlinks.map((item) => (
        <div key={item.menuId} className=' '>
<button
  onClick={() => navigation(item.menuId)}
  id={`dropdownHoverButton_${item.menuId}`}
  data-dropdown-toggle={`dropdownHover_${item.menuId}`}
  data-dropdown-trigger="hover"
  data-dropdown-offset-distance={0}
  className="focus:outline-none hover:font-medium text-md  px-2 border-black hover:border-transparent text-center inline-flex mb-0 items-center  relative"
  type="button"
>
  <p className='w-24 font-semibold'>{capitalizeFirstLetter(item.menuId)}</p>
  <div className="border-grow "></div>
</button>






          {/* here is dropdown  */}

        </div>
      ))}
    </div>
  );
};

export default Dropdownmenu;


// {item.dropdownLinks? (
//   <div
//     id={`dropdownHover_${item.menuId}`}
//     className="z-10 mt-0 hidden bg-blue-light h-64 transform translate-x-[-104.5px] translate-y-[180px] translate-z-0 divide-gray-100 shadow w-full"
//   >
//     <Divider />
//     <ul className="p-10 ml-20 ">
//       {item.dropdownLinks.map((link, index) => (
//         <li key={index} className="mb-1 p-2 text-md  hover:border-b hover:font-medium">
//           <a className='w-full' href={`/categories/${item.menuId}/${link}`} /* Replace with the actual link */>{link}</a>
//         </li>
//       ))}
//     </ul>
//     {/* Render your dropdown content here */}
//   </div>
// ) : null}


// <button
// onClick={() => navigation(item.menuId)}
// id={`dropdownHoverButton_${item.menuId}`}
// data-dropdown-toggle={`dropdownHover_${item.menuId}`}
// data-dropdown-trigger="hover"
// data-dropdown-offset-distance={0}
// className="focus:outline-none  hover:font-medium text-md px-2 border-black hover:border-b-4  text-center inline-flex mb-0 items-center hover:border-bottom dark:bg-blue-600 dark:hover:bg-blue-700"
// type="button"
// >
// <p className='w-24 font-semibold'>{capitalizeFirstLetter(item.menuId)}</p>

// </button>