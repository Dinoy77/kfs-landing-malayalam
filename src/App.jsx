import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Problem  from './components/Problem'
import Courses  from './components/Courses'
import Solution from './components/Solution'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Courses />
        <Solution />
      </main>
      <Footer />
    </>
  )
}