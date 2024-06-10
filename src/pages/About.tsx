import { useEffect, useRef } from "react";
import AboutEdu from '../components/AboutEdu';
import { AboutMe } from '../components/AboutMe';
import AboutSkills from '../components/AboutSkills';
import { gsap } from "gsap";

const About = () => {

    const about =  useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
           
          gsap.to(about.current, {
            y:-(scrollY * 0.7),
            duration:0.2   
          })
    
          
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      

    return (
    <>
      <div className="md:w-[80vw] m-auto md:mt-9 mt-7 bg-white" ref={about}>
         
         <AboutMe/>
         <AboutSkills/>
         <AboutEdu/>
            

      </div>
    </>
  );
};

export default About;
