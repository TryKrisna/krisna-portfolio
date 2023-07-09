import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr,SiGooglecalendar } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import ProfileImg from "../public/img/1myprofile.png";
import Rupp from "../public/img/educations/rupp.png";
import Hrd from "../public/img/educations/hrd.png";
import Pcu from "../public/img/educations/pcu.png";
import OneSala from "../public/img/educations/onesala.png";

const Experience = () => {
  return (
    <div className="wrapper">
      {/* <MdWork /> */}
      <Title text="Education" icon={<></>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Royal University Of Phnom Penh"
          subTitle="Bachelor of Computer Science "
          years="2019 - 2023"
          icon={Rupp.src}
        />
        <ExperienceCard
          title="Korean Software HRD Center"
          subTitle="Blockchain & Full Stack Development"
          years=" 2022 - 2023"
          icon={Hrd.src}
        />
        <ExperienceCard
          title="Phanha Cheit University"
          subTitle="English Short Course"
          years=" 2019 - 2020"
          icon={Pcu.src}
        />

        <ExperienceCard
          title="One Sala App"
          subTitle="Web Development Course"
          years="2019 - 2020"
          icon={OneSala.src}
        />
      </div>
    </div>
  );
};

export default Experience;
