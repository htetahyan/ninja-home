'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FirstSection = () => {
  const textRef = useRef<any>(null)
  const textRef2 = useRef<any>(null)

  useEffect(() => {
    const text = textRef.current
    const words = text.innerText.split(' ')
    text.innerHTML = words.map((word:any) => `<span>${word}</span>`).join(' ')

    gsap.fromTo(
      text.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1
      }
    )

    const text2 = textRef2.current
    const words2 = text2.innerText.split(' ')
    text2.innerHTML = words2.map((word:any) => `<span>${word}</span>`).join(' ')

    gsap.fromTo(
      text2.children,
      { opacity: 0, y: 30,position:'relative' },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1
      }
    )
  }, [])

  return (
    <section className="w-full relative flex flex-col gap-6 justify-center h-[40vh] lg:h-[70vh]  items-center">
      <h2 ref={textRef} className='text-center md:text-3xl text-lg font-semibold lg:w-[65vw] leading-normal lg:leading-relaxed'>Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power your growth.
</h2>
      <h3 ref={textRef2} className='text-center  lg:text-8xl text-4xl font-bold'>Outsourcing worth talking about
</h3>
      <div className='w-full  h-0.5 absolute bottom-0 bg-[#d6cec3] ' />

    </section>
  )
}

export default FirstSection
