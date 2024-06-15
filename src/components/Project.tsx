

const Project = (props: {title:string, image:string, desc:string, tech:string[]}) => {
  return (
    <>
    
      <div className="bg-[#191e24]/70 backdrop-blur-lg view md:w-[30%] h-full w-[90%] md:m-0 m-auto rounded-xl md:px-0 shadow-md  overflow-hidden my-2 md:mx-4 md:my-2 hover:scale-105 transition-all hover:cursor-pointer" onClick={()=>{console.log(props.title)}}>
     
            <div className="image md:h-48 h-36 overflow-hidden "> <img src={props.image} alt="" /> </div>
            <div className="title px-3 pt-2 primary font-semibold md:text-lg text-md text-white my-1">  {props.title}  </div>
            
            <div className="text-[#adb4c3] desc primary px-3  md:text-sm text-xs"> {props.desc} </div>
            <div className="tech px-3 py-1"> 
              <ul className="flex flex-row flex-wrap">
               {props.tech.map((item, idx)=>(
                 <li key={idx} className="primary px-3 py-1  font-medium text-xs flex justify-center items-center bg-white/5 text-white rounded-full mr-2 opacity-50 my-2 lowercase">{item}</li>
               ))}
              </ul> </div>
      </div>
    </>
  )
}

export default Project