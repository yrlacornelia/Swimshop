import { dummyData } from "@/lib/dummyData";
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from "swiper/modules";
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react";
import ProductCard from "../reusableComponents/productCard";
import { it } from "node:test";
const SlideShow = () => {

  return (
    <div className="flex items-center flex-col lg:flex-row">
      <div className="lg:w-1/4 text-left lg:pl-20 "><h1> New <br></br> products </h1></div>
      <div className=" w-5/6  lg:w-3/4 relative flex ">
        <button className="p-5 md:flex hidden  swiper-button  image-swiper-button-prev absolute border bg-opacity-70 bg-white z-10 left-0 top-1/4 mt-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        </button>
        <button className="p-5 md:flex hidden swiper-button  absolute image-swiper-button-next border bg-opacity-70 bg-white z-10 right-0 top-1/4 mt-10"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        </button>
        <Swiper pagination={true} modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1000: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 20,

            }
          }}
          loop={true}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}

        >

          {dummyData.map((item, index) => {
            return (
              <div key={index} className="h-96" >

                <SwiperSlide key={index}>
                  <ProductCard src={item.src} name={item.name} price={item.price}/>
                </SwiperSlide>
              </div>)
          })}

        </Swiper>
      </div>
    </div>);
}

export default SlideShow;    
