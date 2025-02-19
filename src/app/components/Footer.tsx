import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from '../../../public/outsourceNinja.svg'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-screen flex flex-col justify-between py-5 px-[3vw] md:px-[10vw]">
      <div className='w-full flex flex-col h-1/5 relative justify-between  mb-4'>
       <div className='w-full flex justify-between items-center'> <Image src={Logo} width={200} height={100} className="h-8 w-auto mb-4 lg:mb-0" alt=''/>
        <Link 
          href="/get-started" 
          className="bg-[#0B3B25] hidden md:block text-white px-6 py-2 rounded-full hover:bg-[#0d4b2e] transition-colors"
        >
          Get Started
        </Link></div>
        <div className='h-0.5 bg-black w-full absolute  bottom-0'/>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2   md:grid-cols-6 gap-4">
          <div>
            <h3 className="font-bold mb-2">Solutions</h3>
            <ul className="space-y-1 text-sm font-bold">
              <li>Customer Experience</li>
              <li>Customer Conversion</li>
              <li>Customer Onboarding</li>
              <li>Customer Support</li>
              <li>Technical Customer Support</li>
              <li>Customer Renewals</li>
              <li>Content Moderation</li>
              <li>Data Processing</li>
              <li>Finance & Accounting</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Industries</h3>
            <ul className="space-y-1 text-sm font-bold">
              <li>SaaS</li>
              <li>AI</li>
              <li>Ecommerce</li>
              <li>Healthcare</li>
              <li>Supply Chain & Logistics</li>
              <li>Fintech</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-1 text-sm  font-bold">
              <li>Resources</li>
              <li>FAQs</li>
              <li>Glossary</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1 text-sm font-bold">
              <li>How it Works</li>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow</h3>
            <ul className="space-y-1 text-sm font-bold">
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">
        <div>
          <p>&copy; {new Date().getFullYear()} OutsourceNinja. All rights reserved.</p>
        </div>
        <div>
          <p>Designed and built by <a href="https://www.outsourceNinja.com" className="text-blue-500">OutsourceNinja</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
