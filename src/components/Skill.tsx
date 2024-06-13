import { ReactElement } from "react"

const Skill = (props:{list:ReactElement[], title:string, bg:string, icon?:ReactElement}) => {
  return (
   <>
      <div className={`${props.bg} border flex flex-col my-4 md:my-4 md:m-2 md:w-[30%] w-[90%] m-auto text-black shadow-md rounded-xl p-2 `}>
            <div className="m-auto md:text-2xl text-xl pt-2 md:pt-2 text-slate-800 ">{props.icon}</div>
               <h2 className='primary text-xl font-bold m-auto h-[20%] text-slate-800 text-center my-2 capitalize'>{props.title}</h2>
                <div className='w-full flex flex-row h-[80%]'>
                    <ul className='flex flex-row justify-center py-4 w-full flex-wrap'>
                      {props.list.map((item, idx)=>(
                      <li key={idx} className={`view md:text-sm text-xs p-2 my-2 mx-2 primary bg-white hover:text-black hover:cursor-pointer hover:scale-110 before:w-[full] flex justify-center transition-all rounded-full hover:before:content-['BootStrap'] before:text-[8px] before:absolute before:bg-slate-800 before:-top-6 before:rounded-full before:px-[3px] before-w-full before:-mx-2 before:text-center before:flex  before:items-center before:text-white`}>{item}</li>
                       ))}
                   
                    </ul>

                </div>
             </div>
   </>
  )
}

export default Skill