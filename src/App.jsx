import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <div id="home" className='bg-red-300 h-[1000px] w-[100%]'></div>
      <div id="about" className='bg-green-300 h-[1000px] w-[100%]'></div>
      <div id="projects" className='bg-blue-300 h-[1000px] w-[100%]'></div>
    </>
  )
}
