'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import logo from '../../../public/outsourceNinja.svg'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { 
  MessageSquare, 
  Calculator, 
  FileEdit, 
  Settings, 
  Menu, 
  X, 
  ChevronRight, 
  Building2, 
  Briefcase, 
  BookOpen
} from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Types
interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
  icon?: React.ReactNode;
  description?: string;
}

// Navigation Data
const NAV_ITEMS: Record<string, NavItem[]> = {
  solutions: [
    {
      title: 'Customer Experience',
      icon: <MessageSquare className="w-5 h-5" />,
      items: [
        { title: 'Customer Conversion', href: '/customer-conversion' },
        { title: 'Customer Onboarding', href: '/customer-onboarding' },
        { title: 'Customer Support', href: '/customer-support' },
        { title: 'Technical Customer Support', href: '/technical-customer-support' },
        { title: 'Customer Renewals', href: '/customer-renewals' }
      ]
    },
    {
      title: 'Finance & Accounting',
      icon: <Calculator className="w-5 h-5" />,
      href: '/finance-accounting'
    },
    {
      title: 'Content Moderation',
      icon: <FileEdit className="w-5 h-5" />,
      href: '/content-moderation'
    },
    {
      title: 'Data Processing',
      icon: <Settings className="w-5 h-5" />,
      href: '/data-processing'
    }
  ],
  industries: [
    {
      title: 'E-commerce',
      icon: <Building2 className="w-5 h-5" />,
      description: 'Scale your online retail business',
      href: '/ecommerce'
    },
    {
      title: 'Technology',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'Support for tech companies',
      href: '/technology'
    }
  ],
  about: [
    {
      title: 'Company',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Learn about our mission and values',
      href: '/company'
    },
    {
      title: 'Careers',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'Join our growing team',
      href: '/careers'
    }
  ]
}

// Components
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="hover:text-gray-600">
    {children}
  </Link>
)

const DropdownButton: React.FC<{ title: string; onClick?: () => void }> = ({ title, onClick }) => (
  <button className="flex items-center gap-1 hover:text-gray-600" onClick={onClick}>
    {title}
    <ChevronRight className="w-4 h-4" />
  </button>
)

const DropdownContent: React.FC<{ items: NavItem[]; className?: string }> = ({ items, className = "" }) => (
  <div className={`p-4 grid gap-3 ${className}`}>
    {items.map((item, index) => (
      <Link 
        key={index}
        href={item.href || '#'} 
        className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg"
      >
        {item.icon && (
          <div className="p-2 bg-gray-100 rounded-lg">
            {item.icon}
          </div>
        )}
        <div>
          <h4 className="font-medium">{item.title}</h4>
          {item.description && (
            <p className="text-sm text-gray-600">{item.description}</p>
          )}
        </div>
      </Link>
    ))}
  </div>
)

const DesktopNav: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null)
  
  useLayoutEffect(() => {
    if (!navRef.current) return
    
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top -=100px",
        end: "+=200px",
        onUpdate: (self) => {
          gsap.to(navRef.current, {
            backgroundColor: self.progress ? "white" : "transparent",
            boxShadow: self.progress ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
            outline: self.progress ? "0.4px solid rgba(0,0,0,0.1)" : "none",
            duration: 0.3,
            immediateRender: false
          });
        }
      });
    });
    
    return () => ctx.revert()
  }, [])

  return (
    <div ref={navRef} className="hidden w-fit rounded-full lg:flex items-center gap-8 p-4 px-6 justify-center">
      {Object.entries(NAV_ITEMS).map(([key, items]) => (
        <div key={key} className="relative group">
          <DropdownButton title={key.charAt(0).toUpperCase() + key.slice(1)} />
          <div className="absolute top-full left-0 mt-2 w-fit bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <DropdownContent items={items} />
          </div>
        </div>
      ))}
      <NavLink href="/how-it-works">How it Works</NavLink>
      <NavLink href="/resources">Resources</NavLink>
    </div>
  )
}


