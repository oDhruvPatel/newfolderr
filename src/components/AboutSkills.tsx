
import Skill from "./Skill"
import { BsWindowDock } from "react-icons/bs";
import { FaServer } from "react-icons/fa";  
import { FaLightbulb } from "react-icons/fa";

const Frontendskills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind css', 'BootStrap'];
const Backendskills = ['Node.js', 'Django', 'Express.js', 'Mongodb', 'mysql', 'Postgres sql']
const OtherSkills = ['Git', 'GitHub', 'Python', 'Java', 'c', 'c++', 'AI', 'ML']


const AboutSkills = () => {

    
     

  return (
    <>
       <h1 className='text-slate-800 text-3xl text-center md:text-4xl primary capitalize font-bold  md:py-3 py-2 my-4 '>
             Skills
        </h1>
            <div className='flex justify-evenly md:flex-row flex-col flex-wrap'>
            <Skill list={Frontendskills} title='Frontend' icon={<BsWindowDock/>} bg='bg-gradient-to-r from-indigo-200 to-pink-200 hover:scale-2'/>
            <Skill list={Backendskills} title='Backend' icon={<FaServer/>} bg='bg-gradient-to-r from-purple-200 to-indigo-200'/>
            <Skill list={OtherSkills} title='Others' icon={<FaLightbulb/>} bg='bg-gradient-to-r from-rose-200 to-purple-200'/>
           
            </div>
    </>
  )
}

export default AboutSkills