import { FaCss3, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import ProgressBar from "./Progressbar";

export const Skills = () => {
  return (
    <section className="text-white mx-5 md:mx-32 mb-20" id="skills">
      <h2 className="text-[#A0AEC0] text-2xl font-bold pb-5">
        {" "}
        Skills 
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="ml-8 md:ml-0">
        <div className="flex gap-8">
          <span className="flex flex-col justify-center items-center">
            <FaHtml5 className="size-20 text-[#FF6347]" />
            <p>HTML</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <FaCss3 className="size-20 text-yellow-200" />
            <p>CSS</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <RiTailwindCssFill
              className="size-20 
            text-[#4FD1C5]"
            />
            <p>Tailwind</p>
          </span>
        </div>

        <div className="flex gap-5 py-10">
          <span>
            <SiJavascript className="size-20 text-yellow-300" />
            <p className="text-center">Javascript</p>
          </span>
          <span>
            <FaReact className="size-20 text-[#4FD1C5]" />
            <p className="text-center">React</p>
          </span>
          <span>
            <TbSeo className="size-20 text-[#FF6347]" />
            <p className="text-center">SEO</p>
          </span>
        </div>
        <div>
          <span className="">
            <FaFigma className="size-20 text-[#4FD1C5]" />
            <p className="">Figma</p>
          </span>
        </div>
        </div>
        <div>
       
    <ProgressBar />
          
        </div>
      </div>
    </section>
  );
};
