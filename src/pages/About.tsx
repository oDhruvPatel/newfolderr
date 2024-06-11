
import AboutEdu from '../components/AboutEdu';
import { AboutMe } from '../components/AboutMe';
import AboutSkills from '../components/AboutSkills';
import Experience from '../components/Experience';


const About = () => {

  

    return (
    <>
      <div className="md:w-[80vw] m-auto md:mt-9 mt-7" >
         
         <AboutMe/>
         <AboutSkills/>
         <AboutEdu/>
         <Experience/>
            

      </div>
    </>
  );
};

export default About;
