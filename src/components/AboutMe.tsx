import profile from '../assets/dhrub (2).png';

export const AboutMe = () => {
  return (
    <>
    <h1 className="text-3xl md:text-center text-center md:text-5xl primary  font-bold  md:py-3 py-2  text-purple-400">
    About me
        </h1>

        <div className="flex lg:flex-row-reverse flex-col-reverse px-4 pt-4 mt-7 md:mt-9">
          <div className="text-[#adb4c3] md:w-[80%] w-full h-full my-auto text-justify primary lg:pl-4 text-sm lg:text-lg font-normal">
            Hi, I’m Dhruv Patel and i'm a Full stack Software developer with a passion for building robust and scalable
            applications. With a strong foundation in both front-end and
            back-end development, I specialize in creating seamless user
            experiences and efficient, maintainable code. Code optimization is a key aspect of my development process. I am committed to writing
            clean, efficient code that
            maximizes performance and minimizes resource consumption. 
          </div>
          <div className="w-full md:w-[20%] md:mb-0 mb-2  md:rounded-full p-2 ">
            <img src={profile} alt="" className="w-[60%] h-[60%] md:w-full md:h-full m-auto   rounded-full"/>
          </div>
        </div>
    </>
  )
}
