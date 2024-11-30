import  { useState, useEffect } from 'react';

const SkillProgressBar = ({ skill, level }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress bar on page load
    const timer = setInterval(() => {
      if (progress < level) {
        setProgress((prev) => prev + 1); // Increase the progress
      } else {
        clearInterval(timer); // Stop the animation once the level is reached
      }
    }, 10); // Adjust speed of animation by changing the interval time

    return () => clearInterval(timer); // Clean up the interval when the component unmounts
  }, [progress, level]);

  return (
    <div className="">
        <h3 className="text-xl font-semibold text-white">{skill}</h3>
      <div className="md:w-[50vw] w-[80vw] h-6 bg-gray-200 rounded-lg overflow-hidden ">
      
        <div
        
          className="h-full bg-[#FF6347]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-white font-medium">
        {progress}% 
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
       
       
      <SkillProgressBar skill="HTM" level={95} />
    
      <SkillProgressBar skill="CSS" level={80} />
     
      <SkillProgressBar skill="JavaScript" level={70} />
     
      <SkillProgressBar skill="Tailwind" level={90} />
     
      <SkillProgressBar skill="React" level={65} />
      
      <SkillProgressBar skill="SEO" level={80} />
    </div>
  );
};

export default Skills;
