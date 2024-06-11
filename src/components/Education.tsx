const Education = (props: {
  title: string;
  timeline: string;
  desc: string;
  class: string;
  seq: number;
  classLR:string;
}) => {
  return (
    <>
      <div
          className={`${props.class} md:m-0 m-auto flex md:justify-center md:items-center flex-col `}
        >
          <div className={`${props.classLR} md:w-[100%] w-full text-left text-lg font-medium px-4 pt-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700`}>
            #{props.seq}
          </div>
          <div
            className={` md:my-0 md:mx-0 mb-4 bg-white rounded-xl p-4 md:w-[90%] w-[96%] ml-3 md:ml-0 shadow-md border primary view transition-all hover:scale-105`}
          >
            <h1 className="title md:text-lg text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ">
              {" "}
              {props.title}{" "}
            </h1>
            <h3 className="md:text-sm text-sm my-1  font-medium"> {props.timeline}</h3>
            <h6 className=" md:text-sm text-xs"> {props.desc}</h6>
          </div>
          </div>
        
    </>
  );
};

export default Education;
