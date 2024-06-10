import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Projects from './pages/Projects'

function App() {
  

  return (
    <>
    <div className=''>
      <Navbar link={['Home', 'Projects', 'About', 'Contact']}/>
      <Hero/>
      <Projects/>
      <About/>
      </div>
       
    </>
  )
}

export default App
