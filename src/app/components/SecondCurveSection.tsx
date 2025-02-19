'use client'
import Image from 'next/image'
import React, { useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const SecondCurveSection = () => {
  return (
    <div className="relative bg-[#bfc1b9] h-fit w-full  ">
      {/* Top curve connection */}
      <div className="w-full absolute -top-3 lg:-top-10 left-0">
        <Image
          alt="Curve Connector"
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"
          width={1920}
          height={500}
          
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Background Globe Lines */}
      <div className="relative w-full px-[3vw] lg:px-[10vw] h-[70vh] md:h-[80vh] lg:h-screen">
        <Image
          fill
          alt="Globe Lines"
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0fc8ce4798_Globe%20Lines.svg"
          className="object-cover lg:object-contain"
        />

        {/* Profile images positioned along curves */}
        <div className="absolute hidden lg:flex inset-0  justify-center items-center">
          {[
            // Mobile default
            { top: '15%', left: '10%' },
            { top: '35%', left: '5%' },
            { top: '55%', left: '8%' },
            { top: '75%', left: '12%' },
            { top: '90%', left: '18%' },
            { top: '15%', right: '10%' },
            { top: '35%', right: '5%' },
            { top: '55%', right: '8%' },
            { top: '75%', right: '12%' },
            { top: '90%', right: '18%' },
          ].map((pos, index) => (
            <Image
              key={index}
              alt={`Profile ${index}`}
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c31bace479d_Avatar%20Circle__06.svg"
              width={40} // Default size for mobile
              height={40}
              className="absolute rounded-full border-2 border-red-500 
              md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
              style={{
                top: pos.top,
                left: pos.left,
                right: pos.right,
              }}
            />
          ))}
        </div>
        <TextBox/>
      </div>
      <ApproachSection/>
      <PassionateSection/>
      <CareerSection/>
    </div>
  )
}

export default SecondCurveSection
const TextBox=()=>{
    return (
        <div className='lg:w-2/5 w-full mx-auto gap-4 h-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-center md:text-5xl'>Spanning a wider
            world of talent</h1>
            <h3 className='text-xl text-center'>What are the odds that the most qualified people in the world live in your zip code? We’ll help you see further.
                </h3>
                <h3 className='text-xl text-center'>
                A global team extends your presence across time zones and languages—which means longer reach, constant uptime, and happier customers.
                                </h3>
            <h3 className='font-bold text-xl text-center'>It’s time to go international. No passport required.

</h3><button className='bg-[#0c3a23] text-white py-2 px-4 rounded-full' >Get Started</button>
        </div>
    )
}



const ApproachSection = () => {
  const [activeTab, setActiveTab] = useState('management');

  const steps = [
    { number: 1, content: 'Deep dive with us into your goals and hiring needs.' },
    { number: 2, content: "We'll work with you to design a customized solution for your business." },
    { number: 3, content: "Once you're on board, we'll source the best talent for you." },
    { number: 4, content: "We'll create a customized training program that aligns with your goals." },
    { number: 5, content: "Sit back and enjoy the efficiencies ahead – it's grow time." }
  ];

  const talentSteps = [
    { number: 1, content: 'Deep dive with us into your goals and hiring needs' },
    { number: 2, content: 'Deep dive with us into your goals and hiring needs.' },
    { number: 3, content: 'Access a private portal with hand-picked talent to browse and shortlist candidates.' },
    { number: 4, content: 'Deep dive with us into your goals and hiring needs.' },
    { number: 5, content: 'Access a private portal with hand-picked talent to browse and shortlist candidates.' }
  ];

  return (
    <div className="w-full min-h-[60vh] lg:min-h-screen px-[5vw] lg:px-[10vw] py-10 ">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-3xl md:text-5xl  font-bold text-black mb-6">
            Our customized approach
          </h1>
          <p className="text-xl md:2xl text-black">
            We tailor our strategies and services based on your roadblocks and needs, delivering a strategic outsourcing playbook — inclusive of technology, talent, and timing — that drives your business forward.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl mb-4">Get set up in 5 easy steps</h2>
            <div className="flex gap-4 mb-8">
              <button
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'management'
                    ? 'bg-white shadow-sm'
                    : 'bg-transparent'
                }`}
                onClick={() => setActiveTab('management')}
              >
                Management-as-a-Service
              </button>
              <button
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'talent'
                    ? 'bg-white shadow-sm'
                    : 'bg-transparent'
                }`}
                onClick={() => setActiveTab('talent')}
              >
                Talent-as-a-Service
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {activeTab === 'management' 
              ? steps.map((step) => (
                  <div key={step.number} className="flex items-start gap-4 relative">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center">
                      {step.number}
                    </div>
                    <p className="text-gray-700 pt-1">{step.content}</p>
                  <div className={`w-1 h-full bg-gray-200 absolute left-3 top-8 ${step.number===5 ? 'hidden' : ''}`}/>
                  </div>
                ))
              : talentSteps.map((step) => (
                  <div key={step.number} className="flex items-start gap-4 relative">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center">
                      {step.number}
                    </div>
                    <p className="text-gray-700 pt-1">{step.content}</p>
                    <div className={`w-1 h-full bg-gray-200 absolute left-3 top-8 ${step.number===5 ? 'hidden' : ''}`}/>

                  </div>
                ))
            }
          </div>
          <button className="flex items-center mt-5 md:mt-10 gap-2 bg-[#0C3A23] text-white px-6 py-3 rounded-full w-fit hover:bg-red-600 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};


  
