import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import storyMe from "../public/img/projects/storyme.png";
import healthChain from "../public/img/projects/healthChain.png";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      {/* <FaProjectDiagram /> */}
      <Title text="Projects" icon={<></>} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        <ProjectCard
          img={storyMe.src}
          title="StoryMe"
          des="Reading Every time every where only one click"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCard
          img={healthChain.src}
          title="HealthChain"
          des="Build with private blockchain for secure patient data"
          link="https://reactbd.com/"
        />

      </div>
    </div>
  );
};

export default Projects;
