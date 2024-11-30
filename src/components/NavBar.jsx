import { useState } from "react"
import { FiMenu } from "react-icons/fi"


export const NavBar = () => {
  const [showNav, setShowNav] = useState(true)

  const handleClick = ()=>{
    setShowNav(!showNav)
  }
  return (
    <nav className=" h-[38px] pb-14 z-10 pt-6 px-5 md:px-20 fixed top-0 left-0 right-0 w-[100%] bg-[#203350] overflow-x-hidden">
<div className=" text-white flex justify-between md:items-center ">
    <h1 className="text-xl font-bold">Yahya <span className="text-[#FF6347]">Godiwa</span> </h1>
   {/* ////////////////// */}
    <div className="">
    <FiMenu onClick={handleClick} className="md:hidden text-2xl"/>
    <ul className={`${showNav? "hidden": "flex-col text-center" } md:flex md:flex-row gap-8 md:gap-10
     md:items-center
    fixed md:static top-20 left-0  md:w-auto 
    bg-[#203350]  transition-all duration-300 w-full z-40`}>

      {/* ////////// */}
       <a href="#about"> <li className="hover:bg-[#A5D7E86B] hover:px-4 hover:rounded-lg cursor-pointer py-1">About</li></a>
        <a href="#skills"><li className="hover:bg-[#A5D7E86B] hover:px-4 hover:rounded-lg cursor-pointer py-1">Experience</li> </a>
        <a href="#skills"><li className="hover:bg-[#A5D7E86B] hover:px-4 hover:rounded-lg cursor-pointer py-1">Skills</li> </a>
       <a href="#projects"> <li className="hover:bg-[#A5D7E86B] hover:px-4 hover:rounded-lg cursor-pointer py-1">Projects</li> </a>
       <a href="#contact"> <li className="hover:bg-[#A5D7E86B] hover:px-4 hover:rounded-lg cursor-pointer py-1">Contact</li> </a>
    </ul>
    </div>
</div>
    </nav>
  )
}