const images = [
    {
      src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1677ce47c0_Tile__Man-p-500.png",
      alt: "Team member 1",
    },
    {
      src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cf161ce47c1_Tile__Woman-p-500.png",
      alt: "Team member 2",
    },
    {
      src: "https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c141ace47c2_Tile__Man%25202-p-500.png",
      alt: "Team member 3",
    },
  ];
  
  const colorBlocks = ["bg-red-400", "bg-rose-300", "bg-yellow-400"];
  
  const ImageTile = ({ src, alt, className, width, height }:any) => (
    <div className={`absolute ${className} w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-xl bg-gray-200 shadow-md`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
  );
  
  const GraphicElement = ({ className, innerClass }:any) => (
    <div className={`absolute ${className} w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-xl shadow-md`}>
      <div className={`w-12 h-12 ${innerClass}`}></div>
    </div>
  );
  
  const PassionateSection = () => {
    useLayoutEffect(() => {}, []);
  
    return (
      <div className="w-full bg-gray-50 py-14 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-serif mb-8">
              We're passionate about our <em className="italic">people</em>.
            </h1>
            <h2 className="text-xl font-medium mb-4">
              Our people-first culture attracts and retains top talent.
            </h2>
            <p className="text-gray-700 mb-8">
              For nearly a decade, we've fostered the growth, well-being, and
              career development of our team members — and that's earned us
              industry-high talent retention rates.
            </p>
            <button className="bg-green-900 text-white px-6 py-3 rounded-full w-fit hover:bg-green-800 transition-colors">
              Read our story
            </button>
          </div>
  
          {/* Right Layout - Overlapping Tiles */}
          <div className="relative mt-10 md:mt-2 w-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] h-[280px] lg:h-[350px]">
            <ImageTile
              src={images[0].src}
              alt={images[0].alt}
              className="top-0 left-0 "
              width={100}
              height={100}
            />
            <ImageTile
              src={images[1].src}
              alt={images[1].alt}
              className="top-[-10px] right-0 w-28 h-28 "
              width={110}
              height={110}
            />
            <GraphicElement className="top-[60px] left-[35%] bg-rose-100" innerClass="bg-red-400 rounded-full" />
            <GraphicElement className="bottom-0 left-0 bg-rose-100" innerClass="bg-red-500" />
            <ImageTile
              src={images[2].src}
              alt={images[2].alt}
              className="bottom-[-10px] right-[20%] w-28 h-28 "
              width={110}
              height={110}
            />
            <GraphicElement className="bottom-0 right-0 bg-yellow-100" innerClass="w-12 h-16 bg-yellow-500" />
          </div>
        </div>
      </div>
    );
  };
  
  

  
  const CareerSection = () => {
    return (
      <div className="w-full bg-white py-10 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 px-6">
          {/* Left side with images */}
          <div className="relative  row-start-2 lg:row-start-1">
            {/* Main image */}
            <div className="relative w-full lg:w-2/3 aspect-square rounded-2xl overflow-hidden">
              <Image 
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-500.webp"
                alt="Team meeting in conference room"
                quality={100}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative icon overlay */}
            <div className="absolute bottom-16 left-10 w-24 h-24 rounded-2xl bg-rose-100 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-400 relative">
              <Image src='https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c34dace47c3_Tile%2520Illustrations__Document%25202-p-500.png'
              alt='Document Illustration'
              fill
              className='object-contain'
              sizes="(max-width: 768px) 100vw, 50vw"
              />
              </div>
            </div>
          </div>
  
          {/* Right side content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-serif mb-8">
              Grow your career and unleash your potential.
            </h1>
            <h2 className="text-xl font-medium mb-4 text-gray-900">
              Ready to expand your horizons at a truly global company?
            </h2>
            <p className="text-gray-700 mb-8">
              At SupportNinja, we prioritize your progress, celebrate your wins, and provide a supportive environment where you can thrive. Check out our openings today.
            </p>
            <button className="bg-green-900 text-white px-6 py-3 rounded-full w-fit hover:bg-green-800 transition-colors">
              View open roles
            </button>
          </div>
        </div>
      </div>
    );
  };
  
