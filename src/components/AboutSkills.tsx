
import Skill from "./Skill"
import { BsWindowDock } from "react-icons/bs";
import { FaServer } from "react-icons/fa";  
import { FaLightbulb } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaPython, FaGit, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiBootstrap, SiDjango, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiC, SiCplusplus, SiGithub, SiTensorflow, SiPytorch } from 'react-icons/si';


const FrontendSkills = [
  { name: 'HTML', icon: <FaHtml5 className="text-html text-4xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-css text-4xl" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-javascript text-4xl" /> },
  { name: 'React', icon: <FaReact className="text-react text-4xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-typescript text-4xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-tailwindcss text-4xl" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-bootstrap text-4xl" /> }
];

const BackendSkills = [
  { name: 'Node.js', icon: <FaNode className="text-node text-4xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-express text-4xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-mongodb text-4xl" /> },
  { name: 'Django', icon: <SiDjango className="text-django text-4xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-mysql text-4xl" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-postgresql text-4xl" /> }
];

const OtherSkills = [
  { name: 'Git', icon: <FaGit className="text-git text-4xl" /> },
  { name: 'GitHub', icon: <SiGithub className="text-github text-4xl" /> },
  { name: 'Java', icon: <FaJava className="text-java text-4xl" /> },
  { name: 'Python', icon: <FaPython className="text-python text-4xl" /> },
  { name: 'C', icon: <SiC className="text-c text-4xl" /> },
  { name: 'C++', icon: <SiCplusplus className="text-cplusplus text-4xl" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-tensorflow text-4xl" /> },
  { name: 'PyTorch', icon: <SiPytorch className="text-pytorch text-4xl" /> }
];

const AboutSkills = () => {

    
     

  return (
    <>
      <h1 className="text-4xl md:text-center text-center md:text-6xl primary  font-semibold  md:py-3 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
      Skills
             
          {/* <svg className="h-full w-5 ml-4 md:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg> */}
        </h1>
            <div className='flex justify-center md:flex-row flex-col flex-wrap'>
            <Skill list={FrontendSkills} title='Frontend' icon={<BsWindowDock/>} bg='bg-[#191e24]/70 backdrop-blur-lg'/>
            <Skill list={BackendSkills} title='Backend' icon={<FaServer/>} bg='bg-gradient-to-r from-purple-200 to-indigo-200'/>
            <Skill list={OtherSkills} title='Others' icon={<FaLightbulb/>} bg='bg-gradient-to-r from-rose-200 to-purple-200'/>
           
            </div>
    </>
  )
}

export default AboutSkills