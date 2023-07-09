import Image from "next/image";
interface Props {
  title: string;
  des: string;
  link: string;
  img: string;
}

const ProjectCard = ({ title,des, link, img }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 border-[1px] border-gray-200 overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
          width={350}
          height={350}
          src={img}
          alt="Amazonclone"
        />
        <div className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-gray-400 text-white text-center  duration-300">
         <p className="font-semibold">{title}</p> 
          <p className="text-sm px-9 text-left">{des}</p>
        </div>
        
      </div>
    </a>
  );
};

export default ProjectCard;
