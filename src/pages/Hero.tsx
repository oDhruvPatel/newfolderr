import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { gsap } from "gsap";
import Button from "../components/Button";

const TextMovingOnScroll: React.FC = () => {
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);


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
    <div className="w-[100vw] flex my-7 md:mt-24 mt-24 md:my-20" id="Home" >
      <div className="w-[100vw] md:w-[80vw] m-auto overflow-x-hidden">
        <h1
          ref={titleRef1}
          className="text-[#adb4c3] text-4xl text-center md:text-5xl primary md:font-light font-light w-full pt-9 px-2 md:text-center"
        >
          Hey there! 👋
        </h1>
        <div className="w-ful"> 
        <h1
          ref={titleRef2}
          className="w-full my-3 text-center text-5xl md:text-8xl  md:font-bold font-semibold  primary px-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 glow"
        >
          I am Dhruv Patel
        </h1>
        </div>
        <h1
          ref={titleRef3}
          className="text-[white] my-4 w-full text-center text-3xl md:text-5xl font-semibold  primary px-2"
        >
          a Software Developer 🚀
        </h1>

        <div className="w-full flex flex-col items-center justify-center md:flex-row my-9 px-2">
          <Button
          linkTo="Projects"
            title="Checkout my work"
            icon={<MdArrowOutward />}
            bg="bg-blue-500 hover:from-pink-500 hover:to-indigo-500 text-white"
          />
          <Button
            download="../src/assets/DhruvPatel.pdf"
            title="Download resume"
            icon={<GoDownload />}
            bg="bg-blue-500 focus:from-white focus:to-white text-white hover:from-blue-500 hover:to-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TextMovingOnScroll;
