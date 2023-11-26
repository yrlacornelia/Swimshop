import { useRouter } from 'next/router';
import { navlinks, allLinks } from '@/components/layouts/navbar/navlinks';
import SearchPage from '@/components/searchpage/searchpage';
import SearchPageEmpty from '@/components/searchpage/searchpageES';

export default function Searchpages() {
  const router = useRouter();
  const { search: routeParams } = router.query;
  const [searchId, dropdownLink]:any = routeParams || [];
  const matchedMenu = allLinks.find(
    (item) => item.toLowerCase() === searchId?.toLowerCase()
  );

  if (!matchedMenu) {
    return <SearchPageEmpty item={searchId} />;
  }

  if (!dropdownLink) {
    return (
        <SearchPage item={searchId} />
  
    );
  }
  return <SearchPageEmpty item={searchId} />;
}

// import { useRouter } from 'next/router';
// import { navlinks } from '@/components/layouts/navbar/navlinks';
// import Custom404 from '../404';

// export default function Test() {
//   const router = useRouter();
//   const { menuId, dropdownLink }:any = router.query;

//   // Find the matched menu based on menuId
//   const matchedMenu = navlinks.find(
//     (item) => item.menuId.toLowerCase() === menuId
//   );

//   console.log(matchedMenu)
//   console.log(dropdownLink)

//   console.log(menuId)
 
//   if (matchedMenu) {
//     if (dropdownLink) {
//       const matchedDropdown = matchedMenu.dropdownLinks.includes(
//         dropdownLink
//       );
//       if (matchedDropdown) {
//         console.log(matchedDropdown)
//         return (
//           <div>
//             <p>
//               Menu: {menuId}, Dropdown Link: {dropdownLink}
//             </p>
//           </div>
//         );
//       }
//     } else {
//       // If no dropdown link is present, only show the menu
//       return (
//         <div>
//           <p>Menu: {menuId}</p>
//         </div>
//       );
//     }
//   }

//   // If neither menu nor dropdown link match, show 404
//   return <Custom404 />;
// }

// import { useRouter } from 'next/router'
//  import { navlinks } from '@/components/layouts/navbar/navlinks'
// import Custom404 from '../404';
// export default function Test() {
//   console.log(navlinks)
//   const router = useRouter()
//   const menuId = Array.isArray(router.query.menuId) ? router.query.menuId[0] : router.query.menuId;
//   console.log(menuId)
//   const matchedMenu = navlinks.find(item => item.menuId.toLowerCase() === menuId?.toLowerCase());

//   return (
//     <div>
//       {matchedMenu ? <p>Post: {menuId}</p> :
//        <Custom404/>}
//     </div>
//   );
// }