// Projects.js
import Project from '../components/Project';
import CCEI from '../assets/CCE.png';
import lang from '../assets/LLAa.png';
import quo from '../assets/QSA.png';
import todoo from '../assets/TODO.png';

const Projects = () => {
  const LLA = "AI-driven language learning app offering interactive lessons, gamified challenges, and personalized learning paths to make mastering new languages fun and effective.";
  const CCE = "A real-time collaborative code editor enabling seamless teamwork with features like syntax highlighting, version control, and integrated chat for effective group programming.";
  const HPP = "An advanced house price prediction tool using machine learning algorithms to accurately estimate property values based on various market and property features.";
  const QSP = "A dynamic and interactive quote-sharing platform where users can discover, share, and save their favorite quotes. Featuring an intuitive interface, this platform allows users to browse a vast collection of quotes categorized by themes, authors, and popularity.";
  const todo = "I developed a fully functional Todo application using React and Redux to demonstrate my skills in state management and component-based architecture. This project showcases my ability to create a scalable and maintainable application with a clear separation of concerns.";

  return (
    <>
      <div className="md:w-[80vw] m-auto md:mt-9 mt-7 bg-[]" id="Projects">
        <h1 className="text-3xl md:text-center text-center md:text-5xl primary font-bold md:py-3 py-2 text-purple-400">
          Projects
        </h1>
        <div className="md:w-[80vw] m-auto md:mt-9 mt-7 bg-[] flex md:flex-row flex-wrap gap-8 flex-col justify-left">
          <Project
            title="Language learning app"
            image={<img src={lang} alt="Language Learning App" />}
            desc={LLA}
            tech={['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Open AI']}
          />
          <Project
            title="Collaborative Code Editor"
            image={<img src={CCEI} alt="Collaborative Code Editor" />}
            desc={CCE}
            tech={['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'Socket.io']}
          />
          <Project
            title="House Price Prediction"
            image={<img src={quo} alt="House Price Prediction" />}
            desc={HPP}
            tech={['Machine Learning', 'Python', 'JavaScript', 'HTML', 'CSS']}
          />
          <Project
            title="Quote Sharing Application"
            image={<img src={quo} alt="Quote Sharing Application" />}
            desc={QSP}
            tech={['React.js', 'Node.js', 'Express.js', 'MongoDB']}
          />
          <Project
            title="Todo App"
            image={<img src={todoo} alt="Todo App" />}
            desc={todo}
            tech={['React.js', 'Redux']}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
