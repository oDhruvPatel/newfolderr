import Education from "./Education"

const AboutEdu = () => {
  const BE = "Graduated with a B.E. in Computer Science & Engineering with AI/ML Specialization. Develoed strong foundation in Data Structures and Algoriths to solve complax problem while mastering advanced topics like neural networks, deep learning and Machine Learning algorithms."
  const DI = "Completed a comprehensive program in computer engineering, covering fundamental aspects of hardware and software. Acquired skills in programming, network administration, and system design. "
  const board = "Achieved foundational academic excellence, with a focus on science and mathematics. Developed critical thinking, problem-solving skills, and a strong work ethic that laid the groundwork for advanced studies in computer engineering and technology."
  return (
    <>

       <h1 className='text-slate-800  text-3xl md:text-center text-center md:text-4xl primary capitalize font-bold  md:py-3 py-2 my-4 '>
             Education
        </h1>

        <div
        className={`md:w-[80vw] w-[100vw] m-auto  transition-all `}
      >
        <div
          className={` md:border-r-2 md:border-l-0 border-l-2 gradient-border z-50 md:w-[50%] w-[90%] md:m-0 m-auto flex md:justify-center md:items-center flex-col `}
        >
       
                  <Education seq={1} classLR="text-right" class="left" title="B.E Computer Sci. and Engg. - Spec. AI & ML" timeline="2021-2024" desc={BE}/>
                  <Education seq={2} classLR="text-left" class="right" title="Diploma in Computer Engineering" timeline="2018-2021" desc={DI}/>
                  <Education seq={3} classLR="text-right" class="left" title="10th Grade" timeline="2017-2018" desc={board}/>
               </div>
               </div>  
    </>
  )
}

export default AboutEdu