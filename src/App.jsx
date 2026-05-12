import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Subjects from './components/Subjects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body bg-[#0a1628] min-h-screen">
      <Navbar />
      <Hero />
      <Subjects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
