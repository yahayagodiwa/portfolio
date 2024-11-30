const roles = [
  {
    title: "Frontend Developer",
    description: "I’m a passionate Frontend Developer with 3 years of experience working with modern technologies like React.js, JavaScript, and Tailwind CSS.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    icon: <FaReact  className='size-16 text-[#4FD1C5]'/>,
    iconColor: "#4FD1C5",
    background: "bg-gradient-to-l from-[#0c35426b] to-inherit hover:bg-[#A5D7E86B]",
    padding: "p-4 rounded-xl"
  },
  {
    title: "WordPress Web Designer",
    description: "With 5+ years of experience in WordPress, I design, develop, and maintain high-quality websites. I focus on custom design with Elementor, and SEO optimization to ensure your site is fast, secure, and search-engine friendly.",
    technologies: ["Elementor", "SEO optimization", "Resposive Design"],
    icon: <FaWordpress className='size-20 text-[#4FD1C5]'/>,
    iconColor: "#4FD1C5",
    background: "bg-gradient-to-l from-[#0c35426b] to-inherit hover:bg-[#A5D7E86B]",
    padding: "p-4 rounded-xl my-8 to-[#59739e]"
  },
  {
    title: "SEO Specialist",
    description: "I am an experienced SEO specialist, with a deep understanding of on-page and off-page SEO strategies. I work to optimize websites to rank higher in search engines and drive organic traffic.",
    technologies: ["On-page SEO", "Off-page SEO", "Technical SEO"],
    icon:  <TbSeo className='size-20 text-[#4FD1C5]'/> ,
    iconColor: "#4FD1C5",
    background: "bg-gradient-to-l from-[#0c35426b] to-inherit hover:bg-[#A5D7E86B]",
    padding: "p-4 rounded-xl"
  }
];


import { FaReact, FaWordpress } from 'react-icons/fa'
import dev from '../assets/dev1.png'
import { TbSeo } from 'react-icons/tb'
export const About = () => {
  return (
    <section className='mx-1
     md:mx-32 p-8 md:p-16 rounded-xl text-white flex flex-col md:flex-row bg-[#1E293B] mb-20' id='about'>
        <div className='w-[80vw]'>
            <h2 className='text-[#A0AEC0] text-2xl font-bold'>About</h2>
            <img src={dev} alt="Yahya Godiwa" className='h-80 '/>
        </div>

        <div>
        
          {roles.map((role, index) => {
            return <div className='shadow-2xl bg-gradient-to-l from-[#0c35426b] text-center md:text-left to-inherit
            hover:bg-[#A5D7E86B] mb-3 p-4 rounded-xl' key={index}> 
            <h2 className='text-xl font-semibold md:pl-10'>{role.title}</h2>
            <div className='flex flex-col md:flex-row  items-center gap-5'>
            {role.icon}
           
         <p>{role.description} 
            <span className="font-bold"> {role.technologies[0]}</span>, <span className="font-bold"> {role.technologies[1]} </span>, 
             and <span className="font-bold">{role.technologies[2]}</span>.</p>
        </div>
        </div>
          })}
       
   




{/* <div className='shadow-2xl bg-gradient-to-l from-[#0c35426b] to-inherit
        hover:bg-[#A5D7E86B] my-8 to-[#59739e] p-4 rounded-xl'>
        <h2 className='text-xl font-semibold pl-12'>WordPress Web Designer</h2>
        <div className='flex items-center gap-5'>

       <FaWordpress className='size-20 text-[#4FD1C5]'/>
     <p>With 5+ years of experience in WordPress, I design, develop, 
        and maintain high-quality websites. I focus on custom design 
        <span className="font-bold"> with elementor, </span> and 
            <span className="font-bold"> SEO optimization </span> 
     to ensure your site is fast, secure, and search-engine friendly.</p>
    </div>
   

</div>

<div className='shadow-2xl bg-gradient-to-l from-[#0c35426b] to-inherit
        hover:bg-[#A5D7E86B] p-4 rounded-xl'>
        <h2 className='text-xl font-semibold pl-14'>SEO Specialist</h2>
        <div className='flex items-center gap-5'>
       <TbSeo className='size-20 text-[#4FD1C5]'/> 
     <p>I am an experienced SEO specialist, with a deep 
        understanding of <span className='font-bold'>on-page</span> and <span className='font-bold'>off-page</span> SEO strategies. 
        I work to optimize websites to rank higher in search engines and drive organic traffic. 
        </p>
    </div>
   

</div> */}

        </div>
    </section>
  )
}
