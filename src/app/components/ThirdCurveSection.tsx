import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ThirdCurveSection = () => {
  return (
    <div className="relative bg-[#f7e1d2] h-fit mt-[-7px] ">
      {/* Top curve connection */}
      <div className="w-full absolute -top-2 lg:-top-10 left-0">
        <Image
          alt="Curve Connector"
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
          width={1920}
          height={500}
          
          className="w-full object-cover"
        />
      </div>

    <CTASection/>
     
    </div>
  )
}

export default ThirdCurveSection
const CTASection = () => {
    return (
      <div className="w-full px-[3vw] py:5 lg:py-10 z-10 h-fit lg:px-[10vw]  ">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 px-6">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-serif mb-8">
              We're better <em className="italic">together</em>.
              <br />
              Start building your 
              dream team<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl font-medium text-gray-900 mb-8">
              Design a custom outsourcing solution that drives results.
            </p>
            <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full w-fit hover:bg-red-600 transition-colors">
              Get started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
  
          {/* Right Illustration */}
          <div className="relative w-full">
            <div className="relative w-full h-[200px]">
              <Image 
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-500.webp"
                alt="Team illustration"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };