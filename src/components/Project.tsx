import { ReactElement, useState } from "react";

const Project = (props: { title: string; image: ReactElement; desc: string; tech: string[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div
        id="card-links"
        className="card-links border border-white/10 backdrop-blur-lg view md:w-[30%] h-full w-[90%] md:m-0 m-auto rounded-xl md:px-0 shadow-md overflow-hidden  transition-all hover:cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          console.log(props.title);
        }}
      >
        <div className={`try z-50 transition-all duration-300 overflow-hidden w-full bg-black absolute bottom-0 ${isHovered ? "h-full" : "h-0"}`}>
           <div className="w-full h-full flex justify-center items-center">
             <button className="px-4 py-2 text-xl  text-white"><a href="#">Github</a></button>
             <button className="px-4 py-2 text-xl   text-white"><a href="#">Live</a></button>
           </div>
        </div>
        
        <div className="title px-3 pt-2 primary font-semibold md:text-lg text-md text-white my-1">
          {props.title}
        </div>
        <div className="text-white/50 desc primary px-3 md:text-sm text-xs">{props.desc}</div>
      
        <div className="tech px-3 py-1">
          <ul className="flex flex-row flex-wrap">
            {props.tech.map((item, idx) => (
              <li
                key={idx}
                className="primary px-3 py-1 font-medium text-xs flex justify-center items-center bg-white/5 text-white rounded-full mr-2 opacity-50 my-2 lowercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Project;
