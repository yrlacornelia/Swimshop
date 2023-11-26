import { useRouter } from 'next/router';
import { navlinks } from '@/components/layouts/navbar/navlinks';
import Custom404 from '../404';
import Category from '@/components/categories/category';
import OneProduct from '@/components/product/oneProduct';
import Reviews from '@/components/product/reviews';
import SimilarProducts from '@/components/product/similarProducts';
export default function CategoryPage() {
  const router = useRouter();
  const { item: routeParams } = router.query;
  const [menuId, dropdownLink]:any = routeParams || [];


{
    return (
      <><OneProduct /> 
      <SimilarProducts />
      <Reviews /></>
  
    );
  }
 { return <Custom404 />;}
}

