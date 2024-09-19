import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'

export default function App() {
  return (
    <main className="dark:bg-slate-800 bg-slate-200">
      <Nav/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
    </main>
  )
}
