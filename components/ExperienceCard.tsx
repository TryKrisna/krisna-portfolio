import { ReactNode } from "react";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr, SiGooglecalendar } from "react-icons/si";
import { MdCalendarToday } from "react-icons/md";
import Image from "next/image";
interface Props {
  title: string;
  subTitle: string;
  years: string;
  icon: string;
  // icon: ReactNode;

}

const ExperienceCard = ({ title, subTitle, years, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full flex items-center justify-center ">
        <span className="">
        <Image
          className="object-cover"

          width={350}
          height={350}
          src={icon}
          alt="Amazonclone"
        />
          {/* {icon} */}
          </span>
      </span>
      <div className="items-center justify-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>

        <div className="flex items-center gap-4 text-2xl group">
          <span className="text-sm"><MdCalendarToday /></span>
          <p className="text-sm tracking-wide text-gray-400">
          {years}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
