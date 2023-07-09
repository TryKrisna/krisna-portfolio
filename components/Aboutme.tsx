import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      {/* <SiInformatica /> */}
      <Title text="About Me" icon={<></>} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        Since I was a scholarship student at the Korean Software HRD Center. When I study a full-stack development course, I am a backend developer focused on Spring Boot, and on the front-end, I am doing it with React, and I know UX and UI. For an advanced course, I am studying a blockchain development course that focuses on private blockchains using Hyperledger Fabric. Role in the project: I am a chaincode/smartcontract developer, support infra setup, and write API gateway connections to the Blochain API.
        
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
