
import { dummyData } from "@/lib/dummyData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs } from 'swiper/modules'; // Update the imports
import Image from 'next/image';

import 'swiper/css'; // Update the import path
import { use, useEffect, useState } from 'react';
const SlideShow = () => {
  const [galleryImage, setGalleryImage] = useState<string>(dummyData[0].src)
const handleSrc = (src:string) => {
  setGalleryImage(src)
}
useEffect(() => {
  
  console.log(dummyData[0].src)
 }, []);
  return (
    <>
    <div className="m-5 md:hidden ">
      <Swiper
        pagination={{
          type: 'bullets',
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
      
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerGroup: 1,
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerGroup: 1,
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dummyData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col pb-10">
              <div>
                <Image
                  src={item.src}
                  alt={`Slider image ${index}`}
                  height={100}
                  width={50}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="md:flex hidden m-5 flex-row gap-10 ml-10">
      <div className="flex flex-col gap-5">  
          {dummyData.map((item, index) => (
         
            <div onClick={() => handleSrc(item.src)} >
        
                <Image
                  src={item.src}
                  alt={`Slider image ${index}`}
                  height={120}
                  width={120}
                  
                />
            </div>
        ))}
        </div>
        <div><Image alt="slider image" src={galleryImage}  height={500} width={500}/>
     </div>
 
    </div>
    </>
  );
};

export default SlideShow;

// find imagesrc from right id all thumbnails change an index depending on wich thumbnail is clicked and src is this one 


// import { dummyData } from "@/lib/dummyData";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Thumbs } from 'swiper/modules'; // Update the imports
// import Image from 'next/image';

// import 'swiper/css'; // Update the import path
// import { useState } from 'react';

// const SlideShow = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   return (
//     <div className="m-5 md:hidden ">
//       <Swiper
//         pagination={{
//           type: 'bullets',
//         }}
//         modules={[Pagination, Navigation, Thumbs]}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

//         spaceBetween={10}
//         slidesPerView="auto"
//         breakpoints={{
//           320: {
//             slidesPerView: 1.3,
//             slidesPerGroup: 1,
//             spaceBetween: 10,
//           },
//           500: {
//             slidesPerView: 1.3,
//             slidesPerGroup: 1,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerGroup: 1,
//             slidesPerView: 1.3,
//             spaceBetween: 20,
//           },
//           1000: {
//             slidesPerGroup: 1,
//             slidesPerView: 1.3,
//             spaceBetween: 20,
//           },
//         }}
//         loop={true}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {dummyData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-col pb-10">
//               <div>
//                 <Image
//                   src={item.src}
//                   alt={`Slider image ${index}`}
//                   height={100}
//                   width={50}
//                   className="w-full object-contain"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         modules={[Thumbs]}
//         watchSlidesProgress
//         spaceBetween={10}
//         loop={false}
//         loopedSlides={1}
//         slidesPerView={4}
//         freeMode={false}
//       >
//         {dummyData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={item.src}
//               alt={`Thumbnail ${index}`}
//               height={30}
//               width={30}
//               className="object-contain"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SlideShow;