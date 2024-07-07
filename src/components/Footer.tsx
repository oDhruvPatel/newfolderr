import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <>
     <div className="w-[100vw] md:w-[100%] m-auto">
             <div className="w-full bg-black  border-t-[1px] border-t-white/5 min-h-48 flex flex-col h-full justify-center items-center">
                <div className="">
                    <ul className="w-[90%] md:w-[80%] m-auto flex justify-center">
                       { ['Home', 'Projects', 'About', 'Contact'].map((item)=>(
                               <li className="opacity-80 hover:opacity-100 px-4 py-2 md:text-lg text-white/75 hover:text-blue-500 uppercase font-light primary"><a href={`#${item}`}>{item}</a></li>
                       )) }
                    </ul>
                </div>
                <h2 className="text-white/75 my-1">Follow me on</h2>
                <div className="my-2 w-full flex flex-col">
                <ul className="flex  opacity-80 flex-row px-7 justify-evenl m-auto">
               <li className="text-white/75 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-700"><a href="https://www.linkedin.com/in/dhruv-patel-5a658a21b/"><FaLinkedin/></a></li>
               <li className="text-white/75 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-500"><a href="https://github.com/oDhruvPatel/oDhruvPatel/blob/main/README.md"><FaGithub/></a></li>
               <li className="text-white/75 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-400"><a href="https://x.com/Dhruv_2723"><FaTwitter/></a></li>
              </ul>
        <h2 className="text-white/75 opacity-80 mt-2 w-full flex justify-center">Email address : dhruvpatel2721978@gmail.com , Mobile : +91 9712306630</h2>
                
                </div>
             </div>
     </div>
    </>
  )
}

export default Footer