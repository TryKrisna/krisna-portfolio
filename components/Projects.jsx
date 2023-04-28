import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import Image from 'next/image'
import projects from '../data/projects'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <h2 className='w-100 text-center py-4'>Project</h2>
        {/* <h2 className='py-4'>What I&apos;ve Built</h2> */}
        <div className='grid md:grid-cols-2 gap-8'>
            {
              projects.map((item,i)=>(
               
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image width='500' height='500' max-height='500' className='rounded-xl group-hover:opacity-10' src={item.image} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{item?.title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{item?.decs}</p>
        <Link href="">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
    </div>
           
  ))  }




          {/* <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
