import { navlinks } from "@/components/layouts/navbar/navlinks"
import { GetStaticPaths, GetStaticProps } from "next"
import Category from "@/components/categories/category"


const Categories =  ({ item }:any)  => {
    return (  
<Category item={item} />
      );
}
 
export default Categories;


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = navlinks.map((course) => ({
      params: { menuId: course.label }
    }))
  
    return { paths, fallback: false }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
      const menuId = params?.menuId
      const item = navlinks.find((data) => data.label === menuId)
  
      return { props: { item } }
    } catch (err) {
      return { props: { errors: console.log("dont work") } }
    }
  }