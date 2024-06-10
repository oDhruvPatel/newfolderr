
import Skill from "./Skill"
import { BsWindowDock } from "react-icons/bs";
import { FaServer } from "react-icons/fa";  
import { FaLightbulb } from "react-icons/fa";

const Frontendskills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind css', 'BootStrap'];
const Backendskills = ['Node.js', 'Django', 'Express.js', 'Mongodb', 'mysql', 'Postgres sql']
const OtherSkills = ['Git', 'GitHub', 'Python', 'Java', 'c', 'c++', 'Agile methodologies']


const AboutSkills = () => {

    
     

  return (
    <>
       <h1 className='text-slate-800 text-4xl md:text-3 text-center md:text-4xl primary uppercase font-semibold  md:py-3 py-2 my-4 '>
             Skills
        </h1>
            <div className='flex justify-between md:flex-row flex-col'>
            <Skill list={Frontendskills} title='Frontend' icon={<BsWindowDock/>} bg='bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 hover:scale-2'/>
            <Skill list={Backendskills} title='Backend' icon={<FaServer/>} bg='bg-gradient-to-r from-blue-200 via-rose-200 to-indigo-200'/>
            <Skill list={OtherSkills} title='Others' icon={<FaLightbulb/>} bg='bg-gradient-to-r from-rose-200 via-sky-200 to-purple-200'/>
            </div>
    </>
  )
}

export default AboutSkills