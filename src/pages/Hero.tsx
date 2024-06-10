import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { gsap } from "gsap";
import Button from "../components/Button";

const TextMovingOnScroll: React.FC = () => {
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);
  const hero = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
       
      gsap.to(titleRef1.current, {
        x:-(scrollY * 0.9),
        duration:0.1    
      })

      gsap.to(titleRef2.current, {
        x: scrollY * 0.4,
        ease: "power3.out",
        duration: 0.3,
      });

      // gsap.to(hero.current,{
      //   y:`0px`
      // } );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100vw] flex my-7 md:my-20" id="Home" >
      <div className="w-[100vw] md:w-[80vw] m-auto overflow-x-hidden">
        <h1
          ref={titleRef1}
          className="text-4xl md:text-5xl secondary md:font-light font-light w-full pt-9 px-2 md:text-center"
        >
          Hello there!
        </h1>
        <div className="w-ful border-b-2 border-t-2"> 
        <h1
          ref={titleRef2}
          className="w-full  md:text-center text-6xl md:text-9xl uppercase md:font-bold font-semibold  py-7 primary px-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
        >
          I am Dhruv Patel
        </h1>
        </div>
        <h1
          ref={titleRef3}
          className="text-slate-800 w-full md:text-center text-3xl md:text-5xl font-semibold mt-4 primary px-2"
        >
          a Software Developer
        </h1>

        <div className="w-full flex flex-col items-center justify-center md:flex-row my-9 px-2">
          <Button
            title="Checkout my work"
            icon={<MdArrowOutward />}
            bg="bg-gradient-to-r focus:from-white focus:to-white from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white"
          />
          <Button
            title="Download resume"
            icon={<GoDownload />}
            bg="bg-gradient-to-r from-cyan-400 to-blue-500 focus:from-white focus:to-white text-white hover:from-blue-500 hover:to-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TextMovingOnScroll;
