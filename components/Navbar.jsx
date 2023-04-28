import Image from "next/image";
// import React from "react";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    // bg-blue-100
    <div 
    // fixed
    className={      shadow
      ? ' w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-white'
      : ' w-full h-20 z-[100]'}
        // className="'fixed w-full h-20 shadow-xl z-[100] "
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">

      <h2 className="text-[#5651e5]">Try Krisna</h2>

        {/* <Image src="/assets/logo.png" alt="Nav Logo" width={180} height={37} /> */}
        {/* Window Nav */}
        <div>
          <ul>
            <li className="ml-10 text-sm  hover:border-b">'
            {/* text-[#069A8E]' */}
              <Link href="/"> <h2 className="text-[#5651e5]">About</h2></Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};
export default Navbar;
