import './App.css'
import About from './Component/About'
import Features_Section from './Component/Features_Section'
import Hero from './Component/Hero'
import NavBar from './Component/NavBar'

function App() {
  

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar/>
      <Hero />
      <About />
      <Features_Section/>
    </main>
  )
}

export default App
