import Collaboration from '@/components/home/Collaboration'
import Instagram from '@/components/home/instagram'
import SalesPitch from '@/components/home/salesPitch'
import SlideShow from '@/components/home/slider'
import WhiteBtn from '@/components/reusableComponents/whiteBtn'
import Image from 'next/image'
export default function Home() {
  return (
//     <main className='relative'>
//       <div className='absolute  w-full h-96 bg-black opacity-30'></div>
//         <div className="bg-fill bg-no-repeat bg-center bg-[url('/images/hero.jpeg')] w-full h-96  "></div>
// {/* <Image src={"/images/hero.jpg"} width={100} height={100}/>  */}
//     </main>
<div className='flex gap-20 mb-20 flex-col'>
<SalesPitch />
<SlideShow/>
<Collaboration /> 
{/* <Instagram /> */}
</div>
  )
}
