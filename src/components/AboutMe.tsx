import profile from "../assets/dhrub (2).png";

export const AboutMe = () => {
  return (
    <>
      <h1 className="text-3xl md:text-center text-center md:text-5xl primary  font-bold  md:py-3 py-2  text-white/75">
        About me
      </h1>

      <div className="flex lg:flex-row-reverse flex-col-reverse px-4 pt-4 mt-7 md:mt-0">
        <div className="text-[#adb4c3] md:w-[80%] w-full h-full my-auto text-justify primary lg:pl-4 text-sm lg:text-lg font-normal">
          Hi, I'm Dhruv Patel, a Full Stack Software Developer with a passion
          for crafting user-centric applications that are both robust and
          scalable. My expertise bridges the front-end and back-end, ensuring a
          seamless user experience while maintaining a focus on clean,
          efficient, and maintainable code. Code optimization is a cornerstone
          of my development process. I take pride in delivering applications
          that not only perform exceptionally well but are also built to last,
          minimizing resource consumption and accommodating future growth. With
          a collaborative spirit and a commitment to continuous learning, I'm
          always eager to tackle new challenges and explore innovative
          technologies to deliver the most effective software solutions for your
          needs.
        </div>
        <div className="w-full md:w-[20%] md:mb-0 mb-2  md:rounded-full p-2 ">
          <img
            src={profile}
            alt=""
            className="w-[60%] h-[60%] md:w-full md:h-full m-auto   rounded-full"
          />
        </div>
      </div>
    </>
  );
};
