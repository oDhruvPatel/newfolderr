

const Project = (props: {title:string, image:string, desc:string, tech:string[]}) => {
  return (
    <>
    
      <div className="view md:w-[30%] h-full w-[90%] md:m-0 m-auto rounded-xl md:px-0 shadow-md border overflow-hidden my-2 md:my-2 hover:scale-105 transition-all hover:cursor-pointer" onClick={()=>{console.log(props.title)}}>
     
            <div className="image md:h-48 h-36 overflow-hidden "> <img src={props.image} alt="" /> </div>
            <div className="title px-3 pt-2 primary font-semibold md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">  {props.title}  </div>
            <div className="tech px-3 py-2"> 
              <ul className="flex flex-row flex-wrap">
               {props.tech.map((item, idx)=>(
                 <li key={idx} className="primary px-3 py-1 text-black font-medium text-xs flex justify-center items-center bg-indigo-200 rounded-full mr-2 opacity-50 my-2 lowercase">{item}</li>
               ))}
              </ul> </div>
            <div className="desc primary px-3 pb-3 text-justify md:text-sm text-xs"> {props.desc} </div>
           
      </div>
    </>
  )
}

export default Project