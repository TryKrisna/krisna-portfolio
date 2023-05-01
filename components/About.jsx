import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/1myprofile.png';7  

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          {/* <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p> */}
          <h2 className='font-medium xl:text-3xl lg:py-2 lg:text-2xl md:text-2xl md:py-1 sm:py-0 py-0'>Who I Am</h2>
          {/* <p className='py-2 text-gray-600  xl:text-xl xl:text-orange-400 md:text-sm sm:text-blue-400 lg:text-lg  lg:text-red-300 md:text-blue-800 md:text-lg sm:text-md sm:text-pink-500'> */}
          <p className='py-2 text-gray-600  xl:text-xl md:text-sm  lg:text-lg    md:text-lg sm:text-md '>
            Since I was a scholarship student at Korean Software HRD center. When I study fullstack development course I am a backend developer focus on srping boot, and UI I am doing it with React and I know UX/UI , and for advance course I am study Blockchain development course which is focus on Private blockchain call Hyperledger fabrice. Role in project I am chaincode/smartcontract developer, support infra setup and write API gateway connet to Blochain API.
            {/* I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job. */}
          </p>
          <p className='py-2py-2 text-gray-600  xl:text-xl md:text-sm  lg:text-lg    md:text-lg sm:text-md'>
          Became a developer I think that. Best developer not just know many language but a good developer can sloved many problem and every language, Algorithum is more important than coding.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
             View my Project
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
