import { useRouter } from 'next/router';
import { navlinks } from '@/components/layouts/navbar/navlinks';
import Custom404 from '../404';
import SearchPage from '@/components/searchpage/searchpage';
import SearchPageEmpty from '@/components/searchpage/searchpageES';
export default function Searchpages() {
  const router = useRouter();
  const { search: routeParams } = router.query;
  const [searchId, dropdownLink]:any = routeParams || [];
console.log(searchId)
 console.log(dropdownLink)
  const matchedMenu = navlinks.find(
    (item) => item.menuId.toLowerCase() === searchId?.toLowerCase()
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