const Education = (props: {title:string, timeline:string, desc:string, class:string}) => {
  return (
    <div className={` md:w-[80vw] w-[100vw] m-auto bg-white`}>
      <div className={`${props.class} md:w-[50%] w-[90%]  bg-white flex justify-center items-center flex-col `}> 
         <div className={` bg-white rounded-xl p-4 md:w-[80%] w-full shadow-md border primary view` }>
         <h1 className="title text-lg font-semibold"> {props.title} </h1> 
          <h3 className="">  {props.timeline}</h3>
          <h6 className=""> {props.desc}</h6>
         </div>
    </div>
    </div>
  )
}

export default Education