const MobileNav: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
  }) => {

const NAV_ITEMS = {
    Solutions: [
      "Customer Experience",
      "Customer Conversion",
      "Customer Onboarding",
      "Customer Support",
      "Technical Customer Support",
      "Customer Renewals",
      "Content Moderation",
      "Data Processing",
      "Finance & Accounting",
    ],
    Industries: [
      "Supply Chain & Logistics",
      "Fintech",
      "Healthcare",
      "Ecommerce",
      "SaaS",
      "AI",
    ],
    About: ["About Us", "Careers"],
  };
    const [activeSections, setActiveSections] = useState<string[]>(Object.keys(NAV_ITEMS));
    const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!menuRef.current) return;
  
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
      );
  
      if (isOpen) {
        document.body.style.overflow = "hidden";
        tl.play();
      } else {
        document.body.style.overflow = "";
        tl.reverse();
      }
  
      return () => {
        document.body.style.overflow = "";
        tl.kill();
      };
    }, [isOpen]);
  
    return (
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white z-50  px-4 lg:hidden overflow-y-auto max-h-screen transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
       <div className='sticky w-full h-[10vh] bg-white z-[100] top-0'><button className="absolute top-4 right-4" onClick={onClose}>
          <X className="w-6 h-6 text-black" />
        </button></div>
  
        {/* Navigation Content */}
        <div className="space-y-4">
          {Object.entries(NAV_ITEMS).map(([key, items]) => (
            <div key={key}>
              <button
                className="w-full flex justify-between items-center py-2 text-lg font-semibold border-b border-gray-200"
                onClick={() =>
                  setActiveSections((prev) =>
                    prev.includes(key)
                      ? prev.filter((section) => section !== key) // Collapse section
                      : [...prev, key] // Expand section
                  )
                }
              >
                {key}
                <span className="text-gray-500">{activeSections.includes(key) ? "▲" : "▼"}</span>
              </button>
  
              {activeSections.includes(key) && (
                <div className="pl-4 mt-2 space-y-2">
                  {items.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block py-2 text-gray-700 hover:text-black transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
  
          {/* Standalone Links */}
          <Link href="/how-it-works" className="block py-2 text-lg font-semibold">
            How it Works
          </Link>
          <Link href="/resources" className="block py-2 text-lg font-semibold">
            Resources
          </Link>
  
          {/* Get Started Button */}
          <Link
            href="/get-started"
            className="block w-full bg-red-500 text-white text-center px-6 py-3 rounded-full hover:bg-red-600 transition-colors mt-6"
          >
            Get Started
          </Link>
        </div>
      </div>
    );
  };
  
const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!logoRef.current) return
    
    const ctx = gsap.context(() => {
      // Set initial opacity to 1
      gsap.set(logoRef.current, { opacity: 1 });
      
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top -=80px",
        end: "+=120px",
        onUpdate: (self) => {
          gsap.to(logoRef.current, {
            opacity: self.progress ? 0 : 1,
            duration: 0.2,
            ease: "power2.out",
            immediateRender: false
          });
        }
      });
    });
    
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="w-full bg-[#0B3B25] text-white text-center py-5 text-lg">
        SupportNinja is hiring! Apply through our Jobs Board.
        <Link href="#" className="underline ml-1">Find Open Positions Today</Link>
      </div>
      
      <div ref={containerRef} className="w-full font-semibold sticky top-0 z-50">
        <nav className="container mx-auto px-[3vw] lg:px-[10vw] py-4 relative top-0">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/" className="flex items-center">
              <Image
                ref={logoRef}
                src={logo} 
                alt="SupportNinja Logo" 
                width={150} 
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            <DesktopNav  />
            
            <Link 
              href="/get-started" 
              className="bg-[#0B3B25] ml-10 hidden lg:block text-white px-6 py-2 rounded-full hover:bg-[#0d4b2e] transition-colors"
            >
              Get Started
            </Link>

            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </>
  )
}

export default NavBar