import Image from "next/image";
// import React from "react";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
const Footer = () => {
  const [shadow, setShadow] = useState(false);


  return (
    // bg-blue-100
    <div 
    className='w-full h-6 shadow-xl z-[100] ease-in-out duration-300 0'
    >
      <div className="bg-base dark:bg-slate-600 sm:px-4">

          <div className="flex space-x-2 dark:text-gray-400">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <div>All rights reserved. </div>
          </div>

      </div>
 
    </div>
  );
};
export default Footer;
