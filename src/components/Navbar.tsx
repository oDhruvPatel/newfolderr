// import { Link, animateScroll as scroll } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


import { useState } from "react";

const Navbar = (props: {link:string[]}) => {
    const [navStatus, setnavStatus] = useState(false);
    
    const handleNav = ()=>{
        setnavStatus(!navStatus);
    }

  return (
    <>
      <nav className="w-[100vw] md:w-[80vw] m-auto sticky top-0 z-50 bg-white py-4 shadow md:flex flex">
      <ul className="md:w-[80%] w-[100%] lg:flex hidden">
  {props.link.map((item, idx) => (
    <li
      key={idx}
      className="text-slate-800 primary uppercase font-semibold text-xl flex justify-center items-center mx-6 cursor-pointer hover:border-b-2 hover:border-b-black"
    >
      <a href={`#${item}`}>{item}</a>
    </li>
  ))}
</ul>

     
        <ul className="w-[80%] lg:hidden block">
            
            <li onClick={handleNav} className="primary uppercase md:text-4xl text-4xl mx-6 cursor-pointer font-extralight">
                {!navStatus && <CgMenuLeft/>}
                {navStatus && <IoClose/>}
                
                </li>
            </ul>


         <ul className="flex px-7 text-center">
               <li className="text-slate-800 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-700"><FaLinkedin/></li>
               <li className="text-slate-800 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-500"><FaGithub/></li>
               <li className="text-slate-800 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-400"><FaTwitter/></li>
        </ul>

        

      </nav>
      {  navStatus &&
        <ul className="drop shadow-md md:w-[80%] w-screen flex flex-col justify-center items-center fixed bg-white z-50">
            {props.link.map((item, idx)=>(
                <li key={idx} className=" text-slate-800 primary uppercase font-medium text-xl flex justify-center items-center mx-6 cursor-pointer hover:border-b-2 hover:border-b-black py-2 my-2"> <a href={`#${item}`}>{item}</a> </li>
            ))}
            
        </ul>  }
    </>
  )
}

export default Navbar