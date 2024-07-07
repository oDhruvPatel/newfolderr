const Education = (props: {
  title: string;
  timeline: string;
  desc: string;
  class: string;
  seq: number;
  classLR:string;
  dotLR:string;
}) => {
  return (
    <>
      <div
          className={`${props.class}   md:m-0 m-auto flex md:justify-center md:items-center flex-col `}
        >
          <div className={`${props.classLR}  md:w-[100%] pl-1 w-full text-left text-lg font-base  text-indigo-500`}>
            <div className={`${props.dotLR} w-4 h-4 bg-[#1a2026] border-2  border-indigo-400 absolute rounded-full`}></div>
          </div>
          <div
            className={`md:my-0 md:mx-0 mb-4 border border-white/5 bb bg-black rounded-xl p-4 md:w-[90%] w-[96%] ml-3 md:ml-0 shadow-md  primary view transition-all hover:scale-105`}
          >
            <h1 className="title md:text-lg text-lg font-semibold text-blue-500 ">
              {" "}
              {props.title}{" "}
            </h1>
            <h3 className="md:text-sm text-sm my-1 font-medium text-white"> {props.timeline}</h3>
            <h6 className=" md:text-sm text-xs text-[#adb4c3]"> {props.desc}</h6>
          </div>
          </div>
        
    </>
  );
};

export default Education;
