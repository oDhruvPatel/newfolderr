import profile from '../assets/dhruv.png';

export const AboutMe = () => {
  return (
    <>
    <h1 id="About" className='text-4xl md:text-center text-center md:text-7xl primary uppercase font-extralight border-b-2 border-t-2 md:py-3 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500'>
        about me
        </h1>

        <div className="flex md:flex-row-reverse flex-col-reverse px-4 pt-4 mt-7 md:mt-9">
          <div className="md:w-[80%] w-full h-full my-auto text-justify primary md:pl-4 text-sm md:text-lg font-normal">
            Hi, I’m Dhruv Patel and i'm a Full stack Software developer with a passion for building robust and scalable
            applications. With a strong foundation in both front-end and
            back-end development, I specialize in creating seamless user
            experiences and efficient, maintainable code. Code optimization is a key aspect of my development process. I am committed to writing
            clean, efficient code that
            maximizes performance and minimizes resource consumption. 
          </div>
          <div className="w-full md:w-[20%] md:mb-0 mb-2 md:border-2 md:rounded-full p-2 md:bg-slate-200">
            <img src={profile} alt="" className="w-[60%] h-[60%] md:w-full md:h-full m-auto md:border-none border-8 border-slate-200 rounded-full"/>
          </div>
        </div>
    </>
  )
}
