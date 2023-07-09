type Props = {
  title: string;
  link: string;
};

const SkillsInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
      {/* border-blue-800 */}
      <p className="border  px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-black hover:border-gray-400 hover:bg-gray-300 rounded-lg duration-300">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;
