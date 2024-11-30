import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

export const Footer = () => {
    // const currentYear = new Date().getFullYear()
  return (
    <div className="bg-[#368078]" id="contact">
      <h2 className="text-[#A0AEC0] mx-32 text-2xl font-bold pb-3 "> Contact </h2>
    <div className="px-5 md:px-52 text-center md:text-left text-white flex flex-col md:flex-row justify-between py-3">
      <div>
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p>Feel free to reach out</p>
      </div>
      <div>
<i className="flex items-center justify-center md:justify-start gap-1"> <FaLinkedin className="size-10"/> Yahya Godiwa </i>
<i className="flex items-center justify-center md:justify-start gap-1 my-3 md:my-0"><FaGithub className="size-10"/> Yahayagodiwa </i>
      <i className="flex items-center justify-center md:justify-start gap-1"> <MdMarkEmailUnread className="size-10"/>prodigydigitalhub@gmail.com</i>
      </div>
    </div>
    <span className="text-white text-center flex justify-center pb-2">&copy; {new Date().getFullYear()} Yahya Godiwa</span>
    </div>
  );
};
