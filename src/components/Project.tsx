

const Project = (props: {title:string, image:string, desc:string, tech:string[]}) => {
  return (
    <>
      <div className="md:w-[30%] h-full w-[90%] md:m-0 m-auto rounded-xl md:px-0 shadow-md border overflow-hidden my-2 md:my-2 hover:scale-105 transition-all hover:cursor-pointer" onClick={()=>{console.log(props.title)}}>
            <div className="image md:h-48 h-36 overflow-hidden "> <img src={props.image} alt="" /> </div>
            <div className="title p-2 primary font-semibold md:text-xl">  {props.title}  </div>
            <div className="tech px-2"> 
              <ul className="flex flex-row flex-wrap">
               {props.tech.map((item, idx)=>(
                 <li key={idx} className="px-2 py-1 text-black text-xs flex justify-center items-center bg-slate-400 rounded-full mr-2 opacity-50 my-2">{item}</li>
               ))}
              </ul> </div>
            <div className="desc p-2 text-justify md:text-sm text-sm"> {props.desc} </div>
           
      </div>
    </>
  )
}

export default Project