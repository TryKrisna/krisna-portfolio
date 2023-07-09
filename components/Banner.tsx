import Image from "next/image";
import ProfileImg from "../public/img/1myprofile.png";
import { MdWork } from "react-icons/md";

import {SiGithub,SiInstagram,SiFacebook,SiGmail} from "react-icons/si";
const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-60 h-60 rounded-full">
        <Image
          className="w-full h-full rounded-full border-[1px] border-gray-200 p-1 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-gray-700 ">Hi, I'm Krisna</h1>
        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
         I'm a Blockchain Researcher
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Private and public blockchain just the place where you need to learn, but the Consensus Mechanisms is the plase where you need to think
        </p>
        <div className='flex justify-between max-w-[330px] py-0'>
            <a
              href='https://github.com/krisnaDGC'
              target='_blank'
              rel='noreferrer'
              className="p-2"
            >
              {/* shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 */}
              <div className='rounded-full '>
                <SiGithub />
              </div>
            </a>
            <a
              href='https://www.instagram.com/krisnadev1'
              target='_blank'
              rel='noreferrer'
              className="p-2"
            >
              {/* shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 */}
              <div className='rounded-full '>
                <SiInstagram />
              </div>
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100006758477739&mibextid=ZbWKwL'
              target='_blank'
              rel='noreferrer'
              className="p-2"
            >
              {/* shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 */}
              <div className='rounded-full '>
                <SiFacebook />
              </div>
            </a>

            <a
              href='mailto:trykrisnapcu@gmail.com'
              
              rel='noreferrer'
              className="p-2"
            >
              {/* shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 */}
              <div className='rounded-full '>
                <SiGmail />
              </div>
            </a>


          </div>
      </div>
   
    </div>
  );
};

export default Banner;
