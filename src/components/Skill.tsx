import { ReactElement } from "react"
const Skill = (props:{list:string[], title:string, bg:string, icon?:ReactElement}) => {
  return (
   <>
      <div className={`${props.bg} flex flex-col my-4 md:my-7 md:m-2 md:w-[30%] w-[90%] m-auto text-black shadow-me rounded-xl p-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 hover:scale-105 transition-all`}>
            <div className="m-auto md:text-2xl text-xl py-2 md:py-3 text-slate-800">{props.icon}</div>
               <h2 className='primary text-2xl font-bold m-auto h-[20%] text-slate-800 text-center my-2 capitalize'>{props.title}</h2>
                <div className='w-full flex flex-row h-[80%]'>
                    <ul className='flex flex-row justify-center py-4 md:text-2xl text-lg w-full uppercase primary font-normal flex-wrap'>
                      {props.list.map((item, idx)=>(
                      <li key={idx} className='md:px-4 p-2 primary m-2 bg-[#fff] hover:text-black hover:cursor-pointer rounded-full md:text-lg text-sm '>{item}</li>
                       ))} 
                    </ul>
                </div>
             </div>
   </>
  )
}

export default Skill