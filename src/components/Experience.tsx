import Education from "./Education"

const Experience = () => {
  return (
    <>
      <h1 className='text-slate-800  text-3xl md:text-center text-center md:text-4xl primary capitalize font-bold  md:py-3 py-2 my-7  '>
             Experience
        </h1>

                  <Education class="left" title="B.E Computer Science and Engineering - Spec. AI & ML" timeline="2021-2024" desc="Done Node.js Internship jdeveloping lots of small projects"/>
                  <Education class="right" title="Diploma in Computer Engineering" timeline="2018-2021" desc=""/>
                  <Education class="left" title="10th Grade" timeline="2017-2018" desc=""/>
                 
    </>
  )
}

export default Experience