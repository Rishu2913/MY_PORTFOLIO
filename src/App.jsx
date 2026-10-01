import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import CurrentlyBuilding from './sections/CurrentlyBuilding'
import FeaturedWork from './sections/FeaturedWork'
import ProblemSolving from './sections/ProblemSolving'
import Learning from './sections/Learning'
import About from './sections/About'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CurrentlyBuilding />
      <FeaturedWork />
      <ProblemSolving />
      <Learning />
      <About />
      <Contact />
    </>
  )
}

export default App