import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>
      <h1 className="text-3xl md:text-center text-center md:text-5xl primary  font-bold  md:py-3 py-2  text-purple-400">
      Contact Me
        </h1>
        
        <div className="md:w-[80vw] w-[100vw] m-auto">
           
           <ContactForm/>   

        </div>
    </>
  )
}

export default Contact