import React from 'react'
import ChooseSection from './components/ChooseSection'
import Image from 'next/image'
import CurveSection from './components/CurveSection'
import SecondCurveSection from './components/SecondCurveSection'
import ThirdCurveSection from './components/ThirdCurveSection'
import Footer from './components/Footer'
import FirstSection from './components/FirstSection'
const brands=[
  'https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg',
  'https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg',
  'https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg',
  'https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0a86ce483a_Customer%20Logo__Vidyard.svg',
  'https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd632ce484a_redweek.svg',
  'https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd161ce4839_Customer%20Logo__Product%20Madness.svg'
]
const page = () => {
  return (
    <div className='w-full z-0 '>
      <div className='w-full  relative '>
    <FirstSection/>
     <ChooseSection/>
     <div className="bg-[#bfc1b9] mx-auto lg:justify-around p-6 lg:p-10 rounded-2xl lg:w-[90%] mt-5 lg:mt-10 h-fit flex flex-col lg:flex-row items-center text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl lg:w-2/5 font-medium text-[#333] lg:mb-0 mb-6">
        Driving better business results for <br className="hidden sm:block" /> 200+ companies.
      </h2>

      <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center w-full max-w-2xl">
  {brands.map((brand, index) => (
    <Image
      key={index}
      src={brand}
      alt=""
      width={80} // Default size for small screens
      height={40}
      className="mx-auto sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20"
    />
  ))}
</div>

    </div> 

      </div>
<CurveSection/>
<SecondCurveSection/>
<ThirdCurveSection/>
<Footer/>
    </div>
  )
}

export default page
