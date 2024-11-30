const projects = [
    {
      title: "Country Search",
      description: "This is a project for country search. You can easily get any country info by just the name.",
      image: country,
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      links: {
        demo: "https://countries-search-js.vercel.app/",  
        github: "#" 
      }
    },
    {
      title: "Dictionary App",
      description: "A dictionary app that allows to search any english word and get meeaning, pronouciation, synonyms etc.",
      image: dictionary, 
      technologies: ["Javascript", "Tailwind CSS", "API"],
      links: {
        demo: "https://dictionary-js-silk.vercel.app/",  
        github: "#"
      }
    },
    {
      title: "Restuarant Menu",
      description: "A restuarant Menu that allows to filter foods base on category",
      image: menu, 
      technologies: ["HTML", "CSS", "JavaScript"],
      links: {
        demo: "https://food-menu-js.vercel.app/",  
        github: "#" 
      }
    },
    {
      title: "Color flipper",
      description: "a color flipper that generage random color for Hex or Rgb on each click. ",
      image: flipper, 
      technologies: ["HTML", "CSS", "JavaScript"],
      links: {
        demo: "https://food-menu-js.vercel.app/",  
        github: "#" 
      }
    }
  ];
  

import country from '../assets/Countries.png'
import dictionary from '../assets/dictionary.png'
import menu from '../assets/food-menu.png'

import flipper from '../assets/flipper.png'


export const Projects = () => {
  return (
    <>
       
       <h2 className='text-[#A0AEC0] text-2xl font-bold pb-5 mx-32'>Projects</h2>
          <div className="px-5 md:px-32 text-white gap-5 flex flex-col md:flex-row 
          justify-center items-center mb-20" id='projects'>
        
        {projects.map((project, index)=> {
           return <div className='bg-[#20324e] rounded-xl p-8 flex flex-col text-center md:text-left justify-center 
           w-80 shadow-2xl' key={index}>
                <img src={project.image} alt="godiwa" className='h-50'/>
                <h2 className='text-[20px] font-semibold'>{project.title}</h2>
                <p>{project.description}</p>
                    <div className='flex gap-3 justify-center my-3'>
                        <button className='px-3 py-1 bg-[#131d2c] rounded-xl'> {project.technologies[0]} </button>
                        <button className='px-3 py-1 bg-[#131d2c] rounded-xl'>{project.technologies[1]}</button>
                        <button className='px-3 py-1 bg-[#131d2c] rounded-xl'>{project.technologies[2]}</button>
                    </div>
                    <div className='flex gap-3 justify-center '>
                        <button className='px-3 py-1 bg-slate-500 rounded-xl'> Link{project.links[0]} </button>
                        <button className='px-3 py-1 bg-slate-500 rounded-xl'>Github{project.links[0]}</button>
                    </div>
            </div>
    
})}
</div>
   
    </>
  )
}