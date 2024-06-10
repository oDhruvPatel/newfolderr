import { ReactElement } from "react";
    const Button = (props:{title:string, icon?:ReactElement, bg?:string}) => {
  return (
    <>
     <div className="">
          <button className={`${props.bg} primary px-4 md:px-6 py-3 md:py-5 focus:text-black text-xl md:text-4xl md:my-0 my-2 mr-4 focus:ring-4 font-semibold rounded-full flex`}> {props.title} {props.icon} </button>
     </div>
    </>
  )
}

export default Button