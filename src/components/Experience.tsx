import Education from "./Education"

const Experience = () => {
    const Toshal = "Engineered and managed scalable server-side applications utilizing the Node.js and Express.js frameworks efficiently. Collaborated with cross-functional teams to design and implement RESTful APIs, enhancing communication between frontend and backend systems.";
    const DA = "I am currently immersed in an enriching Data Analyst internship, where I'm actively refining my analytical prowess and gaining invaluable insights into the dynamic field of data science."
    return (
    <>
      <h1 className='text-slate-800  text-3xl md:text-center text-center md:text-4xl primary capitalize font-bold  md:py-3 py-2 my-7  '>
             Experience
        </h1>
        
        <div
        className={`md:w-[80vw] w-[100vw] m-auto  transition-all `}
      >
        <div
          className={` md:border-r-2 md:border-l-0 gradient-border border-l-2  border-slate-800 z-50 md:w-[50%] w-[90%] md:m-0 m-auto flex md:justify-center md:items-center flex-col `}
        >
                  <Education seq={1} classLR="md:text-right" class="left" title="Backend Developer (Node.js)" timeline="jan 2024 - Apr 2024" desc={Toshal}/>
                  <Education seq={2} classLR="md:text-left"  class="right" title="Data Analyst" timeline="May 2024 - Present" desc={DA}/>
        </div>
        </div>     
    </>
  )
}

export default Experience