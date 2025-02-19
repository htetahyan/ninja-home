'use client'

import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const services = [
  {
    title: 'Customer Support',
    description: 'Transform every interaction into a positive experience with customer-centric support that scales as you grow.',
    link: 'Explore Customer Support',
  },
  {
    title: 'Customer Experience',
    description: 'Enhance every stage of your customer journey and scale confidently – from a single touchpoint to the entire lifecycle.',
    link: 'Explore Customer Experience',
  },
  {
    title: 'Technical Customer Support',
    description: 'Outsource dedicated experts on your business to answer customer questions.',
    link: 'Explore Technical Customer Support',
  },
  {
    title: 'Content Moderation',
    description: 'Build a thriving online presence with a team specially trained to uphold your community standards.',
    link: 'Explore Content Moderation',
  },
  {
    title: 'Data Processing',
    description: 'Receive analyzed data, specific to how you need it interpreted and presented.',
    link: 'Explore Data Processing',
  },
  {
    title: 'Finance & Accounting',
    description: 'Streamline your financial operations with expert accounting and bookkeeping services.',
    link: 'Explore Finance & Accounting',
  },
];

const CurveSection = () => {
  return (
    <div className='relative mt-10   '> 
    <div className="w-full absolute top-0 left-0">
    <Image
      alt=""
      src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"
      width={1920} // Adjust based on screen size
      height={500} // Adjust height as needed
      className="w-full object-cover z-20"
    />
  </div>
      <div className='w-full h-fit lg:pb-20  pb-10  bg-white px-[3vw] lg:px-[10vw]'>
  <Oldwoman/>
  <PlantSection/>
  <ServiceSection/>
  <CarouselSection/>

      </div>
      {/* <div className="w-full absolute -bottom-7 left-0">
    <Image
      alt=""
      src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"
      width={1920} // Adjust based on screen size
      height={500} // Adjust height as needed
      className="w-full object-cover "
    />
  </div> */}
      </div>
  )
}

export default CurveSection

const Oldwoman=()=>{
    return (
        <div className='w-full  items-center lg:min-h-screen p-5 lg:pt-[13rem]  block lg:grid lg:grid-cols-2 h-fit relative'>
            <Image 
            width={400}
            height={300}
            alt=''
            src='https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp'
          />
          <div className='w-full h-fit grid gap-5'>
<h1 className='md:text-5xl text-3xl font-bold'>Free up resources, accelerate growth, and solve for scale.</h1>
       <h2 className='md:text-xl text-lg '  >
       At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing, reliable teams that turn growing pains into efficient pathways to profitability.
       </h2>
       <h2 className='md:text-xl text-lg '  >
       Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve key business outcomes.
       </h2><h2 className='md:text-xl text-lg '  >
       We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into rigid, long-term contracts.
       </h2><h2 className='md:text-xl text-lg '  >
       Now that’s outsourcing worth talking about.

</h2>
          </div>
            </div>
    )
}
const PlantSection=()=>{
    return(
        <div className='grid lg:grid-cols-2 mt-10 h-fit w-full py-10  px-[3vw] lg:px-[10vw] '>
            <div className='w-full h-fit  flex flex-col gap-10'>
                <h1 className='md:text-5xl text-3xl text-start font-bold'>
                Don’t grow it alone

                </h1>
                <h2 className='md:text-xl text-lg '  >
                Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
                </h2>
                <h2 className='md:text-xl text-lg '>Your dedicated new team members will become experts in your world — your customers, your tech, your data, your systems — so they can expand on what you’ve built.</h2>
            </div>
            <Image width ={100} height={100} className='place-self-center' src='https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg'
            alt=''/>
        </div>
    )
}
const ServiceSection = () => {
  return (
    <section className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
            <a href="#" className="text-black flex items-center font-semibold">
              {service.link} <ArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const testimonials = [
    {
      quote: "SupportNinja is really responsive and flexible based on our needs. But what we’re really, really happy about is the Ninjas and their commitment to the brand. They’re like an extension of our team!",
      author: "Sudip Dasgupta",
      position: "Head of Customer Experience, Product Madness",
    },
    {
      quote: "Their service is exceptional and always exceeds our expectations.",
      author: "Jane Doe",
      position: "CEO, Example Corp",
    },
    {
      quote: "A reliable partner for our business needs.",
      author: "John Smith",
      position: "CTO, Tech Innovations",
    },
    {
      quote: "Outstanding support and dedication.",
      author: "Emily Johnson",
      position: "COO, Business Solutions",
    },
  ];

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Why our clients stick with us</h2>
      <div  className="bg-[#f5e7e0] w-full h-[45vh] flex items-center relative p-6 rounded-lg shadow-md max-w-3xl text-center ">
      <div ref={containerRef} className='w-full h-2/3 flex flex-col justify-between items-center '>  <p className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</p>
        <p className="font-semibold">{testimonials[currentIndex].author}</p>
        <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p></div>
        <div className="flex justify-end mt-4 absolute bottom-5 right-5">
          <button onClick={handlePrev} className="p-2 bg-[#2d2d2d] text-white ">←</button>
          <button onClick={handleNext} className="p-2 bg-[#2d2d2d] text-white">→</button>
        </div>
      </div>
    </section>
  );
};