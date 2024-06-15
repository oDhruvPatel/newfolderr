import { ReactElement } from "react";
    const Button = (props:{title:string, icon?:ReactElement, bg?:string, linkTo?:string, download?:string}) => {
  return (
    <>
     <div className="">
        <a href={`{${props.linkTo} && #${props.linkTo} {${props.download} && #${props.download}`} download>  <button className={`${props.bg} primary px-4 md:px-6 py-3 md:py-5 focus:text-black text-md md:text-2xl md:my-0 my-2 mr-4 focus:ring-4 font-semibold rounded-full flex`}> {props.title} {props.icon}  </button> </a>
     </div>
    </>
  )
}

export default Button