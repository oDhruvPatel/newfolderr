import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>
       <h1 id="Contact" className='text-4xl md:mt-9 mt-6 md:text-center text-center md:text-7xl primary uppercase font-extralight border-b-2 border-t-2 md:py-3 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500'>
        Contact Me
        </h1>
        
        <div className="md:w-[80vw] w-[100vw] m-auto">
           
           <ContactForm/>   

        </div>
    </>
  )
}

export default Contact