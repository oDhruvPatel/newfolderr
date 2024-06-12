import Education from "./Education"

const AboutEdu = () => {
  const BE = "Graduated with a B.E. in Computer Science & Engineering with AI/ML Specialization. Develoed strong foundation in Data Structures and Algoriths to solve complax problem while mastering advanced topics like neural networks, deep learning and Machine Learning algorithms."
  const DI = "Completed a comprehensive program in computer engineering, covering fundamental aspects of hardware and software. Acquired skills in programming, network administration, and system design. "
  const board = "Achieved foundational academic excellence, with a focus on science and mathematics. Developed critical thinking, problem-solving skills, and a strong work ethic that laid the groundwork for advanced studies in computer engineering and technology."
  return (
    <>

       <h1 className='text-slate-800 flex justify-center items-center text-3xl md:text-center text-center md:text-4xl primary capitalize font-bold  md:py-3 py-2 my-4 '>
             Education
             <svg className="h-full w-5 ml-4 md:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"/></svg>
        </h1>

        <div
        className={`md:w-[80vw] w-[100vw] m-auto  transition-all `}
      >
        <div
          className={`view1  md:border-r-4 md:border-l-0 border-l-4 gradient-border z-50 md:w-[50%] w-[90%] md:m-0 m-auto flex md:justify-center md:items-center flex-col `}
        >
       
                  <Education seq={1} classLR="md:text-right md:pr-1" dotLR="md:-right-[10px] md:left-auto -left-[-3.5%]" class="left" title="B.E Computer Sci. and Engg. - Spec. AI & ML" timeline="2021-2024" desc={BE}/>
                  <Education seq={2} classLR="md:text-left md:pl-1" dotLR="md:-left-[5px] md:right-auto -left-[-3.5%]" class="right" title="Diploma in Computer Engineering" timeline="2018-2021" desc={DI}/>
                  <Education seq={3} classLR="md:text-right md:pr-1" dotLR="md:-right-[10px] md:left-auto -left-[-3.5%]" class="left" title="10th Grade" timeline="2017-2018" desc={board}/>
               </div>
               </div>  
    </>
  )
}

export default AboutEdu