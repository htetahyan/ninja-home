'use client'

import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import { ArrowRight, BookOpen, Building2, Check, CircleDollarSign, Computer, Settings } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    title: 'Customer Support',
    icon:Building2,
    description: 'Transform every interaction into a positive experience with customer-centric support that scales as you grow.',
    link: 'Explore Customer Support',
  },
  {
    title: 'Customer Experience',
    icon: Check,
    description: 'Enhance every stage of your customer journey and scale confidently – from a single touchpoint to the entire lifecycle.',
    link: 'Explore Customer Experience',
  },
  {
    title: 'Technical Customer Support',
    icon:Computer,
    description: 'Outsource dedicated experts on your business to answer customer questions.',
    link: 'Explore Technical Customer Support',
  },
  {
    title: 'Content Moderation',
    icon:BookOpen,
    description: 'Build a thriving online presence with a team specially trained to uphold your community standards.',
    link: 'Explore Content Moderation',
  },
  {
    title: 'Data Processing',
    icon:Settings,
    description: 'Receive analyzed data, specific to how you need it interpreted and presented.',
    link: 'Explore Data Processing',
  },
  {
    title: 'Finance & Accounting',
    icon:CircleDollarSign,
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
      <div className='w-full h-fit lg:pb-20  pb-10  bg-white px-[5vw] lg:px-[10vw]'>
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
    const textRef=useRef<any>([])
    useLayoutEffect(()=>{
if(textRef.current){
    const tl=gsap.timeline(
{        ScrollTrigger:textRef.current,
    start:'top -=400px',
    end:'top center',  scrub: true,
}        
    )

    tl.fromTo(textRef!.current,{
        opacity:0,
        y:100
    },{
        opacity:1,
        y:0
    })
}

    })
    return (
        <div className='w-full  items-center lg:min-h-screen  lg:pt-[13rem]  block lg:grid lg:grid-cols-2 h-fit relative'>
            <Image 
            width={400}
            height={300}
            alt=''
            src='https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp'
          />
          <div ref={textRef} className='w-full h-fit grid gap-5 '>
<h1 className='md:text-5xl text-4xl font-bold' >Free up resources, accelerate growth, and solve for scale.</h1>
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
    const plantRef = useRef<any>(null);
    useLayoutEffect(() => {
        if (plantRef.current) {
            gsap.fromTo(plantRef.current, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: plantRef.current,
                    start: 'top bottom',
                    end: 'top center',
                    scrub: true
                }
            });
        }
    }, []);
    return(
        <div ref={plantRef} className='grid lg:grid-cols-2 mt-6 lg:mt-10 relative h-fit w-full py-10  gap-5 lg:gap-10  '>
            <div className='w-full h-fit  flex flex-col gap-5 lg:gap-10'>
                <h1 className='md:text-5xl text-3xl text-start font-bold'>
                Don’t grow it alone

                </h1>
                <h2 className='md:text-xl text-lg '  >
                Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
                </h2>
                <h2 className='md:text-xl text-lg '>Your dedicated new team members will become experts in your world — your customers, your tech, your data, your systems — so they can expand on what you’ve built.</h2>
            </div>
            <Image width ={100} height={100} className=' row-start-1 lg:place-self-center md:col-start-2' src='https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg'
            alt=''/>
            <div className='absolute w-full h-0.5 bg-gray-300 bottom-0 '/>
        </div>
    )
}
const ServiceSection = () => {
    const serviceRef = useRef<any>(null);
    useLayoutEffect(() => {
        if (serviceRef.current) {
            gsap.fromTo(serviceRef.current, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: serviceRef.current,
                    start: 'top bottom',
                    end: 'top center',
                    scrub: true
                    
                }
            });
        }
    }, []);
    return (
        <div ref={serviceRef} className="w-full py-6 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white py-6 lg:px-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
            <service.icon className='text-md mb-2'/>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
            <a href="#" className="text-black flex items-center font-semibold">
              {service.link} <ArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarouselSection = () => {
    const carouselRef = useRef<any>(null);
    useLayoutEffect(() => {
        if (carouselRef.current) {
            gsap.fromTo(carouselRef.current, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: carouselRef.current,
                    start: 'top bottom',
                    end: 'top center',
                    scrub: true
                }
            });
        }
    }, []);

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState("next"); // Tracks direction

    const testimonials = [
        {
            quote: "SupportNinja is really responsive and flexible based on our needs. But what we’re really, really happy about is the Ninjas and their commitment to the brand.",
            author: "Sudip Dasgupta",
            position: "Head of Customer Experience, Product Madness",
        },
        {
            quote: "I love the communication and transparency they provide, especially during the project. It gets handled very efficiently. Thank you SupportNinja!",
            author: "Jane Doe",
            position: "CEO, Example Corp",
        },
        {
            quote: "Great support and dedication from the team. They are always available to help and go the extra mile. Very responsive to our needs. Thank you SupportNinja!",
            author: "John Smith",
            position: "CTO, Tech Innovations",
        },
        {
            quote: "Outstanding support and dedication. They are very flexible and provide just the right amount of support when needed. Very professional and very quick to respond.",
            author: "Emily Johnson",
            position: "COO, Business Solutions",
        },
    ];

    const containerRef = React.useRef(null);

    React.useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, x: direction === "next" ? 50 : -50 }, // Direction-based animation
                { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [currentIndex, direction]);

    const handlePrev = () => {
        setDirection("prev"); // Set direction before updating index
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setDirection("next"); // Set direction before updating index
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div ref={carouselRef} className='w-full h-fit grid gap-5'>
            <section className="w-full py-10 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6">Why our clients stick with us</h2>
                <div className='w-full flex flex-col justify-between items-center  bg-[#f5e7e0] py-8 md:py-8 p-6 rounded-lg h-[50vh]'>
                    <div className="w-full flex items-center relative max-w-3xl text-center">
                        <div ref={containerRef} className='w-full  flex flex-col justify-between h-fit md:h-2/3 items-center'>
                            <p className="text-xl md:text-3xl italic mb-4">"{testimonials[currentIndex].quote}"</p>
                            <p className="font-semibold md:text-xl ">{testimonials[currentIndex].author}</p>
                            <p className="text-sm md:text-lg text-gray-600">{testimonials[currentIndex].position}</p>
                        </div>
                    </div>
                    <div className="flex mt-4 mx-auto lg:absolute bottom-16 right-5 bg-[#2d2d2d] w-fit p-2 rounded-full">
                        <button onClick={handlePrev} className="p-2 bg-[#2d2d2d] text-white border-r-2">←</button>
                        <button onClick={handleNext} className="p-2 bg-[#2d2d2d] text-white">→</button>
                    </div>
                </div>
            </section>
        </div>
    );
};
