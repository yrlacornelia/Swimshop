import { fetchByProducts, fetchingPost } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";

Image
type Props = {
  item: any;
};

const Category = ({item}:Props) => {
  console.log(item.label)
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetchByProducts(item.label).then((fetchedData) => {
      setData(fetchedData);
      console.log(fetchedData);
    });
  }, [item.label]); // Dependency array now includes item.label

  console.log(data)
    return ( <div className="mt-10">
        <div className="w-2/3 m-auto">   
        <h3 className="text-center mb-2">Tröjor</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Et nisl ullamcorper amet ultricies sit pretium consequat pretium. Et felis sit morbi elit vel tellus tortor. Consectetur curabitur fermentum venenatis consequat ut sit. Sapien ut vestibulum ultrices nunc tincidunt urna ipsum sit. Nec amet sodales euismod ipsum neque tristique pellentesque nunc. Fames adipiscing ultrices ac iaculis condimentum feugiat iaculis ut.</p>
</div>
<div className="w-full mt-20 px-10">
    <div className=" flex justify-between">
        <p>67 ITEMS</p>
        <p>sort by senast inkommet </p>
    </div>
    <div>
    <div className="flex gap-20 mt-10 items-center justify-center">  
    <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                        src={"/images/noimage.png"}
                        alt={"slider image "}
                        height={200}
                        width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div> 
        <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                        src={"/images/noimage.png"}
                        alt={"slider image "}
                        height={200}
                        width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div>
                  <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                      src={"/images/noimage.png"}
                      alt={"slider image "}
                      height={200}
                      width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div>
                  <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                             src={"/images/noimage.png"}
                             alt={"slider image "}
                             height={200}
                             width={200}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div>
                  </div>
    </div>
</div>
     
    </div> );
}
 
export default Category;