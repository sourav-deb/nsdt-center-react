import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import GridSection from './components/Grid-Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <GridSection />
      <main className="container mx-auto px-4 py-8">
        {/* Your page content will go here */}
  
      </main>
    </>
  )
}

export default App
