import Education from "./Education"

const AboutEdu = () => {
  return (
    <>

       <h1 className='text-slate-800  text-3xl md:text-center text-center md:text-4xl primary capitalize font-bold  md:py-3 py-2 my-4 '>
             Education
        </h1>

       
                  <Education class="left" title="B.E Computer Science and Engineering" timeline="2021-2024" desc="Completed CS degree with specialization in AI & ML"/>
                  <Education class="right" title="B.E Computer Science and Engineering" timeline="2021-2024" desc="Completed CS degree with specialization in AI & ML"/>
                  <Education class="left" title="B.E Computer Science and Engineering" timeline="2021-2024" desc="Completed CS degree with specialization in AI & ML"/>
                  <Education class="right" title="B.E Computer Science and Engineering" timeline="2021-2024" desc="Completed CS degree with specialization in AI & ML"/>
                  <Education class="left" title="B.E Computer Science and Engineering" timeline="2021-2024" desc="Completed CS degree with specialization in AI & ML"/>
               
    </>
  )
}

export default AboutEdu