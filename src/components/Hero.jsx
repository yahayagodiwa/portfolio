import profile from '../assets/profile.png'
import  '../index.css'
export const Hero = () => {
  return (
 <main className="text-white text-center md:text-left px-5 md:px-32 flex flex-col-reverse md:flex-row justify-between items-center py-20">
    <div>
        <h1 className='text-[50px] font-semibold'>Hi, I am Yahya <span className='text-[#FF6347]'>Godiwa</span></h1>
        <p className='w-full md:w-[40vw] py-6 text-lg'>A passionate frontend developer with 3 years of experience building dynamic, 
          responsive websites using JavaScript and React. I specialize in creating seamless user experiences and scalable web applications. 
          Let's bring your ideas to life!</p>
        <button className='bg-[#FF6347] hover:bg-[#4FD1C5] px-6 py-4 rounded-xl' ><a href='#contact'>Contact me</a></button>
    </div>

    
    <div className='relative'>
        <div className='rounded-full border-4 border-transparent animate-rotate-border absolute inset-0'></div>

        <div className='rounded-full overflow-hidden'>
          <img src={profile} alt="Yahya" className='h-80 object-cover' />
        </div>
      </div>
 </main>
  )
}
