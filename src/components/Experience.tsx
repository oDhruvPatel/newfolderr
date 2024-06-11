import Education from "./Education"

const Experience = () => {
    const Toshal = "Engineered and managed scalable server-side applications utilizing the Node.js and Express.js frameworks efficiently. Collaborated with cross-functional teams to design and implement RESTful APIs, enhancing communication between frontend and backend systems.";
    const DA = "I am currently immersed in an enriching Data Analyst internship, where I'm actively refining my analytical prowess and gaining invaluable insights into the dynamic field of data science."
    return (
    <>
      <h1 className='text-slate-800  text-3xl md:text-center text-center md:text-4xl primary capitalize font-bold  md:py-3 py-2 my-7  '>
             Experience
        </h1>

                  <Education seq={1} class="left" title="Backend Developer (Node.js)" timeline="jan 2024 - Apr 2024" desc={Toshal}/>
                  <Education seq={2} class="right" title="Data Analyst" timeline="May 2024 - Present" desc={DA}/>
                 
                 
    </>
  )
}

export default Experience