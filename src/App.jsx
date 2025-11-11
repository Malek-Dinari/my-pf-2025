import Navbar from './components/Navbar'
import TimelineSection from './components/TimelineSection'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { education, experience } from './data/content'

const App = () => {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <TimelineSection
          id="education"
          eyebrow="Education"
          title="Grounded in rigorous engineering programs"
          items={education}
        />
        <TimelineSection
          id="experience"
          eyebrow="Experience"
          title="Hands-on delivery across AI competitions & bootcamps"
          items={experience}
        />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
