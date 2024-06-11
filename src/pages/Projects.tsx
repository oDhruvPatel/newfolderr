
import Project from "../components/Project";


const Projects = () => {

 

 
    const LLA = "AI-driven language learning app offering interactive lessons, gamified challenges, and personalized learning paths to make mastering new languages fun and effective.";
    const CCE = "A real-time collaborative code editor enabling seamless teamwork with features like syntax highlighting, version control, and integrated chat for effective group programming.";
    const HPP = "An advanced house price prediction tool using machine learning algorithms to accurately estimate property values based on various market and property features."
    const QSP = "A dynamic and interactive quote-sharing platform where users can discover, share, and save their favorite quotes. Featuring an intuitive interface, this platform allows users to browse a vast collection of quotes categorized by themes, authors, and popularity.";
    return (
    <>
      <div className="md:w-[80vw] m-auto md:mt-9 mt-7 bg-white"  id="Projects">
        <h1 className="text-4xl md:text-center text-center md:text-7xl primary uppercase font-extralight border-b-2 border-t-2 md:py-3 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Projects
        </h1>
        <div className="md:w-[80vw] m-auto md:mt-9 mt-7 bg-white flex md:flex-row flex-wrap flex-col justify-evenly">
          <Project title="Language learnin app" image="https://static.vecteezy.com/system/resources/previews/007/494/775/original/modern-3d-online-languages-learning-class-language-courses-banner-template-for-website-and-mobile-app-development-literal-translation-language-assistant-e-learning-concept-illustration-free-vector.jpg" desc={LLA} tech={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI'] }/>
          <Project title="Collaborative Code Editor" image="https://static.vecteezy.com/system/resources/previews/003/244/481/non_2x/text-editor-programming-icon-with-flat-style-and-dark-theme-free-vector.jpg" desc={CCE} tech={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Skulpt', 'WebSocket'] }/>
          <Project title="House Price Prediction" image="https://static.vecteezy.com/system/resources/previews/005/636/784/non_2x/housing-price-rising-up-real-estate-or-property-growth-concept-with-rising-curve-arrow-vector.jpg" desc={HPP} tech={['Python', 'JavaScript', 'HTML', 'CSS'] }/>
          <Project title="Quote Sharing Application" image="https://www.socialchamp.io/wp-content/uploads/2022/08/A_B-Testing-banners_03_Social-Media-Marketing-Quotes.png.webp" desc={QSP} tech={['React.js','Node.js', 'Express.js', 'MongoDB'] }/>
          <Project title="House Price Prediction" image="https://static.vecteezy.com/system/resources/previews/005/636/784/non_2x/housing-price-rising-up-real-estate-or-property-growth-concept-with-rising-curve-arrow-vector.jpg" desc={HPP} tech={['Ypu', 'sdfs'] }/>
          <Project title="House Price Prediction" image="https://static.vecteezy.com/system/resources/previews/005/636/784/non_2x/housing-price-rising-up-real-estate-or-property-growth-concept-with-rising-curve-arrow-vector.jpg" desc={HPP} tech={['Ypu', 'sdfs'] }/>
          
        </div>
      </div>
    </>
  );
};

export default Projects;
