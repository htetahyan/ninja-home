'use client'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from 'react'

const items = [
    {name:'Customer Experience',image:'https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg',
    },
    {name:'Customer Support',
        image:'https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg',
    }, {name:'Technical Customer Support',
        image:'https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg',
    }, {name:'Content Moderation',
        image:'https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg',
    }, {name:'Data Processing',
        image:'https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg',
    },
{name:'Finance & Accounting',      
      image:'https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg',
}


]
const ChooseSection = () => {
    const [selectedItems,setSelectedItems]=useState([])
    const buttonRef=useRef<any>(null)
    const arrowRef=useRef<any>(null)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({ paused: true });
          
          tl.to(arrowRef.current, {
            x: 100,
            duration: 0.3,
            ease: "power2.inOut",
          })
          .set(arrowRef.current, {
            x: -100,
            color: "black"
          })
          .to(arrowRef.current, {
            x: 0,
            duration: 0.3,
            ease: "power2.inOut"
          });
          
          const handleMouseEnter = () => {
            tl.pause(0);
            gsap.set(arrowRef.current, { x: 0, color: "#ee4b4a" });
            tl.play();
          };
          
          const handleMouseLeave = () => {
            tl.pause();
            gsap.to(arrowRef.current, {
              x: 0,
              color: "#ee4b4a",
              duration: 0.3
            });
          };
          
          buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
          buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
          
          return () => {
            buttonRef.current?.removeEventListener('mouseenter', handleMouseEnter);
            buttonRef.current?.removeEventListener('mouseleave', handleMouseLeave);
          };
        });
        
        return () => ctx.revert();
    }, []);
    
  return (
    <section className='w-full mt-10 flex gap-6 flex-col h-fit  justify-around items-center px-[3vw] lg:px-[10vw]'>
   <div> <h2 className='text-center text-2xl md:text-3xl font-semibold'>Which outsourcing solutions are you looking for?
    </h2>
<h4 className='text-center text-xl'>
Choose as many as you need.

</h4></div>
<div className='w-full grid grid-cols-1 lg:grid-cols-6 gap-6 place-items-center '>
    {items.map((item)=>(
        <div key={item.name} className='w-full bg-white p-4  lg:h-[30vh] flex lg:flex-col lg:justify-center items-center'>
            <Image src={item.image} alt={item.name} width={100} height={150} sizes='1vw' className=''/>
            <p className='text-center font-semibold'>{item.name}</p>
        </div>
    ))}
</div>
<div className='w-full flex gap-6 justify-center'>
<button ref={buttonRef} className='w-full px-2 lg:max-w-[13vw] flex items-center justify-between  bg-[#ee4b4a] hover:bg-black text-white p-2 text-2xl font-bold rounded-full '>Get Started
  <div className='p-4 bg-white rounded-full flex items-center justify-center relative overflow-hidden'> <ArrowRight ref={arrowRef} className='text-[#ee4b4a]' /></div> 
</button>
</div>
  </section>
  )
}

export default ChooseSection
