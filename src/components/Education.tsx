const Education = (props: {title:string, timeline:string, desc:string, class:string, seq:number}) => {
  return (
    <>
    
    <div className={` md:w-[80vw] w-[100vw] m-auto bg-white transition-all hover:scale-105`}>
      <div className={`${props.class} md:w-[50%] w-[90%] md:m-0 m-auto  bg-white flex justify-center items-center flex-col `}> 
         <div className="md:w-[98%] w-full md:text-right text-left text-lg font-medium px-4 pt-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700">#{props.seq}</div>
         <div className={`md:my-0 md:mx-0 mb-4 mx-auto bg-white rounded-xl p-4 md:w-[98%] w-full shadow-md border primary view` }>
         <h1 className="title md:text-lg text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 "> {props.title} </h1> 
          <h3 className="md:text-sm my-1  font-medium">  {props.timeline}</h3>
          <h6 className=" md:text-sm text-xs"> {props.desc}</h6>
         </div>
    </div>
    </div>
    </>
  )
}

export default Education