import './App.css'
import { useRef, useEffect } from "react";
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import { gsap } from "gsap";
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Bg from './components/Bg';

function App() {
  const body = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      gsap.to(body.current, {
        y: (scrollY * 0.7),
        duration: 0.2
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Bg>
      <Navbar link={['Home', 'Projects', 'About', 'Contact']} />
      <Hero />
      <div className='h-full w-full'>
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </Bg>
  );
}

export default App;
