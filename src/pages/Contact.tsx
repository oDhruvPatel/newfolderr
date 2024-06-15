import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>
      <h1 className="text-4xl md:text-center text-center md:text-6xl primary  font-semibold  md:py-3 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
      Contact Me
        </h1>
        
        <div className="md:w-[80vw] w-[100vw] m-auto">
           
           <ContactForm/>   

        </div>
    </>
  )
}

export default Contact