'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect, useRef, useState } from 'react'
import logo from '../../../public/outsourceNinja.svg'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { 
  MessageSquare, 
  Calculator, 
  FileEdit, 
  Settings,
  ChevronRight,
  X,
  Menu,
  Building2,
  Briefcase,
  BookOpen
} from 'lucide-react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
const logoRef=useRef(null)
const navItemsRef=useRef(null)
const containerRef=useRef(null)
useLayoutEffect(() => {
    if (logoRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top center", // Start fading when top of logo reaches center of viewport
            end: "top 400px", // Fully fade out when the top of the logo is 100px from the top
            scrub: true,
          },
        });
  
        tl.to(logoRef.current, {
          opacity: 0,
          duration: 0.3,
          

          ease: "power2.inOut",
        }).to(navItemsRef.current, {
         backgroundColor: "white",
      
          duration: 0.3,
          ease: "power2.inOut",
        })
      });
  
      return () => ctx.revert();
    }
  });
  

  return (
    <>   <div className="w-full bg-[#0B3B25] text-white text-center py-5 text-lg">
    SupportNinja is hiring! Apply through our Jobs Board. <Link href="#" className="underline">Find Open Positions Today</Link>
  </div>
    <div ref={containerRef} className="w-full font-semibold sticky top-0 z-50">
      {/* Top banner */}
   

      {/* Main navbar */}
      <nav className="container mx-auto px-[3vw] lg:px-[10vw] py-4 relative top-0">
        
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link  href="/" className="flex items-center">
            <Image ref={logoRef}
              src={logo} 
              alt="SupportNinja Logo" 
              width={150} 
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div ref={navItemsRef} className="hidden rounded-full lg:flex items-center gap-8 flex-1 py-4 justify-center">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-600">
                Solutions
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Solutions Popover - Desktop */}
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6 grid grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group/item">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-2">Customer Experience</h3>
                        <div className="space-y-4 grid justify-start">
                          <Link href="/customer-conversion" className="block text-sm text-gray-600 hover:text-gray-900">
                            Customer Conversion <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                          </Link>
                          <Link href="/customer-onboarding" className="block text-sm text-gray-600 hover:text-gray-900">
                            Customer Onboarding <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                          </Link>
                          <Link href="/customer-support" className="block text-sm text-gray-600 hover:text-gray-900">
                            Customer Support <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                          </Link>
                          <Link href="/technical-customer-support" className="block text-sm text-gray-600 hover:text-gray-900">
                            Technical Customer Support <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                          </Link>
                          <Link href="/customer-renewals" className="block text-sm text-gray-600 hover:text-gray-900">
                            Customer Renewals <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                  <div className="flex items-center gap-3 group/item ">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <Link href="/finance-accounting" className="font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1">
                          Finance & Accounting <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <FileEdit className="w-5 h-5" />
                      </div>
                      <div>
                        <Link href="/content-moderation" className="font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1">
                          Content Moderation <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group/item">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <Link href="/data-processing" className="font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1">
                          Data Processing <span className="text-gray-400 group-hover/item:text-gray-900">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-600">
                Industries
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Industries Popover */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 grid gap-3">
                  <Link href="/ecommerce" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">E-commerce</h4>
                      <p className="text-sm text-gray-600">Scale your online retail business</p>
                    </div>
                  </Link>
                  <Link href="/technology" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Technology</h4>
                      <p className="text-sm text-gray-600">Support for tech companies</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/how-it-works" className="hover:text-gray-600">How it Works</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-600">
                About
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* About Popover */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 grid gap-3">
                  <Link href="/company" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Company</h4>
                      <p className="text-sm text-gray-600">Learn about our mission and values</p>
                    </div>
                  </Link>
                  <Link href="/careers" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Careers</h4>
                      <p className="text-sm text-gray-600">Join our growing team</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/resources" className="hover:text-gray-600">Resources</Link>
            </div>
            <Link 
              href="/get-started" 
              className="bg-[#0B3B25] hidden lg:block text-white px-6 py-2 rounded-full hover:bg-[#0d4b2e] transition-colors"
            >
              Get Started
            </Link>
         

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white  text-white z-50 pt-20 px-4 lg:hidden overflow-y-auto">
            <button 
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-4">
              {/* Solutions Section */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setActiveSection(activeSection === 'solutions' ? null : 'solutions')}
                >
                  <span className='text-black'>Solutions</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === 'solutions' ? 'rotate-90' : ''}`} />
                </button>
              
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/" className="block py-2 text-gray-600">Customer Experience</Link>
                    <Link href="/" className="block py-2 text-gray-600">Customer Conversion</Link>
                    <Link href="/" className="block py-2 text-gray-600">Customer Onboarding</Link>
                    <Link href="/" className="block py-2 text-gray-600">Customer Support</Link>
                    <Link href="/" className="block py-2 text-gray-600">Technical Customer Support</Link>
                    <Link href="/" className="block py-2 text-gray-600">Customer Renewals</Link>
                    <Link href="/" className="block py-2 text-gray-600">Content Moderation</Link>
                    <Link href="/" className="block py-2 text-gray-600">Data Processing</Link>
                    <Link href="/" className="block py-2 text-gray-600">Finance & Accounting</Link>
                  </div>
               
              </div>

              {/* Industries Section */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setActiveSection(activeSection === 'industries' ? null : 'industries')}
                >
                  <span className='text-black'>Industries</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === 'industries' ? 'rotate-90' : ''}`} />
                </button>
              
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/supply-chain" className="block py-2 text-gray-600">Supply Chain & Logistics</Link>
                    <Link href="/fintech" className="block py-2 text-gray-600">Fintech</Link>
                    <Link href="/healthcare" className="block py-2 text-gray-600">Healthcare</Link>
                    <Link href="/ecommerce" className="block py-2 text-gray-600">E-commerce</Link>
                    <Link href="/saas" className="block py-2 text-gray-600">SaaS</Link>
                    <Link href="/ai" className="block py-2 text-gray-600">AI</Link>
                  </div>
           
              </div>

              <Link href="/how-it-works" className="block py-2">How it Works</Link>

              {/* About Section */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setActiveSection(activeSection === 'about' ? null : 'about')}
                >
                  <span className='text-black'>About</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === 'about' ? 'rotate-90' : ''}`} />
                </button>
                {activeSection === 'about' && (
                  <div className="pl-4 space-y-2 mt-2 text-black">
                    <Link href="/about-us" className="block py-2 ">About us</Link>
                    <Link href="/careers" className="block py-2 ">Careers</Link>
                  </div>
                )}
              </div>

              <Link href="/resources" className="block py-2">Resources</Link>

              <Link 
                href="/get-started" 
                className="block w-full bg-[#0B3B25] text-white text-center px-6 py-2 rounded-full hover:bg-[#0d4b2e] transition-colors mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div></>
  )
}

export default NavBar
