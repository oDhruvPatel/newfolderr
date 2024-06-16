import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = (props: { link: string[] }) => {
  const [navStatus, setNavStatus] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNavStatus(!navStatus);
  };

  return (
    <>
      <nav
        className={`transition-shadow ${
          shadow ? "bg-[#1d232b]/70 backdrop-blur-md" : ""
        } navbar w-full md:w-full m-auto sticky top-0 z-50 py-4 md:flex flex justify-center`}
      >
        <ul className="md:w-8/12 w-full lg:flex hidden px-7 ">
          {props.link.map((item, idx) => (
            <li
              key={idx}
              className="text-gray-300 primary capitalize font-base text-lg flex justify-center items-center mx-6 cursor-pointer hover:text-purple-400"
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <ul className="w-full lg:hidden block ">
          <li onClick={handleNav} className="primary uppercase md:text-4xl text-4xl mx-6 cursor-pointer font-extralight">
            {!navStatus && <CgMenuLeft className="text-white"/>}
            {navStatus && <IoClose className="text-white"/>}
          </li>
        </ul>

        <ul className="flex flex-row px-7 justify-evenly ">
          <li className="text-gray-300 md:text-3xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-700">
            <a href="https://www.linkedin.com/in/dhruv-patel-5a658a21b/">
              <FaLinkedin />
            </a>
          </li>
          <li className="text-gray-300 md:text-3xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-500">
            <a href="https://github.com/oDhruvPatel/oDhruvPatel/blob/main/README.md">
              <FaGithub />
            </a>
          </li>
          <li className="text-gray-300 md:text-3xl flex justify-center items-center text-3xl mx-4 cursor-pointer hover:text-indigo-400">
            <a href="https://x.com/Dhruv_2723">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </nav>
      {navStatus && (
        <ul className="drop shadow-md md:w-8/12 w-full flex flex-col justify-center items-center fixed bg-white z-50">
          {props.link.map((item, idx) => (
            <li
              key={idx}
              className="text-slate-800 primary uppercase font-medium text-xl flex justify-center items-center mx-6 cursor-pointer hover:border-b-2 hover:border-b-black py-2 my-2"
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
