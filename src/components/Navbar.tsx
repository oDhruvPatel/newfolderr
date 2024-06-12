import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5"

const Navbar = (props: {link:string[]}) => {
    const [navStatus, setnavStatus] = useState(false);
    
    const handleNav = ()=>{
        setnavStatus(!navStatus);
    }
   
    const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`transition-shadow ${shadow ? 'shadow-md border-b  md:shadow-purple-400/40 shadow-purple-400/30' : ''} navbar w-[100vw] md:w-[100vw] m-auto sticky top-0 z-50 bg-white py-4 md:flex flex`}>
      <ul className="md:w-[80%] w-[100%] lg:flex hidden px-7">
  {props.link.map((item, idx) => (
    <li
      key={idx}
      className="text-slate-800 primary uppercase font-base text-lg flex justify-center items-center mx-6 cursor-pointer hover:text-indigo-600"
    >
      <a href={`#${item}`}>{item}</a>
    </li>
  ))}
</ul>

     
        <ul className="w-[70%] lg:hidden block">
            
            <li onClick={handleNav} className="primary uppercase md:text-4xl text-4xl mx-6 cursor-pointer font-extralight">
                {!navStatus && <CgMenuLeft/>}
                {navStatus && <IoClose/>}
                
                </li>
            </ul>


         <ul className="flex   flex-row px-7 justify-evenl">
               <li className="text-slate-800 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-700"><a href=""><FaLinkedin/></a></li>
               <li className="text-slate-800 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-500"><a href="https://github.com/oDhruvPatel/oDhruvPatel/blob/main/README.md"><FaGithub/></a></li>
               <li className="text-slate-800 md:text-4xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-400"><a href=""><FaTwitter/></a></li>
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