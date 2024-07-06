import Education from "./Education"

const Experience = () => {
    const Toshal = "Engineered and managed scalable server-side applications utilizing the Node.js and Express.js frameworks efficiently. Collaborated with cross-functional teams to design and implement RESTful APIs, enhancing communication between frontend and backend systems.";
    const DA = "I am currently immersed in an enriching Data Analyst internship, where I'm actively refining my analytical prowess and gaining invaluable insights into the dynamic field of data science."
    return (
    <>
      <h1 className="text-3xl md:text-center text-center md:text-5xl primary  font-bold  md:py-3 py-2  text-white/75">
      Experience
             {/* <svg className="h-full w-5 md:w-6 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg> */}
        </h1>
        
        <div
        className={`md:w-[80vw] w-[100vw] m-auto  transition-all my-12`}
      >
        <div
          className={`view1 md:border-r-4 md:border-l-0 gradient-border border-l-4  border-slate-800 z-50 md:w-[50%] w-[90%] md:m-0 m-auto flex md:justify-center md:items-center flex-col `}
        >
                  
                  <Education seq={1} classLR="md:text-left md:pl-1"  dotLR="md:-left-[5px] md:right-auto -left-[-3.5%]" class="right" title="Data Analyst" timeline="May 2024 - Present" desc={DA}/>
                  <Education seq={2} classLR="md:text-right md:pr-1" dotLR="md:-right-[10px] md:left-auto -left-[-3.5%]" class="left" title="Backend Developer (Node.js)" timeline="jan 2024 - Apr 2024" desc={Toshal}/>
                  
        </div>
        </div>     
    </>
  )
}

export default Experience