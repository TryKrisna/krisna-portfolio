import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      {/* <GiSkills /> */}
      <Title text="Skills" icon={<></>} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Private Blockchain"
          link="https://hyperledger-fabric.readthedocs.io/en/release-2.5/whatis.html#hyperledger-fabric"
        />
        <SkillsInput
          title="Hyperledger Fabric"
          link="https://hyperledger-fabric.readthedocs.io/en/release-2.5/whatis.html#hyperledger-fabric"
        />
        <SkillsInput
          title="Smart Contract"
          link="https://go.dev/"
        />
        <SkillsInput
          title="Go"
          link="https://go.dev/"
        />
        <SkillsInput
          title="Java SDK"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />

        <SkillsInput
          title="Spring Boot"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />

        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        {/* <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        /> */}
        {/* <SkillsInput title="Expressjs" link="https://expressjs.com/" /> */}
        {/* <SkillsInput title="MongoDB" link="https://www.mongodb.com/" /> */}
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="UI Design" link="https://www.figma.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
      </div>
    </div>
  );
};

export default Skills;
