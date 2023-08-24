import Image from "next/image";
const SimilarProducts = () => {
    return ( <div className="mt-10 flex flex-col items-center ">
        
    <h3 className="">Similar items</h3>
    <div className="mt-5">
        <div className="flex gap-5  m-5 md:m-0 md:gap-20">   
        <div className=" flex flex-col  pb-10 ">
                    <div className=''>
                      <Image
                        src={"/images/noimage.png"}
                        alt={"slider image "}
                        height={150}
                        width={150}
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
                      height={150}
                      width={150}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="text-left ">
                      <p className="text-sm font-light text-grey-dark">{"item.brand"}</p>
                      <p ><b>{"item.name"}</b></p>
                      <p >{"item.price"}</p>
                    </div>
                  </div>
                  <div className=" md:flex flex-col hidden pb-10">
                    <div className=''>
                      <Image
                             src={"/images/noimage.png"}
                             alt={"slider image "}
                             height={150}
                             width={150}
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
    </div> );
}
 
export default SimilarProducts;